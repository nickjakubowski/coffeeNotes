var React = require('react');
var Router = require('react-router')

var NotesInput = React.createClass({

  getInitialState: function() {
    return {
      text: "hello"
    }
  },

  render: function() {
    return (
      <div className="input-container">
      <div className="coffee-add">
        <input type="text" placeholder="Add a note for a new coffee" value=""/>
        <input type="button" value="+add" onClick/>
        <p>{this.state.text}</p>
      </div>
      </div>
      )
  }
});

module.exports = NotesInput;