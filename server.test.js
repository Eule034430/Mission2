// const request = require("supertest");
// const app = require("./server"); // Import your Express app from server.js

// describe("app", () => {
//   // Test 1: Successful calculation (Sunny day scenario)
//   it("should return a 200 status and the correct car_value for valid input", async () => {
//     const requestBody = { model: "Civic", year: 2020 };
//     const response = await request(app)
//       .post("/calculate-car-value")
//       .send(requestBody)
//       .expect("Content-Type", /json/) // Check if the content type is JSON
//       .expect(200); // Check for a 200 OK status

//     // (3+9+22+9+3)*100 + 2020 = 46*100 + 2020 = 6620
//     expect(response.body).toHaveProperty("car_value");
//     expect(response.body.car_value).toBe(6620);
//   });

//   // Test 2: Input with space in model name
//   it("should return a 200 status and correct value for model with spaces", async () => {
//     const requestBody = { model: "Honda Civic", year: 2018 };
//     const response = await request(app)
//       .post("/calculate-car-value")
//       .send(requestBody)
//       .expect(200);
//     // H(8) + O(15) + N(14) + D(4) + A(1) + C(3) + I(9) + V(22) + I(9) + C(3) = 88
//     // 88 * 100 + 2018 = 10818
//     expect(response.body.car_value).toBe(10818);
//   });

//   // Test 3: Missing 'model' parameter
//   it('should return a 400 status if "model" is missing', async () => {
//     const requestBody = { year: 2020 }; // Model is missing
//     const response = await request(app)
//       .post("/calculate-car-value")
//       .send(requestBody)
//       .expect("Content-Type", /json/)
//       .expect(400);

//     expect(response.body).toHaveProperty("error");
//     expect(response.body.error).toBe(
//       "Missing 'model' or 'year' in request body"
//     );
//   });

//   // Test 4: Missing 'year' parameter
//   it('should return a 400 status if "year" is missing', async () => {
//     const requestBody = { model: "Corolla" }; // Year is missing
//     const response = await request(app)
//       .post("/calculate-car-value")
//       .send(requestBody)
//       .expect("Content-Type", /json/)
//       .expect(400);

//     expect(response.body).toHaveProperty("error");
//     expect(response.body.error).toBe(
//       "Missing 'model' or 'year' in request body"
//     );
//   });

//   // Test 5: Invalid data type for 'year' (e.g., string instead of number)
//   it('should return a 400 status if "year" is not a number', async () => {
//     const requestBody = { model: "Accord", year: "notAYear" };
//     const response = await request(app)
//       .post("/calculate-car-value")
//       .send(requestBody)
//       .expect("Content-Type", /json/)
//       .expect(400);

//     expect(response.body).toHaveProperty("error");
//     expect(response.body.error).toBe(
//       "Invalid input values. Model must be a string with letters, and year must be a number."
//     );
//   });

//   // Test 6: Invalid 'model' (e.g., empty string, which should be caught by calculateValue)
//   it('should return a 400 status if "model" is an empty string', async () => {
//     const requestBody = { model: "", year: 2020 };
//     const response = await request(app)
//       .post("/calculate-car-value")
//       .send(requestBody)
//       .expect("Content-Type", /json/)
//       .expect(400);

//     expect(response.body).toHaveProperty("error");
//     expect(response.body.error).toBe(
//       "Invalid input values. Model must be a string with letters, and year must be a number."
//     );
//   });

//   // Test 7: Model with string containing digits returns just the year
//   it("should return a 400 status if model has no alphabetic characters", async () => {
//     const requestBody = { model: "123-456", year: 2020 };
//     const response = await request(app)
//       .post("/calculate-car-value")
//       .send(requestBody)
//       .expect("Content-Type", /json/)
//       .expect(200);

//     expect(response.body).toHaveProperty("car_value");
//     expect(response.body.car_value).toBe(2020); // Since model has no letters, it should return just the year
//   });
// });
