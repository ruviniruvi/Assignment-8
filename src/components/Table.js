import React, { Component } from 'react';
import TableRow from './TableRow.js';

class Table extends Component {

	getRows = () => {
		let row = [];
		console.log(this.props.numberOfRows);
		for(let i = 0; i < this.props.numberOfRows; i++){
			row.push(<TableRow numberOfColumns={this.props.numberOfColumns} currentColor={this.props.currentColor} color={this.props.color} getCurrentColor={this.props.getCurrentColor}/>);
		}
		return row;

	}
	render(){
		return(<table><tbody>{this.getRows()}</tbody></table>);
	}
}
export default Table;