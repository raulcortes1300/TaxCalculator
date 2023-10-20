// Calculate total tax owed based on income and tax brackets
export function calculateTotalTax(income, taxBrackets) {
  let totalTax = 0;

  for (let i = taxBrackets.length - 1; i >= 0; i--) {
    const bracket = taxBrackets[i];
    if (income > bracket.min) {
      const taxableIncome =
        Math.min(income, bracket.max || income) - bracket.min;
      totalTax += taxableIncome * bracket.rate;
    }
  }

  return totalTax;
}

// Calculate taxes owed per tax bracket
export function calculateTaxesPerBand(income, taxBrackets) {
  const taxesPerBand = [];

  for (let i = taxBrackets.length - 1; i >= 0; i--) {
    const bracket = taxBrackets[i];
    if (income > bracket.min) {
      const taxableIncome =
        Math.min(income, bracket.max || income) - bracket.min;
      const taxForBand = taxableIncome * bracket.rate;
      taxesPerBand.push({
        min: bracket.min,
        max: bracket.max,
        tax: taxForBand,
      });
    }
  }

  return taxesPerBand;
}

// Calculate the effective tax rate
export function calculateEffectiveTaxRate(income, totalTax) {
  return (totalTax / income) * 100;
}
