export const add=(id, value)=>{
		switch(id){
		case 'requirement_id':
					return{
					type:'P_REQUIREMENT_ID',
					data:value
						}
						break;
		case 'requirement_type':
					return{
					type:'P_REQUIREMENT_TYPE',
					data:value
						}
						break;	
		case 'candidate_id':
					return{
					type:'P_CANDIDATE_ID',
					data:value
						}
						break;
		case 'candidate_name':
					return{
					type:'P_CANDIDATE_NAME',
					data:value
						}
						break;	
																
	}
};
export const submitAll=(obj)=>{
	console.log("submit time")
	console.log(obj.profileRecord)
	return{
		type:'P_SUBMIT_ALL',  //P_tells Profile
		data: obj.profileRecord
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



