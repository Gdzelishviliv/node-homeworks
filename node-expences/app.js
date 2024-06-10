/*
შევქმნათ expense-manager აპლიკაციის ენდფოინთები express-ის დახმარებით.
დამატება, განახლება, წაკითხვა, წაშლა (ვგულისხმობთ REST API endpoint_ებს). 
ხარჯის ობიექტს უნდა ქონდეს შემდეგი ველები:
id, name, cost, createdAt
expense-manager აპლიკაციაში დავამატოთ დინამიური გვერდი, 
სადაც სერვერი დააბრუნებს ხარჯს id-ის დახმარებით (იგულისხმება html გვერდი)
*/

import express from "express";
import bodyParser from "body-parser";
import moment from "moment";

const app = express();
const PORT = 3001;
app.use(bodyParser.json());

let expenses = [];
let currentId = 1;

app.post("/api/expenses", (req, res) => {
  const created = moment().locale("ka").format("LLLL");
  const { name, cost } = req.body;
  const newExpense = {
    id: currentId++,
    name,
    cost,
    created,
  };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

app.get("/api/expenses", (_req, res) => {
  res.json(expenses);
});

app.get("/api/expenses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find((exp) => exp.id === id);
  if (expense) {
    res.json(expense);
  } else {
    res.status(404).send("expense not found");
  }
});

app.put("/api/expenses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find((exp) => exp.id === id);
  if (expense) {
    const { name, cost } = req.body;
    expense.name = name;
    expense.cost = cost;
    res.json(expense);
  } else {
    res.status(404).send("expense not found");
  }
});

app.delete("/api/expenses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = expenses.findIndex((exp) => exp.id === id);
  if (index > -1) {
    const deletedExpense = expenses.splice(index, 1);
    res.json(deletedExpense);
    console.log("expense deleted succesfully !!!");
  } else {
    res.status(404).send("expense not found");
  }
});

app.get("/expenses-page/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find((exp) => exp.id === id);
  if (expense) {
    res.send(`
      <html>
        <body>
          <h1>Expense Details</h1>
          <p>Id: ${expense.id}</p>
          <p>Name: ${expense.name}</p>
          <p>Cost: ${expense.cost}</p>
        </body>
      </html>
      `);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});