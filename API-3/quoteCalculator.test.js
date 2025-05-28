// quoteCalculator.test.js
const calculateQuote = require("./quoteCalculator");

test("1. Sunny day scenario: car value 4417, risk rating 5", () => {
  const input = { carValue: 4417, riskRating: 5 };
  const expectedOutput = { monthly_premium: 18.4, yearly_premium: 220.8 };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});

test("2. Second valid scenario: car value 5000, risk rating 3", () => {
  const input = { carValue: 5000, riskRating: 3 };

  const expectedOutput = { monthly_premium: 12.5, yearly_premium: 150 };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});

test("3. Boundary: Car value = 0", () => {
  const input = { carValue: 0, riskRating: 3 };

  const expectedOutput = { monthly_premium: 0, yearly_premium: 0 };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});

test("4. Boundary: lowest risk rating",() => {
  const input = { carValue: 2500, riskRating: 1 };

  const expectedOutput = { monthly_premium: 2.1, yearly_premium: 25 };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});

test("5. Boundary: highest risk rating",() => {
  const input = { carValue: 85000, riskRating: 5 };

  const expectedOutput = { monthly_premium: 354.2, yearly_premium: 4250 };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});

test("6. Negative case: - car value", () => {
  const input = { carValue: -1000, riskRating: 3 };

  const expectedOutput = { error: "Error, Something is wrong!" };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});

test("7. Risk rating too low", () => {
  const input = { carValue: 2500, riskRating: 0 };

  const expectedOutput = { error: "Error, Something is wrong!" };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});

test("8. Risk rating too high", () => {
  const input = { carValue: 2500, riskRating: 55 };

  const expectedOutput = { error: "Error, Something is wrong!" };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});
test("9. Invalid data type for risk rating", () => {
  const input = { carValue: 2500, riskRating: `nil` };

  const expectedOutput = { error: "Error, Something is wrong!" };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});
test("10. Invalid data type for car value", () => {
  const input = { carValue: 2500, riskRating: `nil` };

  const expectedOutput = { error: "Error, Something is wrong!" };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});
test("11. Missing car value", () => {
  const input = { riskRating: 3 };

  const expectedOutput = { error: "Error, Something is wrong!" };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});

test ("12. Missing risk rating",() => {
  const input = { carValue: 2500 };

  const expectedOutput = { error: "Error, Something is wrong!" };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});
test("13. Missing car value & risk rating",() => {
  const input = { };

  const expectedOutput = { error: "Error, Something is wrong!" };

  const result = calculateQuote(input.carValue, input.riskRating);

  expect(result).toEqual(expectedOutput);
});
