const express =require("express")
const app=express()
const path=require("path")
const favicon = require('serve-favicon');
const bodyParser = require('body-parser')



app.use(express.static(__dirname+"/public"))
app.use(favicon(path.join(__dirname, 'public','images','icons', 'favicon.ico')))
app.use(bodyParser.urlencoded({extended:true}))
app.set('views', './views');
app.set("view engine", "ejs")




app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"))
})

app.post("/contact-us",(req,res)=>{
    let firstName=req.body.firstName
    let lastName=req.body.lastName
    let email=req.body.email
    let question=req.body.askUs
    let obj={firstName:firstName, lastName:lastName, email:email,question:question}
    res.render("contacted", {obj:obj})
    

})




app.listen(process.env.PORT, ()=>{
    console.log("Application up")
})