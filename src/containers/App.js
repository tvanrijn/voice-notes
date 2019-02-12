import React, { Component } from 'react';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';
import './App.css';
import MicControls from '../components/MicControls';
import Notes from '../components/Notes';
import NotesControls from '../components/NotesControls';

/*
  access_token via backend?
*/

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      copySuccess: ''
    }
  }

  onListenClick() {
    var access_token = "eyJraWQiOiIyMDE3MTEyOSIsImFsZyI6IlJTMjU2In0.eyJpYW1faWQiOiJpYW0tU2VydmljZUlkLWJiZmQ2Njg4LWJhMjEtNGMyNy1iY2VjLWE1NWNlMjk4MDdjMyIsImlkIjoiaWFtLVNlcnZpY2VJZC1iYmZkNjY4OC1iYTIxLTRjMjctYmNlYy1hNTVjZTI5ODA3YzMiLCJyZWFsbWlkIjoiaWFtIiwiaWRlbnRpZmllciI6IlNlcnZpY2VJZC1iYmZkNjY4OC1iYTIxLTRjMjctYmNlYy1hNTVjZTI5ODA3YzMiLCJzdWIiOiJTZXJ2aWNlSWQtYmJmZDY2ODgtYmEyMS00YzI3LWJjZWMtYTU1Y2UyOTgwN2MzIiwic3ViX3R5cGUiOiJTZXJ2aWNlSWQiLCJ1bmlxdWVfaW5zdGFuY2VfY3JucyI6WyJjcm46djE6Ymx1ZW1peDpwdWJsaWM6c3BlZWNoLXRvLXRleHQ6dXMtc291dGg6YS80Nzg3YzcyOTA5MjU0YzBiOTI5YWU1NTI3MjhmNzE2ZTo4YzI3YWQ1NC0xYWEzLTRlNDUtOWUzMS05YjBiNDgxN2YxNTU6OiJdLCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiI0Nzg3YzcyOTA5MjU0YzBiOTI5YWU1NTI3MjhmNzE2ZSJ9LCJpYXQiOjE1NDk5ODg3MzUsImV4cCI6MTU0OTk5MjMzNSwiaXNzIjoiaHR0cHM6Ly9pYW0uYmx1ZW1peC5uZXQvaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.Qh8wtTBB7Wu0TQy8MDIRc90P1mGfE3Toi1DMMAG5uZwTKZa-0axR5Qb28zzj3dCL6fJsWl1bv6RXI-1jWlRNnqXCM-MTuuelynV6t9PSk93CgNnKWg6XuhxhWQpnBG_7hmqoXZcEaJ1L_UPLe5fifSCYwWsUR5Rk0oVgXoGUYbwgP5GJ2gyjmjCcVJXfmOG0DB3Us9FdtjTkoZ2c4k4RH8l_lQSJPfKyDFyRTvd3j9L_AW-Seb7QGAjFh7cGj0uG8kQ9QgjQXqHM1bYttw2KRpycy4Eie_tD-aSWGVAd_trQ2FKvCSjvELtl72FbrcVBXrNPC7U1t0cSn527GhWzXg";

    var stream = recognizeMicrophone({
      access_token: access_token
    });
    
    var imgMicrophone = document.getElementById("mic");
    imgMicrophone.classList.add("active");

    stream.setEncoding('utf8');
    
    stream.on('data', function(data) {
      var notes = this.state.text.concat(data);
      this.setState({ text: notes});
    }.bind(this));
    
    stream.on('error', function(err) {
      console.log(err);
    });

    document.querySelector('#stop').addEventListener('click', () => {
      stream.stop(); 
      imgMicrophone.classList.remove("active");
    });
  }

  addUserInput(event) {
      this.setState({text: event.target.value});
  }
  
  onCopyClick() {
    var textField = document.createElement('textarea')
    textField.innerText = this.state.text;
    document.body.appendChild(textField)
    textField.select();
    document.execCommand("copy");
    textField.remove();
    var alertMessage = 'Copied!'
    this.setState({ copySuccess: alertMessage });
  }

  onDateClick() {
    var dateToday = new Date().toLocaleString() + ': ';
    var notes = dateToday.concat(this.state.text);
    this.setState({ text: notes});
  }

  onClearClick() {
    this.setState({ text: ''});
  }

  render() {
    return (
      <div className="App">
        <MicControls onListenClick={this.onListenClick.bind(this)}/>
        <Notes showNotesText={this.state.text} addUserInput={this.addUserInput.bind(this)}/>
        <NotesControls onDateClick={this.onDateClick.bind(this)} onCopyClick={this.onCopyClick.bind(this)} onClearClick={this.onClearClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
