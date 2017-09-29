import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { BlogPage } from "./components/BlogPage";
import { LoginPage } from "./components/LoginPage";

import store from "./store"

import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";


store.subscribe(() => {
	//console.log("app changed", store.getState());
});


class App extends React.Component {
	constructor(props){
		super(props);
	}
	componentWillMount(){
	}

	render(){
		return (
			<Router>
				<div id="app">
					<Navbar/>
					<Route exact path='/' component={HomePage} />
					<Route path='/about' component={AboutPage} />
					<Route path='/blog' component={BlogPage} />
					<Route path='/login' component={LoginPage} />
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
