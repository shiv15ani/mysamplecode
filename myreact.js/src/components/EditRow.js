import React, {Component} from 'react';
export default class EditRow extends Component{
	Change(id,e){
		console.log("indide editRow")
		console.log(id);

		switch(id){
			case 'crm_id':this.props.rowData.crm_id=e.target.value;
							
							break;
			case 'crm_name':this.props.rowData.crm_name=e.target.value;
							
							break;
			case 'request_id':this.props.rowData.request_id=e.target.value;
							
							break;
			case 'requirement_id':this.props.rowData.requirement_id=e.target.value;
							
							break;
			case 'requirement_type':this.props.rowData.requirement_type=e.target.value;
							
							break;
		}
		this.props.add(id,e.target.value)
		
		
	}
	Update(e){
		//this contains the only record which is being updated
		console.log(this.props.rowData);
		this.props.rowData.editable=false;
		this.props.update(this.props.rowData);
		//this.props.onClickToggle();

	}
	render(){
		return(
				<div>
				
					<input type="text" id='crm_id' value={this.props.rowData.crm_id} onChange={this.Change.bind(this,'crm_id')} / >
					<input type="text" id='crm_name' value={this.props.rowData.crm_name} onChange={this.Change.bind(this,'crm_name')} / >
					<input type="text" id='request_id' value={this.props.rowData.request_id} onChange={this.Change.bind(this,'request_id')} / >
					<input type="text" id='requirement_id' value={this.props.rowData.requirement_id} onChange={this.Change.bind(this,'requirement_id')} / >
					<input type="text" id='requirement_type' value={this.props.rowData.requirement_type} onChange={this.Change.bind(this,'requirement_type')} / >
					

					<input type="button" value="save" value="SUBMIT" className="mybutton" onClick={this.Update.bind(this)} />
				</div>
			)
	}
}