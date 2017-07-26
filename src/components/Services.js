import React from 'react';
import Footer from './Footer.js';
import aboutImg from '../images/about-img.png';
import {Image} from 'react-bootstrap';


class Services extends React.Component{
	render(){
		return(
			<div>
				<div className="container">
				    <div className="row">
				        <div className="col-lg-12">
				            <h1 className="page-header">Services
				            </h1>
				        </div>
				    </div>
				    <div className="row">
				        <div className="col-md-7">
				            <a href="#">
				                <img className="img-responsive" src="http://placehold.it/700x300" alt=""></img>
				            </a>
				        </div>
				        <div className="col-md-5">
				            <h3>Wholesale in North America</h3>
				            <h4>Subheading</h4>
				            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
				        </div>
				    </div>

				    <hr/>

				    <div className="row">
				        <div className="col-md-7">
				            <a href="#">
				                <img className="img-responsive" src="http://placehold.it/700x300" alt=""></img>
				            </a>
				        </div>
				        <div className="col-md-5">
				            <h3>Wholesale in South America</h3>
				            <h4>Subheading</h4>
				            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
				        </div>
				    </div>

				    <hr/>

				    <div className="row">
				        <div className="col-md-7">
				            <a href="#">
				                <img className="img-responsive" src="http://placehold.it/700x300" alt=""></img>
				            </a>
				        </div>
				        <div className="col-md-5">
				            <h3>Wholesale in Central America</h3>
				            <h4>Subheading</h4>
				            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus, dolores, at, praesentium ut unde repudiandae voluptatum sit ab debitis suscipit fugiat natus velit excepturi amet commodi deleniti alias possimus!</p>
				        </div>
				    </div>

				    <hr/>

				    <div className="row">

				        <div className="col-md-7">
				            <a href="#">
				                <img className="img-responsive" src="http://placehold.it/700x300" alt=""></img>
				            </a>
				        </div>
				        <div className="col-md-5">
				            <h3>Technical Services</h3>
				            <h4>Subheading</h4>
				            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quidem, consectetur, officia rem officiis illum aliquam perspiciatis aspernatur quod modi hic nemo qui soluta aut eius fugit quam in suscipit?</p>
				        </div>
				    </div>

				    <hr/>
				</div>
			    <Footer/>
		    </div>

		);
	}
}

export default Services;