const express = require('express')
const router = express.Router()
const todo = require('../controllers/todo')


// controllers
// home
router.get("/", todo.homeController)

// routes
// add to-do route
router.get("/add-todo", todo.addTodoFormController)

// update to-do route
router.get("/update-todo", todo.updateTodoFormController)

// get to-do to delete
router.get("/delete-todo", todo.deleteTodoFormController)

// delete to-do route
router.get("/confirm-delete", todo.deleteTodoController)

// post to-do route
router.post("/add-todo", todo.postTodoFormController)

// update to-do route
router.post("/update-todo/:id", todo.updateTodoController)

module.exports = router