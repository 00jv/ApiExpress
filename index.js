const express = require('express')
const bodyParse = require("body-parse")
const userRoute = require("./routes/usersRoutes")
const app = express()
const port = 3000
  app.use(bodyParse.urlencoded({extends: false}))
userRoute(app)
app.get("/", (req, res) => res.send("Olá mundo pelo Express"))

app.listen(port, () => console.log("api rodando na porta 3000"))