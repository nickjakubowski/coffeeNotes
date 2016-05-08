var React = require('react');
var Router = require('react-router')

var NotesInput = React.createClass({

  getInitialState: function() {
    return {
      text: "hello"
    }
  },
  update(e) {
    this.setState({text: e.target.value})
  },

  render: function() {
    return (
      <div className="input-container">
      <div className="coffee-add">
        <input type="text" placeholder="Add a note for a new coffee" onChange={this.update.bind(this)}/>
        <input type="button" value="+add" />
        <p>{this.state.text}</p>
      </div>
      </div>
      )
  }
});

module.exports = NotesInput;