
// import { students, total } from "./students";

// console.log("Index js file ...");

// console.log(students);
// console.log(total);


// import { add, multi } from './calculator';

// console.log(add(1,2));
// console.log(multi(2,2));


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const apiKey = '0f960cfdf98e322943145f137ee559d9';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'London'
    }
  }

  componentDidMount() {
    this.grabWeather(this.state.city);
  }

  grabWeather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&q=${city}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          description: json.weather[0].description
        })
      });

    }

  render() {
    // <div> React JS and JSX in action! </div>
    return (
      <div>
        <h1>Weather Report for {this.state.city}!</h1>
        <h2> {this.state.description} </h2>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));