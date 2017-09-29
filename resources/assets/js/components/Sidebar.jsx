import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Sidebar extends React.Component {
	render (){
		return (<nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
				          <ul className="nav nav-pills flex-column">
				            <li className="nav-item">
				              <NavLink exact to="/dashboard" className="nav-link">Dashboard</NavLink>
				            </li>
				            <li className="nav-item">
				              <NavLink to="/dashboard/users" className="nav-link">Users</NavLink>
				            </li>
				          </ul>

		</nav>
	)}
}