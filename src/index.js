const express = require("express")
const app = express()
const PORT = 3000
let notes = []
app.use(express.json())

app.get('/', (req, res) => {
  res.send("This is a notes App")   
})
app.get('/notes', (req, res) =>{
    res.json(notes)
})
app.post('/notes', (req, res) => {
    const note = {id : Date.now(), text : req.body.text}
    notes.push(note)
    res.status(201).json(note)
})
app.listen(PORT, () =>{
    console.log(`Application is runing on ${PORT}`)
})