import React, { Component } from 'react';
import Table from './Table.js';
import '../App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      numberOfRows: 0,
      numberOfColumns: 1,
      color: "#795548"
      
    }
  }


  //Feature 01
  addRow = () => {
    this.setState({numberOfRows: this.state.numberOfRows+1})
   

  }

  //Feature 02
  addColumn = () => {
    this.setState({numberOfColumns: this.state.numberOfColumns+1})

  }


  //Feature 03 and 04
  changeColor = (event) => {
    this.setState({color:event.target.value});
  }

  getCurrentColor = (value) => {
    
    this.setState({currentColor: this.state.color })
    
  }
  render() {
    return (
      <div className="App">
      <button className="Button" onClick={this.addRow}>Add Row</button>
      <button  className="Button" onClick={this.addColumn}>Add Col</button>
     <p>
     <label>Select colors from here :</label>
      <select onChange ={this.changeColor}>
      <option value = "#795548" >Brown</option>
      <option value = "#EB144C" >Red</option>
      <option value = "#37d67a" >Green</option>
      <option value = "#dce775" >Yellow</option>
      <option value = "#2ccce4" >Blue</option>

      </select>
      </p>
      <Table numberOfRows={this.state.numberOfRows} 
      numberOfColumns={this.state.numberOfColumns} 
       currentColor={this.state.currentColor} 
       color={this.state.color} 
       changeColor={this.changeColor} 
       getCurrentColor={this.getCurrentColor}/>
      </div>
    );
  }
}

export default App;