import ReactMarkdown from "react-markdown";
import './Main.css';
import Searchbar from "./SearchBar/SearchBar";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState } from 'react';


const Main = ({ sidebarActive, plus, trash, onLupaHandleClick, setHandlerActiveNote, setSearchButton, searchButton, lupa, handleChangeDeleteMode, activeNote, openSidebar, closeSidebar, isWhiteMode, toggleWhiteMode, getActiveNote, menuRef, onUpdateNote, onChangeHandler, handleInputChange, filterNotes, setActiveNote, showState, setShowState, openMenu }) => {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...getActiveNote,
            [key]: value,
            lastModified: Date.now()
        })
    }
  
    if (!getActiveNote)
        return <div className={`${sidebarActive === false || activeNote === null ? "container-no-activ-note" 
            : "container-no-activ-note-activ"}`}>        
            <Searchbar plus={plus} trash={trash} onLupaHandleClick={onLupaHandleClick} setHandlerActiveNote={setHandlerActiveNote} setSearchButton={setSearchButton} lupa={lupa} searchButton={searchButton} handleChangeDeleteMode={handleChangeDeleteMode} activeNote={activeNote} isWhiteMode={isWhiteMode} toggleWhiteMode={toggleWhiteMode} openMenu={openMenu} menuRef={menuRef} setShowState={setShowState} handleInputChange={handleInputChange} filterNotes={filterNotes} setActiveNote={setActiveNote} showState={showState}/>
            <div onClick={openSidebar} className="burger">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
            </div>
            <div className="no-active-note">No note selected</div>
        </div>
    return (
        <div className={`app-main-activ ${sidebarActive ? "app-main-no-activ" : ""} ${activeNote ? "app-main-no-activ" : ""}`}>
            <Searchbar plus={plus} trash={trash} onLupaHandleClick={onLupaHandleClick} setHandlerActiveNote={setHandlerActiveNote} setSearchButton={setSearchButton} lupa={lupa} searchButton={searchButton} handleChangeDeleteMode={handleChangeDeleteMode} activeNote={activeNote} isWhiteMode={isWhiteMode} toggleWhiteMode={toggleWhiteMode} openMenu={openMenu} menuRef={menuRef} setShowState={setShowState} handleInputChange={handleInputChange} filterNotes={filterNotes} setActiveNote={setActiveNote} showState={showState}/>
            <div onClick={openSidebar} className="burger">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
            </div>
            <div className={isWhiteMode ? "app-main-note-edit_white_theme" : "app-main-note-edit"}>
                <input type="text"
                    id="title"
                    value={getActiveNote.title}
                    onChange={(element) => onEditField("title", element.target.value)}
                    autoFocus
                    onClick={onChangeHandler} />
                <textarea id="body"
                    placeholder="Write your note here..."
                    value={getActiveNote.body}
                    onChange={(element) => onEditField("body", element.target.value)} />
            </div>
        </div>
    )
}
export default Main