import React from 'react';

export default function Header(props) {
    const searchText = props.searchText;
    
    return (
        <React.Fragment>
            <h1>Training Portal</h1>
            <form onSubmit={props.handleSubmit}>
                <div className="search-field">
                    <label>Search: </label>
                    <input 
                        type="text"  
                        id="search-text" 
                        onChange={props.updateSearch} 
                        placeholder="Search for Training Event" 
                        value={searchText} 
                    />
                </div>
            </form>
            <form onClick={props.createNewTraining}>
                <button type="button">Create New Training</button>
            </form>
        </React.Fragment>
    )
}

               