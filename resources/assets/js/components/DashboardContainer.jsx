import React from "react"
import { connect } from "react-redux"
import store from "../store"
import Cookies from 'universal-cookie';
import { Route, Switch } from "react-router-dom";

import { DashboardPage } from "../components/DashboardPage";
import { UsersPage } from "../components/UsersPage";
import { UsersEditPage } from "../components/dashboard/UsersEditPage";
import { UsersCreateEditPage } from "../components/dashboard/UsersCreateEditPage";

@connect(
	(store) => {
	return {
		auth: store.auth.authenticated,
		status: store.auth.status
	}
})
export class DashboardContainer extends React.Component {
	constructor(props){
		super(props);

	}
	componentDidMount(){
		if(this.props.status == 'logout' || this.props.status == 'fetch_error'){
			window.location.href = '/';
		}
	}
	
	componentDidUpdate(){
		if(this.props.status == 'logout' || this.props.status == 'fetch_error'){
			window.location.href = '/';
		}
	}

	render(){
		return (
			<Switch>
				<Route path={`${this.props.match.url}`} exact component={DashboardPage} />
				<Route path={`${this.props.match.url}/users`} exact component={UsersPage} />
				<Route path={`${this.props.match.url}/users/create`} exact render={(props)=> { return (<UsersCreateEditPage type="CREATE" {...props} />) }} />
				<Route path={`${this.props.match.url}/users/:id`} exact component={UsersEditPage} />
				<Route path={`${this.props.match.url}/users/:id/edit`} exact render={(props)=> { return (<UsersCreateEditPage type="EDIT" {...props} />) }} />
			</Switch>
		);	
	}
}

