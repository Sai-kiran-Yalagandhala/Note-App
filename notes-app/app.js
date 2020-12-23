const chalk = require('chalk');
const notes = require('../notes-app/notes');
const yargs = require('yargs');


 
 yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
                 title:{
            describe:'Note Title',
            demandOption: true,
            type:'String'
                         },
                 body:{
            describe:'Note Body',
            demandOption: true,
            type:'String'
                        }  
       },     
   
     handler(argv){
      notes.addNotes(argv.title,argv.body)
     }

 })

 
 yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
            title:{
            describe:'Note Title',
            demandOption: true,
            type:'String'
                 },
            },
            
     handler(argv){
         notes.removeNotes(argv.title)
        
       }
   })

   yargs.command({
    command:'list',
    describe:'list yournotes',
 handler(){
         notes.listNotes()
        
       }
   })


   
 yargs.command({
    command:'read',
    describe:'Read a Note',
    builder:{
            title:{
            describe:'Note Title',
            demandOption: true,
            type:'String'
                 },
            },
            
     handler(argv){
         notes.readNotes(argv.title)
        
       }
   })
yargs.parse()
