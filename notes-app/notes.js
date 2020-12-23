const chalk = require('chalk');
const fs = require('fs');
const getNotes = function(){
   return 'your Notes...'
}

const addNotes = function(title,body){
   const notes = loadNotes()
   // const duplicateNotes = notes.filter(function(note){
   //    return note.title===title
      
   // })
   //const duplicateNotes = notes.filter((note)=>note.title===title)
   const duplicateNotes = notes.find((note)=>note.title===title)
   

   if (!duplicateNotes){
      notes.push({
         title:title,
         body : body
      })
      saveNotes(notes)
      console.log('notes added!')
   }else {
      console.log('note title already taken')
   }
    
}
const removeNotes = (title)=>{
   const notes = loadNotes();
   const noteTokeep = notes.filter((note)=>note.title !== title)
   // const noteTokeep = notes.filter(function(note){
   //    return note.title !== title
   // })
   if(notes.length>noteTokeep.length){
      console.log(chalk.greenBright.inverse('Notes removed'))
      saveNotes(noteTokeep)
   }else{
      console.log(chalk.red.inverse('Notes Not Found'))
   }
   }
   
const listNotes =()=>{
   const notes = loadNotes()
   console.log(chalk.greenBright.inverse('your Notes!'));
   notes.forEach((note) => {
   console.log(note.title)
   });
}
const readNotes = (title)=>{
const notes = loadNotes()
const note = notes.find((note)=>note.title===title)
if(note){
   console.log(chalk.greenBright.inverse(note.title))
   console.log(chalk.gray.inverse(note.body))
}else{
   console.log(chalk.gray.inverse('Title not Found'))
}
}

const saveNotes = (notes)=>{ // this function is going to take array as an argument
 const dataJSON = JSON.stringify(notes)
 fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
   try{
      const dataBuffer=fs.readFileSync('notes.json');
      const dataJSON=dataBuffer.toString();
      return JSON.parse(dataJSON)
   
   }catch(e){
      return[]
   }


}


module.exports ={
getNotes : getNotes,
addNotes:addNotes,
removeNotes:removeNotes,
listNotes:listNotes,
readNotes:readNotes

}