import React, { Component } from 'react';
import Router from 'react-router';
import { render } from 'react-dom';
//import NotesDisplay from 'NotesDisplay';

class NotesInput extends Component {

  constructor() {
    super();
    this.state = {
      text: "hello",
      notes: ["Philz", "Ritual"]
    }
  }

  update(e) {
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div className="input-container">
      <div className="coffee-add">
        <input type="text" placeholder="Add a note for a new coffee" onChange={this.update.bind(this)}/>
        <input type="button" value="+add" />
        <p>{this.state.text}</p>
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