let dataVal;


export const add=(id, value)=>{
		switch(id){
		case 'crm_id':
					return{
					type:'CRM_ID',
					data:value
						}
						break;
		case 'crm_name':
					return{
					type:'CRM_NAME',
					data:value
						}
						break;	
		case 'request_id':
					return{
					type:'REQUEST_ID',
					data:value
						}
						break;
		case 'requirement_id':
					return{
					type:'REQUIREMENT_ID',
					data:value
						}
						break;	
		case 'requirement_type':
					return{
					type:'REQUIREMENT_TYPE',
					data:value
						}
						break;															
	}
};
export const submitAll=(obj)=>{
	console.log("submit time")
	console.log(obj.currentRecord)
	
	return (dispatch) => {
		fetch('http://localhost:3079/addreq',
			{ method: 'POST',
   			  body: JSON.stringify(obj.currentRecord),
    		  headers: {"Content-Type": "application/json"}
			}).then(res => res.json())
					.then(json=>{
						console.log('Data:',json.data)
						dispatch({
					type: 'SUBMIT_ALL',
			 		data: json.data
				})
			}, err => console.log(err))
	}
}

export const edit=(req_id)=>{
	
	return{
		type:'EDIT',
		data: req_id
	}
}
export const update=(obj)=>{
	
	return{
		type:'UPDATE',
		data: obj
	}
}

export const loadData = () => {
	
	return (dispatch) => {
		fetch('http://localhost:3079/selectreqs').then(res=>res.json())
		.then(json=>{
			console.log('Data:',json.data)
			
				dispatch({
					type: 'LOAD_DATA',
			 		data: json.data
				})
					
		}, err => console.log(err))
	}
		
		
	
		
}



