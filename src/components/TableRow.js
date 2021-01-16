import React, { Component } from 'react';
import TableCell from './TableCell';

class TableRow extends Component {
	
	getColumns = () => {
		let coloumns = [];
		for(let i = 0; i < this.props.numberOfColumns; i++){
			coloumns.push(<TableCell color={this.props.color} currentColor={this.props.currentColor} getCurrentColor={this.props.getCurrentColor}/>)
		}
		return coloumns;
	}
	render(){
		return(<tr>{this.getColumns()}</tr>);
	}
}
export default TableRow;