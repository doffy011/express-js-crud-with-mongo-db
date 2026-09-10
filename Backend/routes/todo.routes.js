const express = require("express");

const router = express.Router();

const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo
} = require("../controller/todo.controller");

router.route("/")
  .post(createTodo)
  .get(getTodos);

router.route("/:id")
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;