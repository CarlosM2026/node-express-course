const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const MongoDB = require('./db/connect')
require('dotenv').config()


//middleware

app.use(express.json()) // To get the data from req.body


// routes
app.get('/hello', (req, res) => {
    res.send("Task Manager App")
})


app.use('/api/v1/tasks', tasks)


const port = 3000; 

const start = async () => {
    try {
        MongoDB(process.env.MONGO_URI)
        app.listen(port, console.log("server is listening on port", port))
    } catch (error) {
        console.log(error)
    }
}


start()


