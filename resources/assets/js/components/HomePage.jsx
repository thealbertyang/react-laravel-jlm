import React from 'react';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import { Footer } from "./Footer";
import NavbarDos from '../components/NavbarDos'

export class HomePage extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		console.log(this.props)
		return (

			<div>			
			<NavbarDos/>
				<section className="hero hero__main">
					<div className="container">
						<div className="hero__header">
							<h1 className="hero__title">Hello, I'm a web developer.</h1>
							<h2 className="hero__subtitle">Sign up to get access to free tutorials about React, and Laravel!</h2>
							<span className="hero__links">
								<a href="#" className="hero__button btn btn-primary">Learn More</a>
								<a href="#" className="hero__button btn btn-primary">Sign Up</a>
							</span>
						</div>
					</div>
				</section>
				<section className="projects content">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h1 className="text-center">Latest News</h1>
							</div>
						</div>
						<div className="row mt-4">
							<div className="col-4">
								<div className="card">
								  <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: '180px', width: '100%', display: 'block'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e16086a67%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e16086a67%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22118.0859375%22%20y%3D%2297.2%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
								  <div className="card-block">
								    <h4 className="card-title">Card title</h4>
								    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								    <a href="#" className="btn btn-primary">Go somewhere</a>
								  </div>
								</div>
							</div>
							<div className="col-4">
								<div className="card">
								  <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: '180px', width: '100%', display: 'block'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e16086a67%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e16086a67%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22118.0859375%22%20y%3D%2297.2%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
								  <div className="card-block">
								    <h4 className="card-title">Card title</h4>
								    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								    <a href="#" className="btn btn-primary">Go somewhere</a>
								  </div>
								</div>
							</div>
							<div className="col-4">
								<div className="card">
								  <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: '180px', width: '100%', display: 'block'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e16086a67%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e16086a67%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22118.0859375%22%20y%3D%2297.2%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
								  <div className="card-block">
								    <h4 className="card-title">Card title</h4>
								    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								    <a href="#" className="btn btn-primary">Go somewhere</a>
								  </div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="projects content">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h1 className="text-center">Projects</h1>
							</div>
						</div>
						<div className="row mt-4">
							<div className="col-4">
								<div className="card">
								  <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: '180px', width: '100%', display: 'block'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e16086a67%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e16086a67%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22118.0859375%22%20y%3D%2297.2%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
								  <div className="card-block">
								    <h4 className="card-title">Card title</h4>
								    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								    <a href="#" className="btn btn-primary">Go somewhere</a>
								  </div>
								</div>
							</div>
							<div className="col-4">
								<div className="card">
								  <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: '180px', width: '100%', display: 'block'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e16086a67%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e16086a67%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22118.0859375%22%20y%3D%2297.2%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
								  <div className="card-block">
								    <h4 className="card-title">Card title</h4>
								    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								    <a href="#" className="btn btn-primary">Go somewhere</a>
								  </div>
								</div>
							</div>
							<div className="col-4">
								<div className="card">
								  <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" style={{height: '180px', width: '100%', display: 'block'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e16086a67%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e16086a67%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22118.0859375%22%20y%3D%2297.2%22%3E318x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
								  <div className="card-block">
								    <h4 className="card-title">Card title</h4>
								    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								    <a href="#" className="btn btn-primary">Go somewhere</a>
								  </div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}