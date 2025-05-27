function calculateRisk(input) {
  if (!input || typeof input.claim_history !== "string") {
    return { error: "there is an error" };
  }

  const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  const history = input.claim_history.toLowerCase();
  let risk = 0;

  if (history == "") {
    risk = 1;
  } else {
    keywords.forEach((word) => {
      if (history.includes(word)) {
        risk += 1;
      }
    });
  }

  return { risk_rating: Math.min(risk, 5) };
}

module.exports = calculateRisk;
