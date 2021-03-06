import React from 'react';

class Button extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <button 
        onClick={() => this.props.buttonHandler(this.props.label)}
      >
        { this.props.label }
      </button>
    );
  }
}

export default Button;