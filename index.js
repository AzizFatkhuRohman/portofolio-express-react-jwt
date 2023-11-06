import express from "express"
import dotenv from "dotenv"
import database from "./config/database.js"
import route from "./routes/route.js"

dotenv.config()
const app = express()
//post running
app.listen(5000,()=>{
    console.log("server connected")
})

//database checked
try {
    await database.authenticate()
    console.log("Database connected")
    // await komentar.sync()
} catch (error) {
    console.log(error)
}
app.use(express.json())
app.use(route)