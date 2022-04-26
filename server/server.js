require("dotenv").config()
const express  = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const router_api = require("./routes/customers.route")
mongoose.connect(process.env.NODE_API_URL).then(() => {console.log("Database connected")}).catch((err) => console.log(err))
const app = express()
const PORT = 8000
app.use(express.json())
app.use(cors())
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`)
})
app.use("/api", router_api)
