import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add, edit, submitAll, update} from '../actions/AddFields';
import EditRow from './EditRow';
import ViewProfileRow from './ViewProfileRow';
import {Link} from 'react-router-dom';
import MyContainer from '../containers/MyContainer'
class DisplayProfile extends Component{
	
	
	render(){
			var requirement_type_val=['New/Immediate','Future','Replacement'];

let noneditable = this.props.data.profileRecords.map((val,i)=>{
				console.log("inside display ")
				let s="hghj"
				let a=val;
				console.log(a);
				return(
					(!a.editable)?<ViewProfileRow  key={a.requirement_id} rowData={a}/> :<EditRow  key={a.requirement_id} rowData={a} add={this.props.addTask} update={this.props.update}/>
					)})
			
		return(
			<div>
			<MyContainer/>
			<h3>Profiles List</h3>
				{noneditable}
			</div>
			)
			
	}
}
const  mapStateToProps = (state) => {
	console.log("form")
  console.log(state);
  return{
    data: state.ProfileReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addTask: bindActionCreators(add, dispatch),
    update: bindActionCreators(update, dispatch)
   

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayProfile);
