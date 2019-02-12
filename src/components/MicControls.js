import React from 'react';
import './MicControls.css';

const MicControls = ({onListenClick}) => {
    return (
        <div className="micControls">
          <button className="btn btn-danger btn-round" onClick={onListenClick}>Listen to microphone</button>
          <img id="mic" src="favicon.ico" alt="" height="32" width="32"/>
          <button id="stop" className="btn btn-primary btn-round">Pause recording</button>
        </div>
    );
}

export default MicControls;