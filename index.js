import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
const port = 4000;
app.post("/bfhl", (req, res) => {
  const data = req.body.data || [];
  console.log(data);
  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const highestLowercase = alphabets.filter(
    (char) => char === char.toLowerCase()
  );
  const maxLowercase =
    highestLowercase.length > 0
      ? [highestLowercase.reduce((a, b) => (a > b ? a : b))]
      : [];

  res.json({
    is_success: true,
    user_id: "harsha_kopula_24052004",
    email: "koppulaharsha.kumari2021@vitstudent.ac.in",
    roll_number: "21BCT0269",
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: maxLowercase,
  });
});

app.get("/bfhl", (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "Bajaj Server is UP and Live🔥🔥🔯 ",
  });
});

app.listen(port, () => {
  console.log(`Bajaj Seerver is running on PORT : ${port}`);
});
