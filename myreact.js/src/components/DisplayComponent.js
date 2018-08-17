import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add, edit, submitAll, update,loadData} from '../actions/AddFields';
import EditRow from './EditRow';
import ViewRow from './ViewRow';
import {Link} from 'react-router-dom';
import MyContainer from '../containers/MyContainer'
import ToggleEdit from './ToggleEdit';

class DisplayComponent extends Component{
	
	componentDidMount(){
		this.props.loadData();
		
	}
	constructor(){
		super();
		this.state={
			items:[],
			isLoaded:false
		}
	}

	render(){
			var requirement_type_val=['New/Immediate','Future','Replacement'];
			var {isLoaded, items} =this.state;
			

			let noneditable = this.props.data.allRecords.map((val,i)=>{
				
				let s="hghj"
				let a=val;
				//a.editable=false;
				
				//this.props.update(a);
				
				return(
					(!a.editable)?<ViewRow  key={a.requirement_id} rowData={a}/> :<EditRow  key={a.requirement_id} rowData={a} add={this.props.addTask} update={this.props.update}/>
					//<ToggleEdit keyVal={a.requirement_id} rowData={a} add={this.props.addTask} update={this.props.update}/>
					)})
		return(
			<div>
			<MyContainer/>
			
			{this.state.items}
			<h3>Requirement List</h3>
				
				{noneditable}
			</div>
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
    update: bindActionCreators(update, dispatch),
   	loadData: bindActionCreators(loadData, dispatch)

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);
