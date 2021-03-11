const notes = require('./notes.js')
const yargs = require('yargs')
const { lists } = require('./notes.js')
const { demandOption } = require('yargs')


// add command
yargs.command( {
    command : 'add',
    describe : 'Add a New Note!',

    builder : {
        title : {
            describe : 'title for the note',
            demandOption : true,
            type : 'string'
        },
        body :{
            describe : 'body for the note',
            demandOption : true,
            type : 'string'
        }
    },

    handler (argv) {
       notes.addNote(argv.title, argv.body)
    }
})

//remove command
yargs.command( {
    command : 'remove',
    describe : 'removing a note',

    builder : {
        title : {
            describe : 'give the title to remove',
            demandOption : true,
            type : 'string'
        }
    },
    handler (argv){
         notes.removeNote(argv.title)
    }
})

//read command
yargs.command( {
    command : 'read',
    describe : 'loading the note to read',
    builder : {
         title : {
             describe : 'read the note!',
             demandOption : true,
             type : 'string',
         } 
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})

//read list
yargs.command( {
    command: 'lists',
    describe: 'all the notes',
    handler() {
        notes.lists()
    }
})
yargs.parse()