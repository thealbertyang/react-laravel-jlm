import axios from 'axios'
import Cookies from 'universal-cookie'

export function getUser(id){
	return function(dispatch){	
		dispatch({type: 'FETCH_USER'})
		const cookies = new Cookies();
		axios.get('/api/users/'+id+'/?token='+cookies.get('token'))
		.then((response) => {
			console.log(response.data);
			dispatch({type: 'FETCH_USER_SUCCESS', form: response.data})
		})
		.catch((err) => { 
			dispatch({type: 'FETCH_USER_ERROR', form: null}) 
		})
	}
}

export function getUsers(){
	return function(dispatch){	
		const cookies = new Cookies();
		axios.get('/api/users?token='+cookies.get('token'))
		.then((response) => {
			dispatch({type: 'FETCH_USERS', payload: response.data.users})
		})
		.catch((err) => { 
			dispatch({type: 'FETCH_USERS', payload: null}) 
		})
	}
}

export function modalEditUserToggle(isActive = false, id){
	if(isActive){
		return {
			type: 'MODAL_EDIT_USER_ACTIVE', id: id
		}
	}
	else {
		return {
			type: 'MODAL_EDIT_USER_INACTIVE'
		}
	}
}

export function modalAddUserToggle(isActive = false){
	if(isActive){
		return {
			type: 'MODAL_ADD_USER_ACTIVE'
		}
	}
	else {
		return {
			type: 'MODAL_ADD_USER_INACTIVE'
		}
	}
}

export function updateUser(id, first_name, last_name, email, password){
	return function(dispatch){
		dispatch({type: 'UPDATE_USER'});
		console.log(id, first_name, last_name, email, password);
		axios.post('/api/users/'+id, { '_method': 'patch', 'first_name': first_name, 'last_name': last_name, 'email': email, 'password': password})
		.then((response) => { 
			console.log(response.data);

			switch(response.data.statusCode){
				case 200: {
					console.log('success');
					setTimeout(() => { 
						dispatch({type: 'UPDATE_SUCCESS'})
						dispatch({type:'MODAL_EDIT_USER_INACTIVE'})
						dispatch(getUsers())
					} , 250);
					break;
				}
			}

		})
		.catch((error) => { 
			console.log(error.response);

			switch(error.response.status){
				case 422: {
					console.log('Validation error');
					dispatch({type: 'SUBMIT_ERROR', errors: error.response.data.errors});
					break;
				}
				case 409: {
					console.log('409 error');
					dispatch({type: 'SUBMIT_ERROR', errors: error.response.data.errors});
					break;
				}
			}
		})
	}
}

export function deleteUser(id){
	return function(dispatch){
		dispatch({type: 'DELETE_USER'});

		axios.delete('/api/users/'+id)
		.then((response) => { 
			console.log(response.data);

			switch(response.data.statusCode){
				case 200: {
					console.log('success');
					setTimeout(() => { 
						dispatch({type: 'DELETE_SUCCESS'})
						dispatch(getUsers())
					} , 250);
					break;
				}
			}

		})
		.catch((error) => { 
			console.log(error.response);

			switch(error.response.status){
				case 422: {
					console.log('Validation error');
					dispatch({type: 'SUBMIT_ERROR', errors: error.response.data.errors});
					break;
				}
				case 409: {
					console.log('409 error');
					dispatch({type: 'SUBMIT_ERROR', errors: error.response.data.errors});
					break;
				}
			}
		})
	}
}

export function submitForm(first_name, last_name, email, password){
	return function(dispatch){

		dispatch({type: 'SUBMIT_USERS'});

		axios.post('/api/users', { first_name: first_name, last_name: last_name, email: email, password: password })
		.then((response) => { 
			console.log(response.data);

			switch(response.data.statusCode){
				case 200: {
					console.log('success');
					setTimeout(() => { 
						dispatch({type: 'SUBMIT_SUCCESS'})
						dispatch({type:'MODAL_ADD_USER_INACTIVE'})
						dispatch(getUsers())
					} , 250);
					break;
				}
			}

		})
		.catch((error) => { 
			console.log(error.response);

			switch(error.response.status){
				case 422: {
					console.log('Validation error');
					dispatch({type: 'SUBMIT_ERROR', errors: error.response.data.errors});
					break;
				}
				case 409: {
					console.log('409 error');
					dispatch({type: 'SUBMIT_ERROR', errors: error.response.data.errors});
					break;
				}
			}
		})
	}
}
