import { useTax } from "../../context/TaxContext";

const AnnualIncomeInput = () => {
  const { income, setIncome, setError } = useTax();

  const handleInputChange = (e) => {
    const input = e.target.value;

    if (input >= 1) {
      setIncome(input);
      setError(null); //clear any previous error
    } else {
      setError("Please enter a valid income");
    }
  };

  return (
    <label className="block text-gray-700 font-bold mb-2">
      Annual Income:
      <input
        type="number"
        value={income}
        onChange={handleInputChange}
        className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
      />
    </label>
  );
};

export default AnnualIncomeInput;
