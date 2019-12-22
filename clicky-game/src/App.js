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
      clicked: 'false'
    }
  }

  //Counter function for score & change clicked state to true
  handleClick = (event) => {
    const { clicked } = event.target
    if (clicked) {
      this.determineLoss()
    } else {
      this.setState({
        score: this.state.score + 1,
        clicked: 'true'
      });
    }
  }

  //Determine a loss condition, maybe a filter?
  determineLoss= () => {
      console.log("This image has been clicked before")
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
        </Row>
        <Row>
          <Col>
            {sortedArr.map(image => (
              <CardDisp
                clicked={this.state.clicked}
                key={image.id}
                id={image.id}
                image={image.image}
                score={this.handleClick}
                loss={this.determineLoss}
              />
            ))}
          </Col>
        </Row>
      </MainContent>
    )
  }

}

export default App;
