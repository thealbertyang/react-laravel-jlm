import React from 'react'
import Sidebar from '../../components/Sidebar'
import Cookies from 'universal-cookie'
import { connect } from "react-redux"
import store from "../../store"
import { modalAddUserToggle, getUsers, submitForm, updateUser, deleteUser, modalEditUserToggle } from '../../actions/usersActions'
import Modal from '../../components/Modal'
import axios from 'axios'
import NavbarDos from '../../components/NavbarDos'

@connect((store) => {
	return {
		users: store.users.users,
		modalAddUser: store.users.modalAddUser,
		modalEditUser: store.users.modalEditUser,
		status: store.users.status,
		errors: store.users.errors
	}
})
export class UsersCreatePage extends React.Component {
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
		e.preventDefault();
		switch(type) {
			case 'ADD': {
				this.props.dispatch(submitForm(this.state.first_name, this.state.last_name, this.state.email, this.state.password));
			}
			case 'EDIT': {
				this.props.dispatch(updateUser(this.state.edit.id, this.state.edit.first_name, this.state.edit.last_name, this.state.edit.email, this.state.edit.password));
			}
		}
	}

	render(){
		return (
			<div className="screen container-fluid">
					<Modal isOpen={this.props.modalAddUser}>
						  <div className="modal-dialog">
						    <div className="modal-content">
						      <div className="modal-header">
						        <h5 className="modal-title">Create User</h5>
						        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.addUser}>
						          <span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <form onSubmit={(e)=> this.submitForm(e, 'ADD')}>
							      <div className="modal-body">
									  <div className="form-group row">
										  <div className="col-sm-6">
										    <label for="first_name">First Name</label>
										    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="First name" value={this.state.first_name} onChange={this.handleInputChange} />
										  	{this.props.errors && <small className="form-control-feedback">{this.props.errors.first_name}</small>}
										  </div>
										  <div className="col-sm-6">
										    <label for="last_name">Last Name</label>
										    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Last name" value={this.state.last_name} onChange={this.handleInputChange} />
										  
										  </div>
									  </div>
									  <div className="form-group">
									    <label for="email">Email address</label>
									    <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} />
									  </div>
									  <div className="form-group">
									    <label for="password">Password</label>
									    <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
									  </div>
									  <div className="form-group">
									    <label for="role">Role</label>
									    <select className="form-control" id="role">
									      <option value="administrator">Administrator</option>
									      <option value="member">Member</option>
									    </select>
									  </div>
							      </div>
							      <div className="modal-footer">
							        <button type="submit" className="btn btn-primary">Save changes</button>
							        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.addUser}>Close</button>
							      </div>
							     </form>
						    </div>
						  </div>
					</Modal>
					<Modal isOpen={this.props.modalEditUser} >
						  <div className="modal-dialog">
						    <div className="modal-content">
						      <div className="modal-header">
						        <h5 className="modal-title">Edit User</h5>
						        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.editUser}>
						          <span aria-hidden="true">&times;</span>
						        </button>
						      </div>
						      <form onSubmit={(e)=> this.submitForm(e, 'EDIT')}>
							      <div className="modal-body">
									  <div className="form-group row">
										  <div className="col-sm-6">
										    <label for="first_name">First Name</label>
										    <input type="text" className="form-control" name="first_name" id="first_name" placeholder="First name" value={this.state.edit.first_name} onChange={this.handleEditInputChange} />
										  	{this.props.errors && <small className="form-control-feedback">{this.props.errors.first_name}</small>}
										  </div>
										  <div className="col-sm-6">
										    <label for="last_name">Last Name</label>
										    <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Last name" value={this.state.edit.last_name} onChange={this.handleEditInputChange} />
										  
										  </div>
									  </div>
									  <div className="form-group">
									    <label for="email">Email address</label>
									    <input type="email" className="form-control" name="email" id="email" placeholder="Enter email" value={this.state.edit.email} onChange={this.handleEditInputChange} />
									  </div>
									  <div className="form-group">
									    <label for="password">Password</label>
									    <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.edit.password} onChange={this.handleEditInputChange} />
									  </div>
									  <div className="form-group">
									    <label for="role">Role</label>
									    <select className="form-control" id="role">
									      <option value="administrator">Administrator</option>
									      <option value="member">Member</option>
									    </select>
									  </div>
							      </div>
							      <div className="modal-footer">
							        <button type="submit" className="btn btn-primary">Save changes</button>
							        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.editUser}>Close</button>
							      </div>
							     </form>
						    </div>
						  </div>
					</Modal>
			      	<div className="row">
				        <Sidebar/>

				        <main className="col-sm-9 ml-sm-auto col-md-10 pt-3 main" role="main">
						<h1>Users</h1>
						<div className="row">
							<div className="col-6"></div>
							<div className="col-6 d-flex justify-content-end"><a href="#" className="btn btn-primary" onClick={this.addUser}>Add Users</a></div>
						</div>
				          <div className="table-responsive mt-3">
				            <table className="table table-striped">
				              <thead>
				                <tr>
				                  <th>#</th>
				                  <th>First Name</th>
				                  <th>Last Name</th>
				                  <th>Email</th>
				                  <th>Created</th>
				                  <th>Actions</th>
				                </tr>
				              </thead>
				              <tbody>
				                { this.props.users && this.props.users.map((user)=> (
									<tr key={user.id}>
						                  <td>{user.id}</td>
						                  <td>{user.first_name}</td>
						                  <td>{user.last_name}</td>
						                  <td>{user.email}</td>
						                  <td>{user.created_at}</td>
						                  <td><a href="#" onClick={() => this.deleteUser(user.id)}><i className="fa fa-trash"></i></a> <a href="#" onClick={() => this.editUser(user.id, user.first_name, user.last_name, user.email)}><i className="fa fa-pencil"></i></a></td>
									 </tr>
								)) }
				              </tbody>
				            </table>
				          </div>
				        </main>
			        </div>
			</div>
		)
	}
}
