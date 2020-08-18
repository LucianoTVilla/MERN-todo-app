const express = require('express');
const mongoose = require('mongoose');

const Todo = require('./models/Todo');


const router = express.Router = express.Router();


router.get('/', (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

router.post('/create', (req, res) => {
  const todo = new Todo(req.body);
  todo.save()
    .then((todo) => {
      res.json(todo);
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send('Todo not found');
    } else {
      todo.text = req.body.text
      todo
        .save()
        .then(todo => {
          res.json(todo)
        })
        .catch(err => res.status(500).send(err.message))
    }
  })
});


router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send('Todo not found');
    } else {
      Todo.remove({
        _id: req.params.id
      }, function(err, task) {
        if (err)
          res.send(err);
        res.json({ message: 'Task successfully deleted' });
      });
    }
  })
})

module.exports = router;