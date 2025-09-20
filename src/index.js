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
app.put('/notes/:id',(req, res) => {
    const id = parseInt(req.params.id)
    const index = notes.findIndex(n => n.id === id)

    if(index === -1){
       return res.status(404).send("Note not found")
    }
    notes[index].text = req.body.text
    res.json(notes[index])
})

app.delete('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const noteExits = notes.some(n => n.id === id)
    if(!noteExits){
        return res.status(404).send("Note not found")
    }
    notes= notes.filter(n => n.id !== id)
    res.status(200).send("Note deleted successfully")
})

app.listen(PORT, () =>{
    console.log(`Application is runing on ${PORT}`)
})