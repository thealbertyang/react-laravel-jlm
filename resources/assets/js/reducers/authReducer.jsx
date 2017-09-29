export default function authReducer(state = {
	status: 'loading',
	username: null,
	authenticated: false
}, action) {
	switch(action.type) {
		case "FETCH_USER": {
			state = {...state, status: 'fetching'}
			break;			
		}
		case "FETCH_USER_SUCCESS": {
			state = {...state, username: action.username, authenticated: true, status: 'fetch_success'}
			break;			
		}
		case "FETCH_USER_ERROR": {
			state = {...state, username: null, authenticated: false, status: 'fetch_error'}
			break;			
		}
		case "AUTH_USER": {
			state = {...state, status: 'fetching'}
			break;
		}
		case "AUTH_USER_SUCCESS": {
			state = {...state, username: action.username, authenticated: true, status: 'fetch_success'}
			break;
		}
		case "AUTH_USER_ERROR": {
			state = {...state, username: null, authenticated: false, status: 'fetch_error'}
			break;
		}
		case "LOGOUT_USER": {
			state = {...state, authenticated: false, status: 'logout'}
			break;
		}
	}
	return state;
};
