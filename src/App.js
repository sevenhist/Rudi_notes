import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import { useEffect, useRef, useState } from 'react';
import uuid from 'react-uuid';
import Popup from './components/Popup/Popup';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [activeNote, setActiveNote] = useState(null);
  const [deleteMode, setDeleteMode] = useState(false);
  const [filterNotes, setFilterNotes] = useState([]);
  const [showState, setShowState] = useState(false);
  const [isWhiteMode, setIsWhiteMode] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [trash, setTrash] = useState(false)
  const [plus, setPlus] = useState(false)
  
  const onLupaHandleClick = () => {
    openMenu()
    lupa()
  }
  
  const trashSet = () => {
    setTrash(true)
  }
  const trashSet_false = () => {
    setTrash(false)
  }

  const plusSet = () => {
    setPlus(true)
  }
  const plusSet_false = () => {
    setPlus(false)
  }

  const setHandlerActiveNote = (id) => {
    setActiveNote(id);
    setShowState(false);
    setSearchButton(false);
  }

  const lupa = () => {
    setSearchButton(!searchButton)
    trashSet()
    plusSet()
  }

  const toggleWhiteMode = () => {
    setIsWhiteMode(!isWhiteMode);
  }

  function onAddNote() {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now()
    }
    setNotes([newNote, ...notes])
  }

  function onDeleteNote(idToDelete) {
    setNotes(notes.filter((note) => note.id !== idToDelete))
    setActiveNote(null)
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote
      }
      return note;
    })
    setNotes(updatedNotesArray)
  }

  const handleChangeDeleteMode = () => {
    setDeleteMode(true)
  }

  const onChangeHandler = (event) => {
    const title = event.currentTarget;
    title.select()
  }
  // window of lists of titles
  const inputOnChange = (event) => {
    const inputText = event.target.value;
    console.log(inputText);
    return inputText;
  }

  const handleInputChange = (event) => {
    const inputText = inputOnChange(event);
    const filteredNotes = notes.filter((note) => note.title.includes(inputText));
    setFilterNotes(filteredNotes); 
    setShowState(!showState);
  }
  const openMenu = () => {
    setShowState(!showState);
    setFilterNotes(notes)
  }
  // click outside logic 

  let menuRef = useRef()

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  
  useEffect(() => {
    let handler = (event) => {
      if(!menuRef.current.contains(event.target)) {
        setShowState(false)
        setSearchButton(false)
        trashSet_false()
        plusSet_false()
      }
    }
    document.addEventListener("mousedown", handler)
    return() => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const burger = document.querySelector('.burger');
  const sidebar = <Sidebar />

  const openSidebar = () => {
      setSidebarActive(true);
      setActiveNote(null)
  }
  
  const closeSidebar = () => {
      setSidebarActive(false)
  }


  return (
    <div className={`App ${isWhiteMode == true ? 'white_theme' : ''}`}>
      <Sidebar 
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        handleChangeDeleteMode={handleChangeDeleteMode} 
        isWhiteMode={isWhiteMode}
        sidebarActive={sidebarActive}
        closeSidebar={closeSidebar}
        menuRef={menuRef}
        searchButton={searchButton}
        handleInputChange={handleInputChange}
        showState={showState}
        filterNotes={filterNotes}
        onLupaHandleClick={onLupaHandleClick}
        setHandlerActiveNote={setHandlerActiveNote}
        openMenu={openMenu}
        toggleWhiteMode={toggleWhiteMode}
        trash={trash}
        plus={plus}
      />
      <Main 
        getActiveNote={getActiveNote()} 
        onUpdateNote={onUpdateNote} 
        onChangeHandler={onChangeHandler} 
        handleInputChange={handleInputChange}
        filterNotes={filterNotes}
        setActiveNote={setActiveNote}
        showState={showState}
        setShowState={setShowState}
        menuRef={menuRef}
        openMenu={openMenu}
        toggleWhiteMode={toggleWhiteMode}
        isWhiteMode={isWhiteMode}
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
        sidebarActive={sidebarActive}
        activeNote={activeNote}
        handleChangeDeleteMode={handleChangeDeleteMode}
        searchButton={searchButton}
        lupa={lupa}
        setSearchButton={setSearchButton}
        onLupaHandleClick={onLupaHandleClick}
        setHandlerActiveNote={setHandlerActiveNote}
        trash={trash}
        plus={plus}
      />
      <Popup 
        setDeleteMode={setDeleteMode}
        onDeleteNote={onDeleteNote}
        deleteMode={deleteMode}
        activeNote={activeNote}
        isWhiteMode={isWhiteMode}
      />
    </div>
  );
}
export default App;
