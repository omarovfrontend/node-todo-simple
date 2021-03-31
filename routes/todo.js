const express = require('express');
const router = express.Router();
const TodoModel = require('../models/Todo');

// http://localhost:5001/api/todo (GET)
router.get('/', async (req, res) => {
  try {
    const todos = await TodoModel.find({});
    res.status(200).json(todos);
  } catch (e) {
    res.status(500).json(e)
  }
});

// http://localhost:5001/api/todo (POST)
router.post('/', async (req, res) => {
  const todoData = {
    title: req.body.title,
    completed: req.body.completed
  };

  try {
    const todo = new TodoModel(todoData);
    await todo.save();
    res.status(201).json(todo);
  } catch (e) {
    res.status(500).json(e)
  }
});

// http://localhost:5001/api/todo (PUT)
router.put('/:id', async (req, res) => {
  const $set = {
    completed: req.body.completed
  }

  try {
    const todo = await TodoModel.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set
    }, {
      new: true
    })

    res.status(200).json(todo)
  } catch (e) {
    res.status(500).json(e)
  }
})

// http://localhost:5001/api/todo/id (DELETE)
router.delete('/:id', async (req, res) => {
  const {id} = req.params;

  try {
    await TodoModel.remove({_id: id});
    res.status(200).json('remove!')
  } catch (e) {
    res.status(500).json(e)
  }
});

module.exports = router;
