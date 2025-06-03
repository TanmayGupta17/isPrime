const express = require("express");
const app = express();

app.get("/isPrime", (req, res) => {
  const num = parseInt(req.query.number);

  if (isNaN(num)) {
    return res.status(400).send({ error: "Invalid number" });
  }

  if (num <= 1) {
    return res.send({ number: num, isPrime: false });
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return res.send({ number: num, isPrime: false });
    }
  }

  res.send({ number: num, isPrime: true });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Prime Number Checker API! Use /isPrime?number=your_number to check if a number is prime."
  );
});
