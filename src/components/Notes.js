import React from 'react';
import './Notes.css';

const Notes = ({showNotesText, addUserInput}) => {
    return (
        <textarea id="notes" placeholder="Your notes" value={showNotesText} onChange={addUserInput} />
    );
}

export default Notes;