import React from 'react';
import { login, logout } from '../actions/authActions'
import { connect } from "react-redux"
import store from "../store"

@connect((store) => {
	return {
		auth: store.auth.authenticated,
		status: store.auth.status
	}
})
export class HomePage extends React.Component {
	constructor(props){
		super(props);
		this.state = { email: '', password: ''};
		this.login = this.login.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	componentDidMount(e){
		console.log(this.props);
	}
	componentDidUpdate(e){
		if(this.props.status == 'fetch_success'){
			window.location.href = "/dashboard";
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
		this.props.dispatch(login(this.state.email, this.state.password, this.props.loggedInPath));
		e.preventDefault();
	}
	render(){
		console.log(this.props)
		return (
			<section className="login d-flex align-items-center">
				<div className="container">
					<form onSubmit={this.login}>
						<div className="login__logo row">
							<img src='/img/logo-transparent.png' className="logo"  />
						</div>
						<div className="form-group row">
							<div className="col-md-3 m-auto">
								<input className="form-control" name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />
							</div>
						</div>
						<div className="form-group row">
							<div className="col-md-3 m-auto">
								<input className="form-control" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
							</div>
						</div>
						<div className="form-group row">
							<div className="col-md-3 m-auto">
								<button className="btn btn-primary btn-block" type="submit">Login</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		);
	}
}