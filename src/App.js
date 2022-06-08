// import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = { advice: ''};

  componentDidMount(){
    console.log("mounted");
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) =>{
      const { advice } = response.data.slip;
      this.setState({ advice});
      // console.log(advice);
    })
    .catch((error) =>{
      console.log(error);
    });
  }

  render() {
    const { advice } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <p>
            {advice}
          </p>
          <button className = "button" onClick={this.fetchAdvice}>
            <span> GIVE ME ADVICE! </span>
          </button>
        </div>
      </div>
    )
  }

}
export default App;
