import React, {Component} from 'react';
class InlineError extends Component{
	render(){
		return(
				<div>
				{this.props.err}
				</div>
			)
	}
}
export default InlineError;