import React, { Component } from 'react';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';
import './App.css';
import MicControls from '../components/MicControls';
import Notes from '../components/Notes';
import NotesControls from '../components/NotesControls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  onListenClick = () => {
    fetch('/api/speech-to-text/token')
      .then((response) => {
        return response.text();
      }).then((token) => {
        var stream = recognizeMicrophone({
          access_token: token
        });

        var imgMicrophone = document.getElementById("mic");
        imgMicrophone.classList.add("active");

        stream.setEncoding('utf8');

        stream.on('data', function (data) {
          var notes = this.state.text.concat(data);
          this.setState({ text: notes });
        }.bind(this));

        stream.on('error', function (err) {
          console.log(err);
        });

        document.querySelector('#stop').addEventListener('click', () => {
          stream.stop();
          imgMicrophone.classList.remove("active");
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  addUserInput(event) {
    this.setState({ text: event.target.value });
  }

  onCopyClick() {
    var textField = document.createElement('textarea')
    textField.innerText = this.state.text;
    document.body.appendChild(textField)
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }

  onDateClick() {
    var dateToday = new Date().toLocaleString() + ': ';
    var notes = dateToday.concat(this.state.text);
    this.setState({ text: notes });
  }

  onClearClick() {
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="App">
        <MicControls onListenClick={this.onListenClick.bind(this)} />
        <Notes showNotesText={this.state.text} addUserInput={this.addUserInput.bind(this)} />
        <NotesControls onDateClick={this.onDateClick.bind(this)} onCopyClick={this.onCopyClick.bind(this)} onClearClick={this.onClearClick.bind(this)} />
      </div>
    );
  }
}

export default App;
