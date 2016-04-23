var React = require('react');
var Router = require('react-router')

var MainNotes = React.createClass({
  getInitialState: () => {
    return {
      notes: [1]
    }
  },
  render: () => {
    return (
      <div className="inner-container">
      <div className="coffee-add">
        <input type="text" placeholder="Add a note for a new coffee" />
        <input type="button" value="+add" />
      </div>
        <div className="note-container">
          Notes Component
        </div>
      </div>
      )
  }
});

module.exports = MainNotes;