const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

app.listen(5000, () => {
  console.log(`Server is listening on port 5000.`);
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/todo", async (request, response) => {
  try {
    const { description } = request.body;
    const addTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    response.json(addTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/todos", async (request, response) => {
  try {
    const todos = await pool.query("SELECT * FROM todo");
    response.json(todos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/todo/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);
    response.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/todo/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const todo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);
    response.json(`Todo with id ${id} was deleted.`);
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/todo/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { description } = request.body;
    const todo = await pool.query(
      "UPDATE todo SET description = $1 WHERE id = $2;",
      [description, id]
    );
    response.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
