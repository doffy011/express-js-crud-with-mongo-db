const Todo = require("../model/todo.model");

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!todo) {
      return res.status(404).json({
        message: "Todo မတွေ့ပါ"
      });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo မတွေ့ပါ"
      });
    }

    res.status(200).json({
      message: "Todo ဖျက်ပြီးပါပြီ"
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};