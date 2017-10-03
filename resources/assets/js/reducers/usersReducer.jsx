export default function usersReducer(state = {
	users: null,
	modalAddUser: false,
	modalEditUser: false,
	status: null,
	errors: null,
	form: null
}, action) {
	switch(action.type) {
		case "FETCH_USER": {
			state = {...state, status: 'getting_user' }
			break;
		}
		case "FETCH_USER_SUCCESS": {
			state = {...state, form: action.form, status: 'get_user_success'}
			break;
		}
		case "FETCH_USER_ERROR": {
			state = {...state, status: 'get_user_error' }
			break;
		}
		case "FETCH_USERS": {
			state = {...state, users: action.payload}
			break;
		}
		case "DELETE_USER": {
			state = {...state, status: 'deleting'}
			break;
		}
		case "DELETE_SUCCESS": {
			state = {...state, status: 'delete_success'}
			break;
		}
		case "UPDATE_USER": {
			state = {...state, status: 'updating'}
			break;
		}
		case "UPDATE_SUCCESS": {
			state = {...state, status: 'update_success'}
			break;
		}
		case "SUBMIT_USERS": {
			state = {...state, status: 'submitting'}
			break;
		}
		case "SUBMIT_SUCCESS": {
			state = {...state, status: 'submit_success'}
			break;
		}
		case "SUBMIT_ERROR": {
			state = {...state, status: 'submit_error', errors: action.errors}
			break;
		}		
		case "MODAL_EDIT_USER_ACTIVE": {
			state = {...state, modalEditUser: true, id: action.id}
			break;
		}
		case "MODAL_EDIT_USER_INACTIVE": {
			state = {...state, modalEditUser: false}
			break;
		}		
		case "MODAL_ADD_USER_ACTIVE": {
			state = {...state, modalAddUser: true}
			break;
		}
		case "MODAL_ADD_USER_INACTIVE": {
			state = {...state, modalAddUser: false}
			break;
		}
	}

	return state;
};
