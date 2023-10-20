import { useTax } from "../../context/TaxContext";

const TaxResult = () => {
  const { results } = useTax();

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-3xl font-bold underline mb-4">Results:</h2>
      <div className="mb-4">
        <p className="text-lg font-semibold">
          Total Taxes Owed:
          <span className="text-blue-500 ml-2">
            $
            {results?.total?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </span>
        </p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Taxes Owed per Band:</p>
        {results?.perBand?.map((band, index) => (
          <div key={index} className="mb-2">
            <span className="font-semibold">Min:</span> {band.min} |{" "}
            <span className="font-semibold">Max:</span> {band.max} |{" "}
            <span className="font-semibold">Tax:</span> ${band.tax}
          </div>
        ))}
      </div>
      <div>
        <p className="text-lg font-semibold">
          Effective Tax Rate:
          <span className="text-blue-500 ml-2">
            {results ? results.rate.toFixed(2) + "%" : ""}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TaxResult;
