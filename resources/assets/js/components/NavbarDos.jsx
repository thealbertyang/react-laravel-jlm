import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, NavLink, Link, Switch, withRouter } from "react-router-dom";
import { loggedIn, login, logout } from '../actions/authActions'
import { menuActivate } from '../actions/menuActions'

import { connect } from "react-redux"
import store from "../store"
@connect(
  (store) => { 
  return {
    authenticated: store.auth.authenticated,
    username: store.auth.username
  }
})
export class Navbar extends React.Component {
  static contextTypes = {
      router: React.PropTypes.object,
      location: React.PropTypes.object
  }
  constructor(props){
    super(props);
     this.state = { messagesCount: this.props.messagesCount, userDropdown: 'inactive' };
    this.logout = this.logout.bind(this);
    this.userDropdownToggle = this.userDropdownToggle.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);           
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidUpdate(){
    //console.log("Navbar did update");
    /*console.log(this.context.router.history.location.pathname);
    console.log(this.context.router);
    console.log(this.props);
    console.log(this.props.menu);*/
  }
  componentWillMount(){
  }
  componentDidMount() {
      
      document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
  }


  setWrapperRef(node) {
      this.wrapperRef = node;
  }

  handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          this.userDropdownToggle('inactive');
      }
  }
  userDropdownToggle(status){
      if(status == 'inactive'){
        this.setState({ userDropdown: 'inactive'});
      }
      else {
        (this.state.userDropdown == 'inactive') ? this.setState({ userDropdown: 'active'}) : this.setState({ userDropdown: 'inactive'});
      }
  }

  logout(){
    this.userDropdownToggle();
    console.log('logging out');
    this.props.dispatch(logout());
  }
  render(){
    //console.log('navbar username', this.props.username);
    //console.log('navbar authenticated', this.props.authenticated);

    const userDropdownState = (this.state.userDropdown == 'inactive') ? {display: 'none'} : {display: 'block'};
    const userDropdown = (this.props.authenticated) ? ( 
      <div className="dropdown navbar__user" ref={this.setWrapperRef}>
        <a href= "#" className="btn btn-secondary dropdown-toggle navbar__userlink" aria-haspopup="true" aria-expanded="false" onClick={this.userDropdownToggle}>
          <i className="fa fa-user-circle" aria-hidden="true"></i> {this.props.username}
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={ userDropdownState }>
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#" onClick={this.logout}>Logout</a>
        </div>
      </div>
    ) :
    (
    <ul className="navbar-nav ml-auto navbar__user">
      <li className="nav-item">
        <NavLink to="/login" className="nav-link navbar__userlink"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Login</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link navbar__userlink" href="/"><i className="fa fa-user" aria-hidden="true"></i> Sign Up</a>
      </li>
    </ul>
    );
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
        <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">TheAlbertYang</a>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            </li>
          </ul>
           { userDropdown }
        </div>
      </nav>      
    )
  }
}

function mapStateToProps(state){
  //console.log("state",state);
  return {
    auth: {
      authenticated: state.auth.authenticated,
      username: state.auth.username
    },
    menu: state.menu.pathname
  }
}

export default withRouter(connect(mapStateToProps)(Navbar));
