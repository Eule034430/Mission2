const { calculateValue } = require("../car-value"); // Assuming car-value.js is in the same directory

describe("calculateValue", () => {
  // Test Case 1: Basic model
  test('should correctly calculate value for "Civic", 2020', () => {
    expect(calculateValue("Civic", 2020)).toBe(6620); // (3+9+22+9+3)*100 + 2020 = 4600 + 2020 = 6620
  });

  // Test Case 2: Model with space
  test('should correctly calculate value for "Honda Civic", 2018', () => {
    // H=8, O=15, N=14, D=4, A=1, C=3, I=9, V=22, I=9, C=3 => Sum = 88 (mistake in manual calc in prompt, should be 88)
    // My previous manual calc was 89, let's re-verify:
    // H(8) + O(15) + N(14) + D(4) + A(1) + C(3) + I(9) + V(22) + I(9) + C(3) = 88
    expect(calculateValue("Honda Civic", 2018)).toBe(88 * 100 + 2018); // 8800 + 2018 = 10818
  });

  // Test Case 3: Model with only numbers (should result the year)
  test('should correctly return year of the model "911" (only numbers), 2020', () => {
    expect(calculateValue("911", 2020)).toBe(2020);
  });

  // Test Case 4: Model with hyphen (hyphen ignored)
  test('should correctly calculate value for "Task-Force", 1987', () => {
    // T=20, A=1, S=19, K=11, F=6, O=15, R=18, C=3, E=5 => Sum = 98
    expect(calculateValue("Task-Force", 1987)).toBe(98 * 100 + 1987); // 9800 + 1987 = 11787
  });

  // Test Case 5: Model with letters and numbers (numbers ignored)
  test('should correctly calculate value for "C200", 2022', () => {
    // C=3 => Sum = 3
    expect(calculateValue("C200", 2022)).toBe(3 * 100 + 2022); // 300 + 2022 = 2322
  });

  // Test Case 6: Single letter model
  test('should correctly calculate value for "A", 2000', () => {
    expect(calculateValue("A", 2000)).toBe(1 * 100 + 2000); // 100 + 2000 = 2100
  });

  // Test Case 7: Case-insensitivity check (lowercase model)
  test('should correctly calculate value for "bmw", 0 (year zero)', () => {
    // B=2, M=13, W=23 => Sum = 38
    expect(calculateValue("bmw", 0)).toBe(38 * 100 + 0); // 3800
  });

  // Test Case 8: Negative year
  test('should return null for negative year "Ford", -500', () => {
    expect(calculateValue("Ford", -500)).toBeNull();
  });

  // Test Case 9: Empty string for model
  test('should return null for empty model "", 2021', () => {
    expect(calculateValue("", 2021)).toBeNull();
  });

  // Test Case 10: Model with only spaces
  test('should return null for model with only spaces "   ", 2021', () => {
    expect(calculateValue("   ", 2021)).toBeNull();
  });

  // Test Case 11: Model with special character (ignored)
  test('should correctly calculate value for "Model!", 2010', () => {
    // M=13, O=15, D=4, E=5, L=12 => Sum = 49
    expect(calculateValue("Model!", 2010)).toBe(49 * 100 + 2010); // 4900 + 2010 = 6910
  });

  // Test Case 12: Null value for year
  test('should return null for year "Car", null', () => {
    expect(calculateValue("Car", null)).toBeNull();
  });

  // Test Case 13: Year as a string
  test('should return null for year as string "Truck", "2020"', () => {
    expect(calculateValue("Truck", "2020")).toBeNull();
  });

  // Test Case 14: Null value for model
  test("should return null for model null, 2020", () => {
    expect(calculateValue(null, 2020)).toBeNull();
  });

  // Test Case 15: Model as a number
  test("should return null for model as number 123, 2020", () => {
    expect(calculateValue(123, 2020)).toBeNull();
  });

  // Test Case 16: Model with leading/trailing spaces
  test('should correctly calculate value for "  Oldsmobile  ", 1995', () => {
    // O=15, L=12, D=4, S=19, M=13, O=15, B=2, I=9, L=12, E=5 => Sum = 106
    expect(calculateValue("  Oldsmobile  ", 1995)).toBe(106 * 100 + 1995); // 10600 + 1995 = 12595
  });
});
