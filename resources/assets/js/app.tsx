import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { BlogPage } from "./components/BlogPage";

class App extends React.Component {
	render(){
		return (
			<Router>
				<div>
					<Navbar/>
					<Route path='/' component={HomePage} />
					<Route path='/home' component={HomePage} />
					<Route path='/about' component={AboutPage} />
					<Route path='/blog' component={BlogPage} />
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById("root"));
