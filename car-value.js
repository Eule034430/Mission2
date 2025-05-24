/**
 * Calculates the car value based on the model and year.
 * Business rules:
 * - Car_value = (sum of alphabet positions of letters in model) * 100 + year.
 * - Alphabet position: A=1, B=2, ..., Z=26.
 * - Spaces and any other non-alphabetic signs in the model are ignored.
 * - Returns null if inputs are invalid (e.g., empty model, non-numeric year, model with no letters).
 *
 * @param {string} model - The car model.
 * @param {number} year - The car year.
 * @returns {number|null} The calculated car value or null if an error occurs.
 */
function calculateValue(model, year) {
  // Validate model: should be a non-empty string
  if (typeof model !== "string" || model.trim() === "") {
    console.error(
      "Validation Error (calculateValue): Model must be a non-empty string."
    );
    return null;
  }

  // Validate year: should be a number
  if (typeof year !== "number" || isNaN(year)) {
    console.error("Validation Error (calculateValue): Year must be a number.");
    return null;
  }

  let modelValueSum = 0;
  const upperModel = model.toUpperCase(); // Convert to uppercase to handle both cases (A=a)

  // Iterate over each character in the model name
  for (let i = 0; i < upperModel.length; i++) {
    const char = upperModel[i];
    // Check if the character is an alphabet letter (A-Z)
    if (char >= "A" && char <= "Z") {
      // Calculate position (A=1, B=2, ..., Z=26)
      // 'A'.charCodeAt(0) gives the ASCII value of 'A'
      modelValueSum += char.charCodeAt(0) - "A".charCodeAt(0) + 1;
    }
    // Spaces and other non-alphabetic signs are ignored as per the rule
  }

  // If no alphabetic characters were found in the model, it's an invalid model for this logic
  if (modelValueSum === 0) {
    console.error(
      "Calculation Error (calculateValue): Model contains no valid alphabetic characters."
    );
    return null;
  }

  const carValue = modelValueSum * 100 + year;
  return carValue;
}

// Export the function to be used by other modules
module.exports = {
  calculateValue,
};
