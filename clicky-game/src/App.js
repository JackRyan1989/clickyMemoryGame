import React from 'react';
import images from './images.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDisp from "../src/components/CardDisp";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images,
      score: 0,
      highScore: 0,
      clickedArr: []
    }
  }

  //Counter function for score & change clicked state to true
  handleClick = (event) => {
    const { id } = event.target
    //Determine if the id exists in the array first:
    if (this.state.clickedArr.includes(id)) {
      this.determineLoss()
    } else {
      this.setState({
        score: this.state.score + 1
      });
    }
    //Then push the id to the array:
    this.state.clickedArr.push(id);
  }

  //Determine a loss condition
  determineLoss = () => {
    alert(`You lose! Good job though, you got ${this.state.score} correct!`);
    this.setState({
      highScore: this.state.score,
      score: 0,
      clickedArr: []
    })
  }

  render() {
    //Marginally randomize the images:
    const sortedArr = this.state.images.sort(() => Math.random() - 0.5);
    return (
      <div>
        <Navbar className='navbar fixed-top my-2 my-lg-0 justify-content-between'>
              <h4 className="text-center p-2">Your Score: {this.state.score} | High Score: {this.state.highScore}</h4>
              <p className='navbar-nav ml-auto'><a className="text-white navbar-text" href="https://github.com/JackRyan1989/clickyMemoryGame">Made by Jack Ryan</a></p>
        </Navbar>
        <Jumbotron fluid className='text-center jumbo text-white'>
          <Row className='m-5'></Row>
          <Row className='m-5'></Row>
          <h1 className='m-5'>Ren and Stimpy Memory Game</h1>
          <h2 className='m-2'>Keep clicking to get points, just don't click the same thing twice!</h2>
          <Row className='m-5'></Row>
          <Row className='m-5'></Row>
        </Jumbotron>
        <Container sm={12}>
          <Row>
              {sortedArr.map(image => (
                <CardDisp
                  className="float-left"
                  key={image.id}
                  id={image.id}
                  image={image.image}
                  score={this.handleClick}
                />
              ))}
          </Row>
        </Container>
      </div>
    )
  }

}

export default App;
