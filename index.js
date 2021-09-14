const express = require("express")
const app = express()
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("main")
})


app.post("/cal", (req, res) => {
    res.render("cal")
})

app.post("/test", (req, res) => {
    res.render("test")
})

let port = 3000
app.listen(port, () => {
    console.log("서버를 시작합니다", port)
})


///test!!!