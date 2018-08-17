import React ,  {Component,Fragment }from 'react';
import InputText from './InputText';
import Dropdown from './Dropdown';
import DisplayComponent from './DisplayComponent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add, submitAll, display} from '../actions/ProfileActions';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import MyContainer from '../containers/MyContainer'
class ProfileForm extends Component{
	
	Submit(e){
		console.log("hey im submitting");
		console.log(this.props.profileData);
		this.props.submitAll(this.props.profileData);
	}
	Change(id,e){
		console.log(e.target.value);
		let records = this.props.data.allRecords
		console.log(this.props.data.allRecords)
		let obj = _.find(records,{requirement_id:e.target.value});
		console.log(obj);
		
		this.refs.req_type.value=obj.requirement_type;
		this.props.addTask("requirement_type",obj.requirement_type);
		this.props.addTask(id,e.target.value);
		
	}
	Add(id,e){
		console.log(id)
		console.log(e.target.value)
		this.props.addTask(id,e.target.value)
		
	}
	render(){
		// var requirement_type_val={this.props.data}
		let reqList=this.props.data.allRecords.map((val,i)=>{
			return(
					<p> {val.requirement_id}</p>
				)
		})
		return(
				<Fragment>
					<MyContainer/>
					<div className="container">
						<div>
								<h2>Add Profile</h2>
						</div>
						<form >
								
							 <div className="form-row">
							 	 <div className="col">
							 		Requirement ID
									<select  id='requirement_id' className="form-control" onChange={this.Change.bind(this,"requirement_id")} >
										{this.props.data.allRecords.map((val)=><option key={val.requirement_id} ref="option">{val.requirement_id}</option>)}
									</select>
								</div>
								<div className="col">
									Requirement Type<input type="text" className="form-control"  ref="req_type" id='requirement_type' data={this.props.profileData} add={this.props.addTask} onChange={this.Add.bind(this,"requirement_type")}/>
								</div>
							</div>	
							 <div className="form-row">
								<InputText id='candidate_id' data={this.props.profileData} add={this.props.addTask} >Candidate ID</InputText>
								<InputText id='candidate_name' data={this.props.profileData} add={this.props.addTask} >Candidate Name</InputText>
							</div>	
								
							<div className="mycenter"><Link to="/DisplayProfile"><input type="submit" className="btn btn-success" value="SUBMIT"  onClick={this.Submit.bind(this)}/></Link></div>
						
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
    data: state.Reducer,
    profileData:state.ProfileReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addTask: bindActionCreators(add, dispatch),
    submitAll: bindActionCreators(submitAll, dispatch)
   

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);