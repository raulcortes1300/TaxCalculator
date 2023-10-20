import { useTax } from "../../context/TaxContext";

const TaxYearInput = () => {
  const { year, setYear } = useTax();

  return (
    <label className="block text-gray-700 font-bold mb-2">
      Tax Year:
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="block w-full bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </label>
  );
};

export default TaxYearInput;
