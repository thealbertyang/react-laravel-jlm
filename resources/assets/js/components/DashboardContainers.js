import React from "react"
import { connect } from "react-redux"
import store from "../store"
import Cookies from 'universal-cookie';
import { Route, Switch } from "react-router-dom";

import { DashboardPage } from "../components/DashboardPage";
import { UsersPage } from "../components/UsersPage";

@connect(
	(store) => {
	return {
		auth: store.auth.authenticated,
		status: store.auth.status
	}
})
export class DashboardContainers extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		if(this.props.status == 'logout' || this.props.status == 'fetch_error'){
			window.location.href = '/login';
		}
	}
	
	render(){
				return (
					<Switch>
						<Route path='/dashboard' exact component={DashboardPage} />
						<Route path='/dashboard/users' exact component={UsersPage} />
					</Switch>
				);	

	}
}

