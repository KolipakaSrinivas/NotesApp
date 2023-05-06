import React from 'react'
import './App.css'
import Split from 'react-split'
import { nanoid } from 'nanoid'



import Editor from './components/Editor'
import Sidebar from './components/SideBar'


function App() {


  const [notes,setNotes] = React.useState([])

  const [currentNoteId,setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  )

    console.log(notes)
    console.log(currentNoteId)

  function createNewNote() {

   const  newNote = {
      id:nanoid(),
      body:"# Type your markdown note's title here"
    } 

    setNotes(prevNotes => [...prevNotes,newNote])
    setCurrentNoteId(newNote.id)
  }



  let check = true

  return (
    <>
      <main>
        {
          check ?  
          
        <Split 
          sizes={[30, 70]} 
          direction="horizontal" 
          className="split"
        > 
          <Sidebar/>
          <Editor />
      
      
      
      
      
      
        </Split>:
      
      
          <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
          </div>
        }
      </main>
    </>
  )
}

export default App
