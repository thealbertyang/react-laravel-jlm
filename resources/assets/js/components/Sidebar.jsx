import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../actions/authActions'
import { connect } from "react-redux"

@connect(
	(store) => {
	return {
		
	}
})
export default class Sidebar extends React.Component { 
	constructor(props){
		super(props);
		this.logout = this.logout.bind(this);
	}
	logout(){
	    this.props.dispatch(logout());
	}
	render(){
		return (
			<div className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
				<div className="sidebar__logo">
					<NavLink exact to="/dashboard"><img src="/img/logo-transparent.png" className="logo" /></NavLink>
				</div>
				<ul className="nav nav-pills flex-column">
					<li className="nav-item">
					  <NavLink exact to="/dashboard" className="nav-link"><i className="fa fa-home"></i> <span>Dashboard</span></NavLink>
					</li>
					<li className="nav-item">
					  <NavLink to="/dashboard/users" className="nav-link"><i className="fa fa-building-o"></i> <span>Users</span></NavLink>
					</li>
					<li className="nav-item">
						<a className="dropdown-item" href="#" onClick={this.logout} className="nav-link"><i className="fa fa-power-off"></i> <span>Logout</span></a>
					</li>
				</ul>
			</div>
		)
	}
}