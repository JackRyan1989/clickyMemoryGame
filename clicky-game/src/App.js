import React from 'react';
import images from './images.json';
import CardDisp from "../src/components/CardDisp";
import MainContent from "../src/components/MainContent";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images,
      clicked: false,
      score: 0
    }
  }   
  
  //Write counter function for score

  //Write remove function for when a card is clicked

  //Write a third function that will determin a loss condition, maybe a filter?

  render() {
  return (
      <MainContent>
        <h1 className="title text-center">Clicky Game</h1>
        <h3 className="text-center">Keep clicking till you can't remember!</h3>
        <CardDisp 
          key={images.id}
          id={images.id}
          src={images.image}
        />
      </MainContent>
  )
}

}

export default App;
