import React, {Component} from 'react';
import '../css/Bookstore.css'
export default class InputText extends Component{
	Change(id,e){
		console.log(id)
		console.log(e.target.value)
		this.props.add(id,e.target.value)
		
	}
	render(){
		var a=this.props.id;
		console.log(this.props.id);
		return(
				
				 <div className="col-md-6">
					{this.props.children}
					<input type="text" className="form-control" onChange={this.Change.bind(this,a)} / >
				</div>
		
	)
	}
	
}
