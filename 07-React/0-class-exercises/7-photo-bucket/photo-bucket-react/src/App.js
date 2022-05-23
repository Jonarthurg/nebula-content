import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Card from './components/Card';
import { getRandomPhotoList, carList, boatList } from './unsplashRequests';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selected: 'userInput',
      cars: [],
      boats: [],
      userInput: []
    }
  }

  componentDidMount(){
    this.getRandomPhotos();
  }

  buttonHandler = (label) => {
    this.setState({ selected: label });
  }

  manageAppState = (input, chosen) => {
    this.setState({ userInput: input, selected: chosen })
  }

  createCards(){
    const selected = this.state.selected;
    return this.state[selected].map((info, idx) => (
      <Card 
        imgSrc={info} 
        key={idx}
      />
    ));
  }

  getRandomPhotos = async () => {
    const res = await getRandomPhotoList();
    const randomPhotoList = res.map(obj => obj.urls.small);
    this.setState({ 
      selected: 'userInput',
      userInput: randomPhotoList
    });
  }

  getCars = async () => {
    const res = await carList();
    const carArray = res.map(car => car.urls.small);
    this.setState({ 
      selected: "cars",
      cars: carArray
    });
  }

  getBoats = async () => {
    const res = await boatList();
    const boatArray = res.map(boat => boat.urls.small);
    this.setState({
      selected: "boats",
      boats: boatArray
    });
  }

  render(){
    return (
      <div className="App">
        <Greeting />
        <Header 
          manageAppState={this.manageAppState}
          carHandler={this.getCars} 
          boatHandler={this.getBoats}
        />
        <section className="photos-container">
          {this.createCards()}
        </section>
      </div>
    );
  }
}

export default App;