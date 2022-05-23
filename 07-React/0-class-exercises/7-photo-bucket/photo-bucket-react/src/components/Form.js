import React from 'react';
import { getUserRequest } from '../unsplashRequests'

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }
  }

  handleChange = (e) => {
    this.setState({ term: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const savedRequest = await getUserRequest(this.state.term);
    const termArray = savedRequest.map(obj => obj.urls.small);
    this.props.manageAppState(termArray, "userInput");
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}></input>
      </form>
    )
  }
}

export default Form;