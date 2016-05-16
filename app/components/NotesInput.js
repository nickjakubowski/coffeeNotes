import React, { Component } from 'react';
import Router from 'react-router';
import { render } from 'react-dom';
//import NotesDisplay from 'NotesDisplay';

class NotesInput extends Component {

  constructor() {
    super();
    this.state = {
      text: "",
      notes: ["Philz", "Ritual"]
    }
  }

  update(e) {
    this.setState({text: e.target.value})
  }

  addNote(e) {
    console.log(e.target.keyCode);
    if (e.type === "click" || e.keyCode === 13) {
      this.setState({notes: this.state.notes.concat([this.state.text])});
      this.state.text = "";
    }
  }

  render() {
    return (
      <div className="input-container">
      <div className="coffee-add">
        <input type="text" placeholder="Add a note for a new coffee" value={this.state.text} onChange={this.update.bind(this)} />
        <input type="button" value="+add" onClick={this.addNote.bind(this)} />
          <NotesDisplay notes={this.state.notes}/> 
      </div>
      </div>
      )
  }
}

class NotesDisplay extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <ul>
      {this.props.notes.map(function(note) {
        return <li>{note}</li>
      })}
      </ul>
      )
  }
}

export default NotesInput;