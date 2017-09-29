import Cookies from 'universal-cookie';
import axios from 'axios'

export function status(status){
	return function(dispatch){
		dispatch({type: 'SET_ROUTER_STATUS', payload: status });
	}
}

export function checkToken(){ 
	return function(dispatch){
		const cookies = new Cookies();
		dispatch({type: 'FETCH_USER'}); 
		
		axios.get('/api/user?token='+cookies.get('token'))
		.then((response) => { 
			dispatch({type: 'FETCH_USER_SUCCESS', username: response.data.username}); 
		})
		.catch((err) => { 
			dispatch({type: 'FETCH_USER_ERROR'}) 
		})
	}
}

export function login(username, password){
	return function(dispatch){
		const cookies = new Cookies();
		dispatch({type: 'AUTH_USER'}); 

		axios.post('/api/login', { email: username, password: password })
		.then((response) => { 
			cookies.set('token', response.data.token);
			console.log(response.data);
			dispatch({type: 'AUTH_USER_SUCCESS', username: username }) 
		})
		.catch((error) => { 
			dispatch({type: 'AUTH_USER_ERROR'}) 
		})
	}
}

export function logout(){
	const cookies = new Cookies();
	cookies.remove('token');
	return {
		type: 'LOGOUT_USER'
	}
}