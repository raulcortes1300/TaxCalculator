import { useTax } from "../../context/TaxContext";
import { fetchTaxBrackets } from "../../utils/api";
import {
  calculateEffectiveTaxRate,
  calculateTaxesPerBand,
  calculateTotalTax,
} from "../../utils/taxCalculations";
import AnnualIncomeInput from "../AnnualncomeInput/AnnualIncomeInput.component";
import ErrorAlert from "../ErrorAlert/ErrorAlert.component";
import TaxResult from "../TaxResult/TaxResult.component";
import TaxYearInput from "../TaxYearInput/TaxYearInput.component";

const TaxCalculator = () => {
  const {
    year,
    income,
    error,
    setError,
    results,
    setResults,
    loading,
    setLoading,
  } = useTax();
  const handleCalculateTaxes = async () => {
    try {
      setLoading(true);
      const brackets = await fetchTaxBrackets(year);
      const total = calculateTotalTax(income, brackets);
      const perBand = calculateTaxesPerBand(income, brackets);
      const rate = calculateEffectiveTaxRate(income, total);
      setResults({ total, perBand, rate });
      setError(null);
    } catch (error) {
      setError("Error calculating taxes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Tax Calculator</h1>
        <div className="mb-4">
          <TaxYearInput />
        </div>
        <div className="mb-4">
          <AnnualIncomeInput />
        </div>
        <button
          onClick={handleCalculateTaxes}
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          {loading ? "Calculating..." : "Calculate Taxes"}
        </button>
        {loading ? (
          <p className="mt-4 text-center">Loading...</p>
        ) : (
          <div className="mt-4">
            {error && <ErrorAlert />}
            {results && <TaxResult />}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaxCalculator;
