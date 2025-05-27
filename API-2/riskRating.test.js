const calculateRisk = require("./riskRating");

describe("Risk Rating Calculation", () => {
  test("1 match", () => {
    const input = { claim_history: "No crashes or incidents." };
    expect(calculateRisk(input)).toEqual({ risk_rating: 1 });
  });

  test("3 matches", () => {
    const input = { claim_history: "Crash, bump, and scratch all occurred." };
    expect(calculateRisk(input)).toEqual({ risk_rating: 3 });
  });

  test("1 match", () => {
    const input = { claim_history: "" };
    expect(calculateRisk(input)).toEqual({ risk_rating: 1 });
  });

  test("Missing claim", () => {
    const input = {};
    expect(calculateRisk(input)).toEqual({ error: "there is an error" });
  });

  test("Wrong data type", () => {
    const input = { claim_history: 123 };
    expect(calculateRisk(input)).toEqual({ error: "there is an error" });
  });
});
