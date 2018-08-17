let record = {
	allRecords : [],
	currentRecord : {
		crm_id : '',
		crm_name : '',
		request_id : '',
		requirement_id : '',
		requirement_type : '',
		editable:false
	}
}
export default (state=record, action)=>{
	switch(action.type){
		case 'CRM_ID':  
						return Object.assign({}, state,{
							currentRecord : {
								crm_id : action.data,
								crm_name : state.currentRecord.crm_name,
								request_id : state.currentRecord.request_id,
								requirement_id : state.currentRecord.requirement_id,
								requirement_type : state.currentRecord.requirement_type,
								editable : state.currentRecord.editable
							}
						})
						break;
		case 'CRM_NAME':  
						return Object.assign({}, state,{
							currentRecord : {
								crm_id : state.currentRecord.crm_id,
								crm_name : action.data,
								request_id : state.currentRecord.request_id,
								requirement_id : state.currentRecord.requirement_id,
								requirement_type : state.currentRecord.requirement_type,
								editable : state.currentRecord.editable
							}
						})
						break;
		case 'REQUEST_ID':  
						return Object.assign({}, state,{
							currentRecord : {
								crm_id : state.currentRecord.crm_id,
								crm_name : state.currentRecord.crm_name,
								request_id : action.data,
								requirement_id : state.currentRecord.requirement_id,
								requirement_type : state.currentRecord.requirement_type,
								editable : state.currentRecord.editable
							}
						})
						
						break;
		case 'REQUIREMENT_ID':  
						return Object.assign({}, state,{
							currentRecord : {
								crm_id : state.currentRecord.crm_id,
								crm_name : state.currentRecord.crm_name,
								request_id : state.currentRecord.request_id,
								requirement_id : action.data,
								requirement_type : state.currentRecord.requirement_type,
								editable : state.currentRecord.editable
							}
						})
						
						break;
		case 'REQUIREMENT_TYPE':  
						return Object.assign({}, state,{
							currentRecord : {
								crm_id : state.currentRecord.crm_id,
								crm_name : state.currentRecord.crm_name,
								request_id : state.currentRecord.request_id,
								requirement_id : state.currentRecord.requirement_id,
								requirement_type : action.data,
								editable : state.currentRecord.editable
							}
						})
						
						return state;
						break;					
		case 'SUBMIT_ALL':  
						return { 
        					...state,
					        allRecords: [...state.allRecords, action.data]
					    }
						break;	
		case 'EDIT':  
						console.log("indise edit reducer");
						console.log(state);
						return Object.assign({}, state, {
				               allRecords: state.allRecords.map(item => {
				                   return item.requirement_id === action.data.requirement_id ? action.data : item;
				               })
				            }); 
				        
				            return state;
										break;
		case 'UPDATE':  
						console.log("indise update reducer");
						console.log(state);
						return Object.assign({}, state, {
				               allRecords: state.allRecords.map(item => {
				                   return item.requirement_id === action.data.requirement_id ? action.data : item;
				               })
				            }); 
				        
				            return state;
										break;	
		case 'LOAD_DATA':  
						let tempRecord = [];
						action.data.map((record,index) => {
							tempRecord.push(record)
						})
						return Object.assign({},state,{
							allRecords: tempRecord
						})
						break;																																
		default: return state;

	}
}