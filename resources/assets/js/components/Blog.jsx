import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import { Footer } from "./Footer";

export class BlogPage extends React.Component {
	render(){
		return (
			<div>
				<section className="hero hero__main">
					<div className="container">
						<div className="hero__header">
							<h1 className="hero__title">Learn web development.</h1>
							<h2 className="hero__subtitle">Get regular updates !</h2>
							<span className="hero__links">
								<a href="#" className="hero__button btn btn-primary">Learn More</a>
								<a href="#" className="hero__button btn btn-primary">Sign Up</a>
							</span>
						</div>
					</div>
				</section>
				<section className="hero hero__blog">
					<div className="container">
						<div className="blog__header">
							<div className="blog__header--left">
								<span style={{backgroundImage: "url('https://thealbertyang.com/img/bg-contemporary.jpg')"}} className="blog__avatar"></span> 
							</div>
							<div className="blog__header--right">

								<h1 className="blog__title">React Tutorials</h1>
								<span>
									<h5 className="blog__date">Aug, 31, 2017</h5>
									<h5 className="blog__views"><i className="fa fa-eye"></i> 302</h5>
								</span>
								<h5 className="blog__author">by Albert Yang</h5>

							</div>
						</div>
					</div>
				</section>
				<section className="hero hero--bg-white">
					<div className="container">
						<div className="hero__header blog">
							<div className="blog__header--left">
								<span style={{backgroundImage: "url('https://thealbertyang.com/img/bg-contemporary.jpg')"}} className="blog__avatar"></span> 
							</div>
							<div className="blog__header--right">

								<h1 className="blog__title">React Tutorials</h1>
								<span>
									<h5 className="blog__date">Aug, 31, 2017</h5>
									<h5 className="blog__views"><i className="fa fa-eye"></i> 302</h5>
								</span>
								<h5 className="blog__author">by Albert Yang</h5>

							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}