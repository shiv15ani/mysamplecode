import React, {Component} from 'react';
import InlineError from './InlineError';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadData} from '../actions/AddFields';
export  default class LoginPage extends Component{
	
	constructor(){
		super();
		this.state={
			data:{},
			errors:{}
		}
	}
	onValidate(){
		let data=this.state.data;
		let errors=this.state.errors;
		let formIsValid:true;
		if(!data.email){
			formIsValid=false;
			errors.email="Email cannot be empty";
		}
		if(!data.password){
			formIsValid=false;
			errors.password="Password cannot be empty";
		}
		this.setState({errors});
		console.log("error")
		return formIsValid;
	}
	onFormSubmit(){
		const {data, errors}= this.state;
		if(this.onValidate()){
			alert("form submitted");
		}
		else{
			this.refs.emailError.innerHTML="error in email"
		}
	}
	OnFieldChange(value,e){
		let data=this.state.data;
		data[value]=e.target.value;
		this.setState({data});
	}

	render(){
		const {data, errors}= this.state;
		return(

			<div className="container">
				<h1> Login here</h1>
				
				<form className="form-row" onSubmit={this.onFormSubmit.bind(this)}>
				
				  	<span className="InputBox">Email Id:</span>   <input type="email" ref="email" placeholder="Email Id" value={this.state.data.email} onChange={this.OnFieldChange.bind(this,"email")}/>
				  <InlineError err={this.state.errors.email}/>
				  	<span className="InputBox">Password:</span>   <input type="password" ref="password"  placeholder="Password" value={this.state.data.password} onChange={this.OnFieldChange.bind(this,"password")}/>
				
				    <div className="mybutton"><input type="submit" value="Submit" className="mybutton"/></div>
				</form>
			</div>
			)
	}
}


