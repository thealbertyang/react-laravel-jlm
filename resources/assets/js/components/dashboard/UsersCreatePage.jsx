import React from 'react'
import Sidebar from '../../components/Sidebar'
import Cookies from 'universal-cookie'
import { connect } from "react-redux"
import store from "../../store"
import { modalAddUserToggle, getUsers, submitForm, updateUser, deleteUser, modalEditUserToggle } from '../../actions/usersActions'
import Modal from '../../components/Modal'
import axios from 'axios'
import NavbarDos from '../../components/NavbarDos'

import { Link } from 'react-router-dom'

@connect((store) => {
	return {
		users: store.users.users,
		modalAddUser: store.users.modalAddUser,
		modalEditUser: store.users.modalEditUser,
		status: store.users.status,
		errors: store.users.errors
	}
})
export class UsersCreateEditPage extends React.Component {
	constructor(props){
		super(props);	
		this.state = { first_name: '', last_name: '', email: '', password: '', edit: { id: '', first_name: 'test', last_name: '', email: '', password: '' } };
		this.addUser = this.addUser.bind(this);
		this.editUser = this.editUser.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleEditInputChange = this.handleEditInputChange.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
	} 

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleEditInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			edit: {
				...this.state.edit,
				[name]: value
			},
		});
	}

	componentWillMount(){
		this.props.dispatch(getUsers());    
	}

	deleteUser(id){
		this.props.dispatch(deleteUser(id));
	}

	editUser(id, first_name, last_name, email, password){

		this.setState({
			edit: {
				...this.state.edit,
				id: id,
				first_name: first_name,
				last_name: last_name,
				email: email,
				password: password
			},
		});

		//Is modal add users clicked
		if(!this.props.modalEditUser){
			this.props.dispatch(modalEditUserToggle(true));
		}
		else {
			this.props.dispatch(modalEditUserToggle(false));
		}
	}

	addUser(){
		//Is modal add users clicked
		if(!this.props.modalAddUser){
			this.props.dispatch(modalAddUserToggle(true));
		}
		else {
			this.props.dispatch(modalAddUserToggle(false));
		}
	}

	submitForm(e, type){
		
		switch(type) {
			case 'ADD': {
				this.props.dispatch(submitForm(this.state.first_name, this.state.last_name, this.state.email, this.state.password));
			}
			case 'EDIT': {
				this.props.dispatch(updateUser(this.state.edit.id, this.state.edit.first_name, this.state.edit.last_name, this.state.edit.email, this.state.edit.password));
			}
		}
		e.preventDefault();
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
								<div className="page-body p-5">
									<div className="container">
										<div className="row">
											<form className="form card col-md-12" onSubmit={(e)=> this.submitForm(e, 'ADD')}>
										    <div className="card-header">
										        <h5>{this.props.type == "EDIT" ? 'Editing' : 'Creating'} User</h5>
										    </div>
										    <div className="card-block">
													  <div className="form-group row">
														  <div className="col-sm-6">
														    <label>First Name</label>
														    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="First name" value={this.state.first_name} onChange={this.handleInputChange} />
														  	{this.props.errors && <small className="form-control-feedback">{this.props.errors.first_name}</small>}
														  </div>
														  <div className="col-sm-6">
														    <label>Last Name</label>
														    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Last name" value={this.state.last_name} onChange={this.handleInputChange} />
														  
														  </div>
													  </div>
													  <div className="form-group">
													    <label>Email address</label>
													    <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} />
													  </div>
													  <div className="form-group">
													    <label>Password</label>
													    <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
													  </div>
													  <div className="form-group">
													    <label>Role</label>
													    <select className="form-control" id="role">
													      <option value="administrator">Administrator</option>
													      <option value="member">Member</option>
													    </select>
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
