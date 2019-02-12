import React from 'react';
import './NotesControls.css';

const NotesControls = ({onDateClick, onCopyClick, onClearClick}) => {
    return (
        <div className="notesControls">
          <button className="btn btn-info btn-round" onClick={onDateClick}><i className="fa fa-calendar"></i>Add current date-time</button>
          <button className="btn btn-info btn-round" onClick={onCopyClick} data-toggle="popover" data-placement="top" data-content="Copied!"><i className="fa fa-copy"></i>Copy</button>
          <button className="btn btn-info btn-round" onClick={onClearClick}><i className="fa fa-remove"></i>Clear</button>
        </div>
    );
}

export default NotesControls;