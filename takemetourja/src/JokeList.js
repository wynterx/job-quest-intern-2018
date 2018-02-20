import React, { Component } from 'react';

const copy = require('clipboard-copy')

class JokeList extends Component {

  render() {
   let {jokes} = this.props
   return (
    <table>
        <tbody>
          {jokes.map(joke=>
          <tr key={joke.id}>
          <td className="td-r1"><button className="cpy-button" onClick={()=>copy(joke.joke)}>Copy!</button></td> 
          <td>{joke.joke}</td>
          </tr>)}
        </tbody>
    </table>
    );
  }
}

export default JokeList;