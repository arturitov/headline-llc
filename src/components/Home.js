import React from 'react';
import './App.css';
import banner from '../images/banner.png';
import homeImg from '../images/home-img.png';
import { Row, Image} from 'react-bootstrap';
import Footer from './Footer.js';
import {LinkContainer} from 'react-router-bootstrap';




class Home extends React.Component{
	render(){
		return (
			<div>
				<header>
					<Row id="banner-wrapper"className="show-grid">
					  <Image responsive id="banner" src={banner} alt="Banner" responsive />
				    </Row>
			    </header>
			    <div className="container">
			    <div className="row">
		            <div className="col-lg-12">
		                <h2 className="page-header">Headline LLC</h2>
		            </div>
		            <div className="col-md-6">
		                <p>Headline LLC specializes in the electric industry</p>
		                <ul>
		                    <li>We offer<strong> wholesale</strong> products to produce electricity
		                    </li>
		                    <ul>
			                    <li>Generators</li>
			                    <li>Safety Equipment</li>
			                    <li>Transformers</li>
			                    <li>Receptors</li>
			                    <li>Electric Plant Equipments</li>
		                    </ul>
		                </ul>
		                <p>We strive to provide you with quality products and excellent custumer service. If you have any questions please do not hesitate to <LinkContainer to="/contact"><a>contact us</a></LinkContainer>.</p>
		            </div>
		            <div className="col-md-6">
		                <Image responsive src={homeImg} alt=""/>
		            </div>
		        </div>
		        <Footer/>
		        </div>
			</div>

		);
	}
}

export default Home;