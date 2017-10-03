import React from 'react'
import Sidebar from '../../components/Sidebar'
import { connect } from "react-redux"
import store from "../../store"
import { getUser, submitForm, updateUser } from '../../actions/usersActions'

import { Link } from 'react-router-dom'
import { Form } from '../../components/Form'
@connect((store) => {
	return {
		users: store.users.users,
		status: store.users.status,
		errors: store.users.errors,
		form: store.users.form
	}
})
export class UsersCreateEditPage extends React.Component {
	constructor(props){
		super(props);	
		this.state = { first_name: '', last_name: '', email: '', password: '' };
		this.submitForm = this.submitForm.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	} 

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	componentDidMount(){
		if (this.props.type == "EDIT"){
			this.props.dispatch(getUser(this.props.match.params.id))
		} 
	}

	componentDidUpdate(){
		//Set state depending on edit or add
		if(this.props.status == 'get_user_success' && this.props.form && !this.state.filled){
			switch(this.props.type){
				case 'CREATE': {
					break;
				}
				case 'EDIT': {
					this.setState({
						...this.state,
						id: this.props.form.id,
						first_name: this.props.form.first_name,
						last_name: this.props.form.last_name,
						email: this.props.form.email,
						password: this.props.form.password ? this.props.form.password : '',
						filled: true
					});
					break;
				}
			}
		}
	}

	submitForm(e, type){
		e.preventDefault();
		switch(type) {
			case 'CREATE': {
				console.log('create')
				this.props.dispatch(submitForm(this.state.first_name, this.state.last_name, this.state.email, this.state.password));
				break;
			}
			case 'EDIT': {
				this.props.dispatch(updateUser(this.state.id, this.state.first_name, this.state.last_name, this.state.email, this.state.password));
				break;
			}
		}
		
	}

	render(){
		return (
			<div className="screen container-fluid">
			      	<div className="screen__container row">
				        <Sidebar/>

				        <main className="col-sm-9 ml-sm-auto col-md-10 p-0 main" role="main">
								<div className="page-header">
									<div className="container">
										<div className="row">
											<div className="col-6 header__title"><h1 className="title">Users</h1></div>
										</div>
									</div>
								</div>
								<div className={this.props.status == "update_success" ? 'page-msg has-success' : 'page-msg'}>
									<div className="container">
										<div className="row">
											{this.props.status == "update_success" && <div className="message col-12"><i className="fa fa-thumbs-up" aria-hidden="true"></i> Successfully updated user.</div>}
										</div>
									</div>
								</div>
								<div className="page-body p-5">
									<div className="container">
										<div className="row">
											<form className="form card col-md-12" onSubmit={(e)=> this.submitForm(e, this.props.type)}>
										    <div className="card-header">
										        <h5>{this.props.type == "EDIT" ? 'Editing' : 'Creating'} User</h5>
										    </div>
										    <div className="card-block">
												<div className="form-group row">
													<div className="col-sm-6">
														<Form onSubmit={ 
															(values) => {
																console.log('test');
														}}>
														    {({submitForm}) => {
														      return (
														        <form onSubmit={submitForm}>
														          <Text field='name' />
														          <button type='submit'>Submit</button>
														        </form>
														      )
														    }}
														</Form>
													    <label>First Name</label>
													    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="First name" value={this.state.first_name} onChange={this.handleInputChange} />
													  	{this.props.errors && <small className="form-control-feedback">{this.props.errors.first_name}</small>}
													</div>
													<div className="col-sm-6">
													    <label>Last Name</label>
													    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Last name" value={this.state.last_name} onChange={this.handleInputChange} />
													  	{this.props.errors && <small className="form-control-feedback">{this.props.errors.last_name}</small>}
													</div>
												</div>
												<div className="form-group row">
												  	<div className="col-sm-12">
													    <label>Email address</label>
													    <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} autoComplete="off" />
													  	{this.props.errors && <small className="form-control-feedback">{this.props.errors.email}</small>}
													</div>
												</div>
												<div className="form-group row">
													<div className="col-sm-12">
												    	<label>Password</label>
												    	<input type="password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} autoComplete="off" />
												  		{this.props.errors && <small className="form-control-feedback">{this.props.errors.password}</small>}
												  	</div>
												</div>
												<div className="form-group row">
													<div className="col-sm-12">
													    <label>Role</label>
													    <select className="form-control" id="role">
													      	<option value="administrator">Administrator</option>
													    	<option value="member">Member</option>
													    </select>
													</div>
												</div>
										    </div>										      
										    <div className="card-footer">
										        <button type="submit" className="btn btn-primary">Save changes</button>
										        <a href="#" onClick={()=>this.props.history.goBack()} className="btn btn-secondary">Close</a>
											</div>
										  </form>
									</div>
								</div>
							</div>
				        </main>
			        </div>
			</div>
		)
	}
}
