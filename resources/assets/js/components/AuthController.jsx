import React from "react"
import store from "../store"
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

@connect(
	(store) => {
	return {
		auth: {
			authenticated: store.auth.authenticated
		}
	}
})
export default class AuthController extends React.Component {
	constructor(props){
		super(props);

	}

	componentWillMount(){
		if(this.props.auth.authenticated){
					return (
						<Redirect to={{ pathname: '/dashboard' }}/>
					)
		}
		else if(!this.props.auth.authenticated){
					if(this.props.location.pathname !== '/login'){
				      return (
				        <Redirect to={{ pathname: '/login' }}/>
				       )
				  }
		}
	}
}