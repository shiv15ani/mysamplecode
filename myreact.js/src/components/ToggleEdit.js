import React from 'react';
import EditRow from './EditRow';
import ViewRow from './ViewRow';

class ToggleEdit extends React.Component{

	constructor(){
		super()
		this.state = {
			editable : false
		}
	}
	onClickToggle(){
		this.setState({
			editable : !this.state.editable
		})
	}
	render(){
		
		return(
			<div>
				{
					(!this.state.editable)?
					<ViewRow  keyVal={this.props.keyVal} rowData={this.props.rowData} onClickToggle={this.onClickToggle.bind(this)} />
					:
					<EditRow  keyVal={this.props.keyVal} rowData={this.props.rowData} add={this.props.add} update={this.props.update} onClickToggle={this.onClickToggle.bind(this)}/>
				}
			</div>

		)
	}
}

export default ToggleEdit;