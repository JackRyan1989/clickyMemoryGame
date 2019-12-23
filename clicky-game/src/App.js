import React from 'react';
import images from './images.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDisp from "../src/components/CardDisp";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
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
        <Jumbotron fluid className='text-center bg-danger text-white'>
          <h1 className='mx-3'>Ren and Stimpy Memory Game</h1>
          <h3 className='mx-3'>Keep clicking till you can't remember!</h3>
        </Jumbotron>
        <Container sm={12}>
          <Row>
            <Col sm={3} md={3}></Col>
            <Col sm={3} md={3}>
              <h4 className="text-center p-2 border-bottom">Your Score: {this.state.score}</h4>
            </Col>
            <Col sm={3} md={3}>
              <h4 className="text-center p-2 border-bottom">High Score: {this.state.highScore}</h4>
            </Col>
            <Col sm={3} md={3}></Col>
          </Row>
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
