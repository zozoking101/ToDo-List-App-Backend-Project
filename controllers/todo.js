const Todo = require('../models/Todo')
const moment = require('moment')


const homeController = async (req, res, next) => {
    try{
        const todos = await Todo.find({}).sort({ createdAt: -1 })
        res.locals.moment = moment

        res.render("index", { title: "To-do List", todos })
    } catch(error){
        res.status(500).json({ message: error.message })
    }
}

const addTodoFormController = async(req, res, next) => {
    try{
        
        res.render("newToDo", { title: "New To-do" })
    } catch(error){
        res.status(500).json({ message: error.message })
    }
}

const updateTodoFormController = async(req, res, next) => {
    try{
        const { id } = req.query
        const todo = await Todo.findById(id)
        res.render("updateToDo", { title: "Update To-do", todo })
    } catch(error){
        res.status(500).json({ message: error.message })
    }
}

const deleteTodoFormController = async(req, res, next) => {
    try{
        const { id } = req.query
        res.render("deleteToDo", { title: "Delete To-do", id})
    } catch(error){
        res.status(500).json({ message: error.message })
    }
}

const deleteTodoController = async(req, res, next) => {
    try{
        const { id, confirm } = req.query
        
        if (confirm === "yes"){
            await Todo.findByIdAndDelete(id)
        } 
        res.redirect("/")
    }
     catch(error){
        res.status(500).json({ message: error.message })
    }
}

const postTodoFormController = async (req, res, next) =>{
    try{
        const { title, desc } = req.body
        
        if (!title || !desc) {
            return res.status(400).json({ message: "Please fill both fields!" });
        }
    
        const newTodo = new Todo({title, desc})
        await newTodo.save()
    
        res.redirect("/")
    
    } catch(error){
       res.status(500).json({ message: error.message }) 
        }
    }

const updateTodoController = async(req, res, next) => {
    try{
        const { id } = req.params
        const { title, desc } = req.body

        const todo = await Todo.findById(id)

        if(!todo) {
            return res.status(404).json({ message: "Task not found!" })
        }

        todo.title = title
        todo.desc = desc

        await todo.save()

        res.redirect("/")
    } catch(error){
        res.status(500).json({ message: error.message })
    }
}

module.exports = { 
    homeController, 
    addTodoFormController, 
    updateTodoFormController, 
    deleteTodoFormController,
    postTodoFormController, 
    updateTodoController,
    deleteTodoController
    }