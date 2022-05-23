import React from 'react';
import Form from './Form'

class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <button onClick={this.props.carHandler}>Cars</button>
        <Form manageAppState={this.props.manageAppState} />
        <button onClick={this.props.boatHandler}>Boats</button>
      </header>
    );
  }
}

export default Header;