const express = require('express')
const sequelize  = require("./util/database")
const app = express()
const port = 3000
const postRouter = require("./routes/post")
const mainRouter = require('./routes/main')
const bodyParser = require("body-parser")
app.set("view engine","ejs")
app.set("views","views")

app.use(bodyParser.urlencoded({extended : false}))

//home middleware
app.use((req,res,next) => {
    console.log("home page");
    next()
} )



app.use("/main",(req,res,next) => {
    console.log("success add Post");
    next()
} )

sequelize.sync().then(result => console.log(result + "good")).catch(err => console.log(err))


app.use("/main",mainRouter)
app.use(postRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))