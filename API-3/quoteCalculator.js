// quoteCalculator.js
function calculateQuote(carValue, riskRating) {
  if (
    typeof carValue !== "number" ||
    typeof riskRating !== "number" ||
    carValue < 0 ||
    riskRating < 1 ||
    riskRating > 5
  ) {
    return { error: "Error, Something is wrong!" };
  }

  const yearlyPremium = parseFloat(((carValue * riskRating) / 100).toFixed(1));
  const monthlyPremium = parseFloat((yearlyPremium / 12).toFixed(1));

  return {
    monthly_premium: monthlyPremium,
    yearly_premium: yearlyPremium,
  };
}

module.exports = calculateQuote;
