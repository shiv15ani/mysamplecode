import React, {Component} from 'react';
export default class Dropdown extends Component{
	
	Change(id,e){
		console.log(id)
		console.log(e.target.value)
		
		this.props.add(id,e.target.value);
		
	}
	render(){
		var a=this.props.id;
		console.log(this.props.id);
		return(
			
			 <div className="col-md-4">
					{this.props.children}
					
					<select className="form-control" onChange={this.Change.bind(this,a)}>
							
							{this.props.values.map((val)=><option key={val} ref="option">{val}</option>)}
						
					</select>
			</div>	
		
	)
	}
	
}