const fs = require('fs')
const chalk = require('chalk')

//Function to add Note 
const addNote = (title, body) => {
    const notes = loadNotes()
    
   //Checking if title already exist
   //const duplicateNotes = notes.filter( (note) =>  note.title === title )
    const duplicateNotes = notes.find( (note) => note.title === title)   
//  const duplicateNotes = notes.filter( function(note){
//      return note.title === title
//   })

    if(!duplicateNotes){
        notes.push ( {
            title: title,
            body:body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('note title already taken!')
    }

    saveNotes(notes)

} 

//Function remove the node
const removeNote = (title) => {
    const notes = loadNotes()
    
    const Notestokeep = notes.filter( (note) => note.title !== title )
    
    saveNotes(Notestokeep)
    if(notes.length > Notestokeep.length){
        console.log(chalk.green.inverse('Node Remove!'))
    }else {
        console.log(chalk.red.inverse('Node Not Found!'))
    }

}

//Function to show lists
const lists = () => {
    const notes = loadNotes()
    console.log(chalk.red.inverse('Your Notes!'))
    notes.forEach( (note) => console.log(note.title))
    
}

//Function to readNote
const readNote = (title) => {
    const notes = loadNotes()
    const targetnode = notes.find( (note) => note.title === title)
    if(targetnode){
        console.log(targetnode.body)
    }else {
        console.log(chalk.red.inverse('No Notes Found!'))
    }
}

//Function to save notes
const saveNotes = (notes) => {
     const dataJSON = JSON.stringify(notes)
     fs.writeFileSync('Notes.json', dataJSON)
}

//Function to load previously save notes
const loadNotes = function() {

    try {
        const databuffer = fs.readFileSync('Notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
   
}
module.exports = {
    addNote : addNote, 
    removeNote: removeNote,
    lists : lists,
    readNote : readNote,
}