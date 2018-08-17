import React ,{Component} from 'react';
import LoginPage from '../components/LoginPage';
import MyForm from '../components/MyForm';
import '../css/Bookstore.css'
import {BrowserRouter,Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


export default class MyContainer extends Component{
	
	render(){
		return(
			<div>
			
		<nav className="navbar navbar-light bg-light navbar-expand-sm">
			<Link to='/' className="navbar-brand">Resource Management</Link>
			<button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarMenu">
					<ul className="navbar-nav nav-tabs nav-fill">
					<li className="nav-item"> 
							<Link to='/LoginPage'>
								<div className="nav-link" >Login</div>
							</Link>
					</li>
					
					<li className="nav-item">
							<Link to='/MyForm'>
								<div className="nav-link " >ADD REQUIREMENT</div>
							</Link>
				    </li>
				    <li className="nav-item">
				    	<Link to='/DisplayComponent'>
							<div className="nav-link" >VIEW REQUIREMENT</div>
						</Link>
				    </li>
				    <li className="nav-item">
				    		<Link to='/ProfileForm'>
								<div className="nav-link" >ADD PROFILE</div>
							</Link>
				    </li>
				    <li className="nav-item">
				    		<Link to='/DisplayProfile'>
								<div className="nav-link" >VIEW PROFILE</div>
							</Link>
				    </li>
					</ul>
			</div>
		
		
		
		
		
		
			</nav>
			</div>
			)
	}
}
