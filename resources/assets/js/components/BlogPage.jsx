import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import { Footer } from "./Footer";
import NavbarDos from '../components/NavbarDos'

export class BlogPage extends React.Component {
	componentDidMount() {
	}

	render(){
		return (
			<div>
				<NavbarDos/>
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
				<section className="content">
					<div className="container">
						<h2>This is a title</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
						<pre className="line-numbers"><code className="language-javascript">
						{`import { React } from 'react';
						`}
						</code></pre>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}