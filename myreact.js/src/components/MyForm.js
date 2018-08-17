import React ,  {Component,Fragment }from 'react';
import InputText from './InputText';
import Dropdown from './Dropdown';
import DisplayComponent from './DisplayComponent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add, submitAll, display, loadData} from '../actions/AddFields';
import {Link} from 'react-router-dom';
import MyContainer from '../containers/MyContainer'
class MyForm extends Component{
	


	Submit(e){
		this.props.submitAll(this.props.data);
	}
	render(){
		
		var requirement_type_val=['New/Immediate','Future','Replacement'];
		var owner=['RMG','TAG'];
		var exp_range=['0-2','2-4','4-6','6-8','8-10','10-12','12+'];
		var grp=['T&D','MSO','Digital']
		return(
				<Fragment>
					<MyContainer/>
					<div  className="container">
						<div>
								<h2>Add Requirement</h2>
						</div>
						<form >
								
							 <div className="form-row">
								<InputText id='crm_id' data={this.props.data} add={this.props.addTask}>CRM ID</InputText>
								<InputText id='crm_name' data={this.props.data} add={this.props.addTask}>CRM Name</InputText>
							 </div>	
							  <div className="form-row">
								<InputText id='request_id' data={this.props.data} add={this.props.addTask}>Request ID</InputText>
								<InputText id='requirement_id' data={this.props.data} add={this.props.addTask}>Requirement ID</InputText>
							 </div>
							 <div className="form-row">	
								<Dropdown id='requirement_type' data={this.props.data} add={this.props.addTask} values={requirement_type_val}>Requirement Type</Dropdown>
							</div>
							<div className="mycenter"><Link to="/DisplayComponent" ><input type="submit" className="btn btn-success" value="SUBMIT"  onClick={this.Submit.bind(this)}/></Link></div>
							 
						</form>
					</div>
					
				</Fragment>
			)
	}
}
const  mapStateToProps = (state) => {
	console.log("form")
  console.log(state);
  return{
    data: state.Reducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addTask: bindActionCreators(add, dispatch),
    submitAll: bindActionCreators(submitAll, dispatch),
   	loadData: bindActionCreators(loadData, dispatch)

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyForm);