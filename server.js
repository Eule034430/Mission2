const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const { calculateValue } = require("./API-1/car-value");

// Initialize the Express application
const app = express();
const port = process.env.PORT;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

//=================API 1 Endpoint==================//

app.post("/calculate-car-value", (req, res) => {
  const { model, year } = req.body;
  console.log("Received request for /calculate-car-value:", req.body);

  // More detailed validation is handled by calculateValue
  if (model === undefined || year === undefined) {
    console.error("API Error: Missing 'model' or 'year' in request body.");
    return res
      .status(400)
      .json({ error: "Missing 'model' or 'year' in request body" });
  }

  // Calculate the car value using the imported helper function
  const carValue = calculateValue(model, year);

  if (carValue === null) {
    console.error(
      "API Error: Invalid input values provided to calculateValue."
    );
    return res.status(400).json({
      error:
        "Invalid input values. Model must be a string with letters, and year must be a number.",
    });
  }
  console.log(`Calculated value for ${model} (${year}): ${carValue}`);
  res.status(200).json({ car_value: carValue });
});

//=================API 2 Endpoint==================//

//=================API 3 Endpoint=================//

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log("Server is running!!!!!!");
  });
}

module.exports = app;
