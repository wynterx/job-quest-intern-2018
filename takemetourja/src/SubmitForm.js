import React, { Component } from 'react';

class SubmitForm extends Component {
  constructor(props) {
    super(props);

    this.state ={
      inputFname : "Chuck",
      inputLname : "Norris",
      inputNO : 1
    }
  }

  render() {
  let {updateData} = this.props
  let {inputFname, inputLname, inputNO} = this.state;
    return (
      <div>
        <h4>
        <form>
          <input type="text" placeholder="First Name" onChange={(e)=>this.setState({inputFname: e.target.value})} />
        </form>
        <form>
          <input type="text" placeholder="Last Name"  onChange={(e)=>this.setState({inputLname: e.target.value})} />
        </form>
        <form>
          <input type="number" placeholder="Number of Jokes"  onChange={(e)=>this.setState({inputNO: e.target.value})} />
        </form>
        
        <button className="button" onClick={()=>updateData(inputFname, inputLname, inputNO)}> <span> Enter </span> </button>
        </h4>
      </div>
    );
  }
}

export default SubmitForm;