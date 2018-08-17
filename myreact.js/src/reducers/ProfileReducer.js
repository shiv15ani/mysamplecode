let record = {
	profileRecords : [],
	profileRecord : {
		requirement_id : '',
		requirement_type : '',
		candidate_id : '',
		candidate_name : '',
		editable:false
	}
}
export default (state=record, action)=>{
	switch(action.type){
		case 'P_REQUIREMENT_ID':  
						return Object.assign({}, state,{
							profileRecord : {
								requirement_id : action.data,
								requirement_type : state.profileRecord.requirement_type,
								candidate_id : state.profileRecord.candidate_id,
								candidate_name : state.profileRecord.candidate_name,
								editable : state.profileRecord.editable
							}
						})
						break;
		case 'P_REQUIREMENT_TYPE':  
						return Object.assign({}, state,{
							profileRecord : {
								requirement_id : state.profileRecord.requirement_id,
								requirement_type : action.data,
								candidate_id : state.profileRecord.candidate_id,
								candidate_name : state.profileRecord.candidate_name,
								editable : state.profileRecord.editable
							}
						})
						break;
		case 'P_CANDIDATE_ID':  
						return Object.assign({}, state,{
							profileRecord : {
								requirement_id : state.profileRecord.requirement_id,
								requirement_type : state.profileRecord.requirement_type,
								candidate_id : action.data,
								candidate_name : state.profileRecord.candidate_name,
								editable : state.profileRecord.editable
							}
						})
						
						break;
		case 'P_CANDIDATE_NAME':  
						return Object.assign({}, state,{
							profileRecord : {
								requirement_id : state.profileRecord.requirement_id,
								requirement_type : state.profileRecord.requirement_type,
								candidate_id : state.profileRecord.candidate_id,
								candidate_name :action.data,
								editable : state.profileRecord.editable
							}
						})
						
						break;
		case 'P_SUBMIT_ALL':  
						return { 
        					...state,
					        profileRecords: [...state.profileRecords, action.data]
					    }
						break;					
																									
		default: return state;

	}
}