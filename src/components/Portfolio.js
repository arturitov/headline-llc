import React from 'react';
import Footer from './Footer.js';
import aboutImg from '../images/about-img.png';
import {Image} from 'react-bootstrap';


class Portfolio extends React.Component{
	render(){
		return(
			<div>
				<div className="container">
			        <div className="row">
			            <div className="col-lg-12">
			                <h1 className="page-header">Portfolio</h1>
			            </div>
			        </div>
			        <div className="row">
			            <div className="col-md-6 portfolio-item">
		                    <img className="img-responsive" src="http://placehold.it/700x400" alt=""></img>
			                <h3>
			                    <h4>Project One</h4>
			                </h3>
			                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
			            </div>
			            <div className="col-md-6 portfolio-item">
		                    <img className="img-responsive" src="http://placehold.it/700x400" alt=""></img>
			                <h3>
			                    <h4>Project Two</h4>
			                </h3>
			                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
			            </div>
			        </div>
			        <div className="row">
			            <div className="col-md-6 portfolio-item">
		                    <img className="img-responsive" src="http://placehold.it/700x400" alt=""></img>
			                <h3>
			                    <h4>Project Three</h4>
			                </h3>
			                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
			            </div>
			            <div className="col-md-6 portfolio-item">
		                    <img className="img-responsive" src="http://placehold.it/700x400" alt=""></img>
			                <h3>
			                    <h4>Project Four</h4>
			                </h3>
			                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
			            </div>
			        </div>
			        <div className="row">
			            <div className="col-md-6 portfolio-item">
		                    <img className="img-responsive" src="http://placehold.it/700x400" alt=""></img>
			                <h3>
			                    <h4>Project Five</h4>
			                </h3>
			                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
			            </div>
			            <div className="col-md-6 portfolio-item">
		                    <img className="img-responsive" src="http://placehold.it/700x400" alt=""></img>
			                <h3>
			                    <h4>Project Six</h4>
			                </h3>
			                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
			            </div>
			        </div>

			        <hr/>
				</div>
			    <Footer/>
		    </div>

		);
	}
}

export default Portfolio;