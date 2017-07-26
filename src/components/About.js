import React from 'react';
import Footer from './Footer.js';
import aboutImg from '../images/about-img.png';
import {Image} from 'react-bootstrap';


class About extends React.Component{
	render(){
		return(
			<div className="container">
		        <div className="row">
		            <div className="col-lg-12">
		                <h1 className="page-header">About</h1>
		            </div>
		        </div>
		        <div className="row">
		            <div className="col-md-6">
		                <img className="img-responsive" src={aboutImg} alt=""></img>
		            </div>
		            <div className="col-md-6">
		                <h2>About Healine LLC</h2>
		                <p>We are a company that started in 2012 with more than 5 years of experience specializing in the electric industry in the Central and South American regions. We provide wholesale products, consulting services, product instalations, and product training.</p>
		                <p>As experts in our field we will work with you to derive a solution to any problem you may have.</p>
		               	<p>You can trust that all the products we offer are top of the line and ready to meet your needs. We also offer ecexelent on-site and virtual services to answer any of your questions.</p>
		            </div>
		        </div>
			    <Footer/>
		    </div>

		);
	}
}

export default About;