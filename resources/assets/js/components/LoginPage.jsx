import React from "react"
import { connect } from "react-redux"
import store from "../store"
import { login, logout } from '../actions/authActions'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';
import AuthController from "../components/AuthController";
import NavbarDos from '../components/NavbarDos'

@connect((store) => {
	return {
		auth: store.auth.authenticated,
		status: store.auth.status
	}
})
export class LoginPage extends React.Component {
	constructor(props){
		super(props);
		this.state = { username: '', password: ''};
		this.login = this.login.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	componentDidMount(e){
		console.log(this.props);
	}
	componentDidUpdate(e){
		if(this.props.status == 'fetch_success'){
			window.location.href = this.props.loggedInPath;
		}
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	login(e){
		console.log('---- LOGIN AS ----')
		console.log(this.state.username);
		console.log(this.state.password);

		this.props.dispatch(login(this.state.username, this.state.password, this.props.loggedInPath));

		e.preventDefault();
	}

	render(){
			return (
				<div className="d-flex justify-content-center" style={{ flex: 1 }}>
					<NavbarDos/>
					<form className="form-signin d-flex flex-column justify-content-center" onSubmit={this.login}>
						<h2 className="form-signin-heading">Please sign in {this.props.status}</h2>
						<label className="sr-only">Email address</label>
						<input name="username" type="text" className="form-control" placeholder="Username" value={this.state.username} onChange={this.handleInputChange}/>
						<label className="sr-only">Password</label>
						<input name="password" type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
						<div className="checkbox">
							<label>
								<input type="checkbox" value="remember-me"/> Remember me
							</label>
						</div>
						<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.login}>Sign in</button>
					</form>
				</div>
			);	
	}
}

