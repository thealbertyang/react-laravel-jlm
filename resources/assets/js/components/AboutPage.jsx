import React from 'react';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import NavbarDos from '../components/NavbarDos'

export class AboutPage extends React.Component {
	render(){
		return(
			<div className="container">
				<NavbarDos/>
				<h1>This is the about page</h1>
			</div>
		);
	}
}