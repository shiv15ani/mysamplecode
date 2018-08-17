import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class NewChild extends Component{
	render(){
		let name=this.props.name?this.props.age:'na';
		return(
				<div>
					<h3> Child</h3>
					<h5>{this.props.name}</h5>
				</div>
			)
	}
}
export default NewChild;