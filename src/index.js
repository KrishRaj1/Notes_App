const express = require("express")
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send("This is a notes App")   
})
app.listen(PORT, () =>{
    console.log(`Application is runing on ${PORT}`)
})