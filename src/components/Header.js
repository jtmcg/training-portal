import React from 'react';
import './Header.css';
import './button.css';

export default function Header(props) {
    const searchText = props.searchText;
    
    return (
        <div className="header-container">
            <h1 className="app-header">Training Portal</h1>
            <div className="header-forms">
                <div className="header-form" id="search-form">
                    <form>
                        <label>Search: </label>
                        <input 
                            type="text"  
                            id="search-text" 
                            onChange={props.updateSearch} 
                            placeholder="Search for Training Event" 
                            value={searchText} 
                            cols="50"
                        />
                    </form>
                </div>
                <div className="header-form button-container">
                    <form onClick={props.createNewTraining}>
                        <button className="button" id="create-new" type="button"><span>Create New Training</span></button>
                    </form>
                </div>
            </div>
            <hr/>
            <div className="training-list-header">
                <h1>Trainings</h1>
            </div>
        </div>

    )
}

               