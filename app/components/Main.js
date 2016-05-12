import React, { Component } from 'react';

class Main extends Component {
  render() {
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
};

export default Main;