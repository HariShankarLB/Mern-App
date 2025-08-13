const getAllNotes = (req, res)=>{
    res.status(200).send("fetched the notes");   
}

const createNote = (req, res)=>{
    res.status(201).json({message:"note created"});   
}
 
const updateNote = (req, res)=>{
    res.status(200).json({message:"note updated"});   
}
 
const deleteNote = (req, res)=>{
    res.status(200).json({message:"note deleted"});   
}
 
module.exports = { getAllNotes, createNote, updateNote, deleteNote };