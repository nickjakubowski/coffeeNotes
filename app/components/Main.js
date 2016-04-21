var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <nav className="navbar" role="navigation">
          <div className="logo">
            CoffeeNotes
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;