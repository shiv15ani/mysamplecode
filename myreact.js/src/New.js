import React, {Component} from 'react';
import NewChild from './NewChild';
class NewApp extends Component{
	render(){
		return(
				<div>
					<h1>Parent Component</h1>
					<NewChild name="shivani">abc</NewChild>
					<NewChild name="shivani">shivani</NewChild>
					<NewChild ></NewChild>
				</div>	
			)
	}
}
export default NewApp;