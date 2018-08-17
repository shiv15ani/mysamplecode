import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {edit, submitAll} from '../actions/AddFields';

class ViewRow extends Component{
	Edit(record,e){
			 record.editable=true;
			//this.props.onClickToggle();
			this.props.edit(record);
	}
	render(){
		return(
				<div className="container">
				  <div className="form-row">
				  		 <div className="col-md-2"> {this.props.rowData.crm_id}</div>
				  		 <div className="col-md-2">{this.props.rowData.crm_name}</div>
				  		 <div className="col-md-2">{this.props.rowData.request_id}</div>
				  		 <div className="col-md-2">{this.props.rowData.requirement_id}</div>
				  		 <div className="col-md-2">{this.props.rowData.requirement_type}</div>
						<input type="button" value="edit" className="mybutton" onClick={this.Edit.bind(this,this.props.rowData)}/>
					</div>
				</div>
			)
	}
}
	

const mapStateToProps= (state) =>{
	return{
		
		data:state.Reducer
	}
	

}
const mapDispatchToProps=(dispatch)=>{
	return{

		edit: bindActionCreators(edit, dispatch)
	}
	
}	
export default connect(mapStateToProps, mapDispatchToProps)(ViewRow);
