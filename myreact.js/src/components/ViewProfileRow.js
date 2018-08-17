import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {edit, submitAll} from '../actions/AddFields';

class ViewProfileRow extends Component{
	Edit(record,e){
			record.editable=true;
			this.props.edit(record);
	}
	render(){
		console.log(this.props.rowData);
		return(

				<div className="container">
				  	<div className="form-row" border="1">
				  		 <div className="col-md-2"> {this.props.rowData.requirement_id}</div>
				  		 <div className="col-md-2">{this.props.rowData.requirement_type}</div>
				  		 <div className="col-md-2">{this.props.rowData.candidate_id}</div>
				  		 <div className="col-md-2">{this.props.rowData.candidate_name}</div>
				  		<input type="button" value="edit" className="mybutton" onClick={this.Edit.bind(this,this.props.rowData)}/>
					</div>
				</div>




			
					
						
			)
	}
}
	

const mapStateToProps= (state) =>{
	return{
		
		data:state.ProfileReducer
	}
	

}
const mapDispatchToProps=(dispatch)=>{
	return{

		edit: bindActionCreators(edit, dispatch)
	}
	
}	
export default connect(mapStateToProps, mapDispatchToProps)(ViewProfileRow);
