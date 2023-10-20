export async function fetchTaxBrackets(year) {
  try {
    const response = await fetch(
      `http://localhost:5000/tax-calculator/tax-year/${year}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch tax brackets");
    }
    const data = await response.json();
    return data.tax_brackets;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for the caller to handle
  }
}
