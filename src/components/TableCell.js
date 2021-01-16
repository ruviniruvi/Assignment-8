  
import React, { Component } from 'react';

class TableCell extends Component {
	constructor(props){
		super(props);
		this.state={
		newColor: null
		}
	}
	onClick = () => {
		this.setState({newColor: this.props.color});
	}
	render(){
		let style= {"background-color":this.state.newColor};
		return(<td className="cell" style={style} onClick={this.onClick}></td>);
	}
}
export default TableCell;