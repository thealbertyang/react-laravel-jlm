import React from "react"
import { connect } from "react-redux"
import store from "../store"
import { login, logout } from '../actions/authActions'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';
import AuthController from "../components/AuthController";
import Sidebar from "../components/Sidebar"
import NavbarDos from '../components/NavbarDos'
import { DashboardPage } from "../components/DashboardPage";
import { UsersPage } from "../components/UsersPage";
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";

@connect(
	(store) => {
	return {
		auth: {
			authenticated: store.auth.authenticated
		}
	}
})
export class DashboardContainer extends React.Component {
	constructor(props){
		super(props);
	}

	render(){

				return (
					<Switch>
						<Route exact path='/' component={DashboardPage} />
						<Route exact path='/' component={UsersPage} />
					</Switch>
				);	

	}
}

