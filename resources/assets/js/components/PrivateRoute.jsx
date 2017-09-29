import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { connect } from "react-redux"
import store from "../store"

@connect(
	(store) => { 
	return {
		authenticated: store.auth.authenticated
	}
})
export default class PrivateRoute extends React.Component {
	//check if route is authenticated
	constructor(props){
		super(props)
	}
	render(){
		const routeOrRedirect = this.props.authenticated ? <Route path={this.props.path} component={this.props.component} /> : null
		return (
			<Route path={this.props.path} render
		)
	}
}