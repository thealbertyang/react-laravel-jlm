import React from "react"
import { connect } from "react-redux"
import store from "../store"
import { login, loggedIn,status, checkToken } from '../actions/authActions'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { HomePage } from "../components/HomePage";
import { AboutPage } from "../components/AboutPage";
import { BlogPage } from "../components/BlogPage";
import { LoginPage } from "../components/LoginPage";
import { DashboardContainers } from "../components/DashboardContainers";

import axios from 'axios'
import Cookies from 'universal-cookie';

@connect(
	(store) => { 
	return {
		auth: store.auth.authenticated,
		status: store.auth.status
	}
})
export default class AppRouter extends React.Component {
	static contextTypes = {
		router: React.PropTypes.object,
		location: React.PropTypes.object
	}
	constructor(props){
		super(props);
	} 

	componentWillMount(){
		//Hey are we logged in? If not then leave loading screen on
	}

	componentDidMount(){
		//If we mounted then change status to loaded
		console.log('auth', this.props.auth)
		console.log('status', this.props.status)
		//this.props.dispatch(status('fetching'));
		if(this.props.status == 'loading'){
			this.props.dispatch(checkToken());
		}
		if(this.props.status == 'fetch_error'){
			this.props.dispatch(logout());
		}
	}
	componentDidUpdate(){
		console.log('app router did update', this.props)
	}

	render() {
		const links = [
			{'url': '/', 'title': 'Home', 'component': HomePage },
			{'url': '/blog', 'title': 'Blog', 'component': BlogPage },
			{'url': '/about', 'title': 'About', 'component': AboutPage},
			{'url': '/login', 'title': 'Login', 'component': LoginPage},
			{'url': '/dashboard', 'title': 'Dashboard', 'component': DashboardContainers, 'member': true},
		];

		let PrivateRoute = (props) => {
			//if the status is loading then wait until loaded to check if authenticated or not
			let PageComponent = props.component;
			return <Route path={this.props.path} render={(props)=> <PageComponent {...props} /> }/>;
		}

		return (
			<Router>
				<Switch>
					<Route exact path='/' links={links} component={HomePage} />
					<Route path='/about' component={AboutPage} />
					<Route path='/blog' component={BlogPage} />
					<Route path='/login' render={(props)=> <LoginPage loggedInPath="/dashboard" {...props} />}/>
					<PrivateRoute path='/dashboard' component={DashboardContainers} {...this.props} />
				</Switch>
			</Router>
		);
	}
}
