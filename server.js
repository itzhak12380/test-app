const Express = require('express')
const cors = require('cors')
const app = Express()
app.use(cors())
app.use(Express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.json({message:"hey",test:"it works"})
})


app.listen(8080,(error)=>{
    if(error) throw error
    console.log("server is live");
})