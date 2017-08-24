import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, NavLink, Link, Switch } from "react-router-dom";

export class Navbar extends React.Component<any, any> {
  constructor(props:any){
    super(props);
    this.state = { messagesCount: this.props.messagesCount };
  }
  render(){
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">TheAlbertYang</a>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to="/home" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto navbar__user">
              <li className="nav-item">
                <a className="nav-link navbar__userlink" href="/"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar__userlink" href="/"><i className="fa fa-user" aria-hidden="true"></i> Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>      
    );
  }
}

