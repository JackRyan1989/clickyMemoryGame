import React from 'react';
import images from './images.json';
import CardDisp from "../src/components/CardDisp";
import MainContent from "../src/components/MainContent";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
  determineLoss= () => {
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
      <MainContent>
        <h1 className="title text-center">Clicky Game</h1>
        <h3 className="text-center">Keep clicking till you can't remember!</h3>
        <Row>
          <Col lg={6} className="m-3 text-center">
            Your Score: {this.state.score}
          </Col>
          <Col lg={6} className="m-3 text-center">
            High Score: {this.state.highScore}
          </Col>
        </Row>
        <Row>
          <Col>
            {sortedArr.map(image => (
              <CardDisp
                key={image.id}
                id={image.id}
                image={image.image}
                score={this.handleClick}
              />
            ))}
          </Col>
        </Row>
      </MainContent>
    )
  }

}

export default App;
