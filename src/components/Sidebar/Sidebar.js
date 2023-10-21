import trash from "../../assets/img/trash.png"
import add from "../../assets/img/add.png"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import "./Sidebar.css"
import Searchbar from "../Main/SearchBar/SearchBar"

const Sidebar = ({ sidebarActive, plus, trash, openMenu, toggleWhiteMode, setHandlerActiveNote, onLupaHandleClick, showState, filterNotes, searchButton, menuRef, closeSidebar, handleInputChange, notes, onAddNote, isWhiteMode, activeNote, setActiveNote, handleChangeDeleteMode }) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)
    const isMobile = useMediaQuery('(max-width: 1015px)')
    const handlerActiveNote = (id) => {
        setActiveNote(id)
        closeSidebar()
    }
    return (
        <div className={`${sidebarActive ? "app-sidebar-active" : ""} ${isWhiteMode ? `app-sidebar_white_theme` : ""} app-sidebar`}>
            <div className={isWhiteMode ? "header-container_white_theme_mobile" : "header-container-mobile"}>
                {isMobile ?
                    <div className='mobile'>
                        <div id="#header" className={`${isWhiteMode ? "app-sidebar-header_white_theme_mobile" : "app-sidebar-header_mobile"}`}>
                            <h1>Rudi Notes</h1>
                        </div>
                        <div className='add_and_delete'><div className='father_of_trash'>
                            <button onClick={handleChangeDeleteMode} 
                            className={!trash ? (activeNote ? (isWhiteMode ? "trash_active_button_white" : "trash_active_button") 
                            : (isWhiteMode ? "trash_not_active_button_white" : "trash_not_active_button")) : "trash_active_button_none"}><svg class="trash" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path></svg></button></div>
                            <button className={!plus ? (isWhiteMode ? "addButtonMobileWhite" : "addButtonMobile") : "addButton_none"}><svg class="add" stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path></svg></button>
                            <div className='input_state_container_media' ref={menuRef}>
                                <input className={searchButton ? (isWhiteMode ? "inputelement_media_active_white" : "inputelement_media_active") : (isWhiteMode ? "inputelement_media_white" : "inputelement_media")} type='text' id='inputelement'
                                    placeholder='Search'
                                    onClick={handleInputChange}
                                    onChange={handleInputChange}
                                />
                                {showState &&
                                    <div className={isWhiteMode ? 'state_white_theme ' : 'state'}>
                                        {filterNotes.map(note => <button className={isWhiteMode ? 'titleOfTask_white_theme' : 'titleOfTask'} onClick={() => setHandlerActiveNote(note.id)} key={note.id}>{note.title}</button>)}
                                    </div>
                                }
                                <button className={isWhiteMode ? 'search_button_white_theme' : 'search_button'} onClick={onLupaHandleClick}>
                                    <svg className={isWhiteMode ? 'search_bild_white_theme' : 'search_bild'} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		                            c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		                            M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		                            z">
                                            </path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div></div> : ""}
                <div className={`search_box`}>
                    <div className='input_state_container' ref={menuRef}>
                        <input className={isWhiteMode ? 'inputelement_white_theme' : 'inputelement'} type='text' id='inputelement'
                            placeholder='Search'
                            onClick={handleInputChange}
                            onChange={handleInputChange}
                        />
                        {showState &&
                            <div className={isWhiteMode ? 'state_white_theme ' : 'state'}>
                                {filterNotes.map(note => <button className={isWhiteMode ? 'titleOfTask_white_theme' : 'titleOfTask'} onClick={() => { setHandlerActiveNote(note.id) }} key={note.id}>{note.title}</button>)}
                            </div>
                        }
                        <button className={isWhiteMode ? 'search_button_white_theme' : 'search_button'} onClick={openMenu}>
                            <svg className={isWhiteMode ? 'search_bild_white_theme' : 'search_bild'} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		                            c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		                            M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		                            z">
                                    </path>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <button onClick={toggleWhiteMode} className={isWhiteMode ? 'button_theme_white_theme' : 'button_theme'}>
                    {isWhiteMode ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg> : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path>
                    </svg>}
                </button>
            </div>
            <div id="#header" className={`${isWhiteMode ? "app-sidebar-header_white_theme" : "app-sidebar-header"}`}>
                <h1>Rudi Notes</h1>
                <div className="buttons_add_delete">
                    <div className="parent_of_trash">
                        <button onClick={handleChangeDeleteMode} className={isWhiteMode ? `trash_button_white_theme ${activeNote ? 'active_button_white_theme' : ''}` : `trash_button ${activeNote ? 'active_button' : ''}`} >
                            <svg className={isWhiteMode == true ? "trash_white_theme" : "trash"} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path></svg>
                        </button>
                    </div>
                    <button className={isWhiteMode == true ? "add_button_white_theme" : "add_button"} onClick={onAddNote}><svg className={isWhiteMode == true ? "add_white_theme" : "add"} stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path></svg></button>
                </div>
            </div>
            <div className="app-sidebar-notes">
                {sortedNotes.map((note) => ( // note - element of massive `notes`, die heisst `newNote`
                    <div className={`${activeNote !== null ? "app-sidebar-active" : ""} 
                            ${isWhiteMode ? "app-sidebar-note-white-theme" : "app-sidebar-note"} 
                            ${note.id === activeNote && isWhiteMode ? 'white-active' : note.id === activeNote ? 'active' : ''}`}
                        onClick={() => handlerActiveNote(note.id)}>
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                        </div>
                        <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                        <small className="note-meta">Last modified
                            {new Date(note.lastModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit"
                            })}</small>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Sidebar;