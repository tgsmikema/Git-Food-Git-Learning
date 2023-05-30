const express = require("express")
const app = express()

app.use(express.json())

app.get("/health", (req, res) => {
    res.json("ok")
})

app.listen(() => {
    console.log("Server listening to port 3000")
}, 3000)
