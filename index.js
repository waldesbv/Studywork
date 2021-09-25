const express = require('express')
const mongoose = require('mongoose')
const authRouter = require ('./authRouter')
const PORT = process.env.PORT || 5000


const app = express()

app.use(express.json())
app.use("/auth", authRouter)


const start = async () => {
    try {
        await mongoose.connect( 'mongodb+srv://Vladyslav:4480@cluster0.xkpkg.mongodb.net/student_auth?retryWrites=true&w=majority' )
        app.listen(PORT, () => console.log('server started on port 5000 '))
    } catch (e) {
        console.log(e)
    }
}

start()