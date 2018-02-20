import React, { Component } from 'react';
import JokeList from './JokeList'
import SubmitForm from './SubmitForm'
import './App.css';

import axios from 'axios';

class App extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }

  updateData(inputFname,inputLname,inputNO){
    console.log("Name",inputFname,"  ",inputLname,inputNO)
    axios.get(`http://api.icndb.com/jokes/random/${inputNO}?`,{
        params: {
          firstName : inputFname,
          lastName : inputLname
        }
      })
      .then((res) => {
        // Set state with result
        this.setState({data: res.data.value});
        console.log(res.data.value)
      });

 
  }

  render(){
    return (
      <div className="App">
        <h1 className="App-header"> Get Some Jokes ? </h1>
        <SubmitForm updateData={this.updateData.bind(this)}/>
        <JokeList jokes={this.state.data} />
      </div>
    );
  }
}

export default App;
