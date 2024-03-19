const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const connectMongoDb = require('./init/mongodb')
const todoRoute = require('./routes/todo')
const app = require('./app')

const PORT = 8000 // process.env.PORT

// init app
// const app = express()

// const connectionUrl = "mongodb://localhost:27017/todoDb"

// // Mongo db Database connection
// mongoose
//     .connect(connectionUrl)
//     .then(() => console.log("Database connection successful"))
//     .catch((error) => console.log(error.message))

// connectMongoDb()


// const todoSchema = mongoose.Schema(
//     {
//         title: { type: String, required: true },
//         desc: String, 
//     },
//     {timestamps: true}
// )
// // Todo model
// const Todo = mongoose.model("todo", todoSchema)

// Todo()


// // view engine
// app.set("view engine", "ejs")
// app.use(express.static(path.join(__dirname, "public",)))
// app.use(bodyParser.json({ extended: true }))
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use("/", todoRoute)



// // controller
// app.get("/", async (req, res, next) => {
//         try{
//             const todos = await Todo.find({}).sort({ createdAt: -1 })
//             res.locals.moment = moment

//             res.render("index", { title: "To-do List", todos })
//         } catch(error){
//             res.status(500).json({ message: error.message })
//         }
//     }
// )

// // routes
// app.get("/add-todo", async(req, res, next) => {
//         try{

//             res.render("newToDo", { title: "New To-do"})
//         } catch(error){
//             res.status(500).json({ message: error.message })
//         }
//     }
// )

// app.get("/update-todo", (req, res, next) => {
//     try{
//         res.render("updateToDo", { title: "Update To-do"})
//     } catch(error){
//         res.status(500).json({ message: error.message })
//     }
// }
// )

// app.get("/delete-todo", (req, res, next) => {
//     try{
//         res.render("deleteToDo", { title: "Delete To-do" })
//     } catch(error){
//         res.status(500).json({ message: error.message })
//     }
// })

// app.post("/add-todo", async (req, res, next) =>{
//     try{
//         const { title, desc } = req.body
        
//         if (!title || !desc) {
//             return res.status(400).json({ message: "Please fill both fields!" });
//         }

//         const newTodo = new Todo({title, desc})
//         await newTodo.save()

//         res.redirect("/")

//     } catch(error){
//        res.status(500).json({ message: error.message }) 
//     }
// })



// listen to server
app.listen(PORT, ()=>{
    console.log(`Server listening at ${PORT}`)
    }
)