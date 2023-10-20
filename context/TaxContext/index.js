import { useContext, useState, createContext } from "react";

const TaxContext = createContext();

export const TaxProvider = ({ children }) => {
  const [year, setYear] = useState("2022");
  const [income, setIncome] = useState("");
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <TaxContext.Provider
      value={{
        year,
        setYear,
        income,
        setIncome,
        error,
        setError,
        results,
        setResults,
        loading,
        setLoading,
      }}
    >
      {children}
    </TaxContext.Provider>
  );
};

export const useTax = () => {
  return useContext(TaxContext);
};
