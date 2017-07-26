import React from 'react';
import Footer from './Footer.js';
import luis from '../images/luis-chacin.jpg';
import {Image} from 'react-bootstrap';
import generator from '../images/products/generator.jpg';
import transformer from '../images/products/transformer.jpg';
import equipment from '../images/products/equipment.jpg';
import {LinkContainer} from 'react-router-bootstrap';



class Products extends React.Component{
	render(){
		return(
			<div className="container">


		        <div className="row" style={{marginTop:"25px"}}>

		            <div className="col-md-12">
		                <div className="row">

		                    <div className="col-sm-4 col-lg-4 col-md-4">
		                        <div className="thumbnail">
		                            <img src={generator} alt=""></img>
		                            <div className="caption">
		                                <h4 className="pull-right">$</h4>
		                                <h4>Duracell Model #DG66M-B62 Generator
		                                </h4>
		                                <p>Produces 7,800 Watts of surge capacity and 6,500 Watts of continuous generation. The unit is electric start and there is a 12 volt charging to recharge the battery.</p>
		                            </div>
		                        </div>
		                    </div>

		                    <div className="col-sm-4 col-lg-4 col-md-4">
		                        <div className="thumbnail">
		                            <img src={transformer} alt=""></img>
		                            <div className="caption">
		                                <h4 className="pull-right">$</h4>
		                                <h4>Series APT AC Power Transformers</h4>
		                                <p>The SERIES APT AC Power Transformers provide isolated step-down to 24 VAC with models offering VA ratings of 20, 40, 50, 75, 96, or 150 VA’s. These cost efficient transformers are offered in single or dual 1/2 NPT threaded hub </p>
		                            </div>
		                        </div>
		                    </div>

		                    <div className="col-sm-4 col-lg-4 col-md-4">
		                        <div className="thumbnail">
		                            <img src={equipment} alt=""></img>
		                            <div className="caption">
		                                <h4 className="pull-right">$</h4>
		                                <h4>Honeywell Arc Flash Protection Clothing Kit
		                                </h4>
		                                <p>These garment kits provide head, face and body protection for head-to-ankle coverage against electrical hazards.</p>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="row">


		                    <div className="col-sm-4 col-lg-4 col-md-4">
		                        <div className="thumbnail">
		                            <img src={equipment} alt=""></img>
		                            <div className="caption">
		                                <h4 className="pull-right">$</h4>
		                                <h4>Honeywell Arc Flash Protection Clothing Kit
		                                </h4>
		                                <p>These garment kits provide head, face and body protection for head-to-ankle coverage against electrical hazards.</p>
		                            </div>
		                        </div>
		                    </div>

		                    <div className="col-sm-4 col-lg-4 col-md-4">
		                        <div className="thumbnail">
		                            <img src={equipment} alt=""></img>
		                            <div className="caption">
		                                <h4 className="pull-right">$</h4>
		                                <h4>Honeywell Arc Flash Protection Clothing Kit
		                                </h4>
		                                <p>These garment kits provide head, face and body protection for head-to-ankle coverage against electrical hazards.</p>
		                            </div>
		                        </div>
		                    </div>

		                </div>

		            </div>

		        </div>
		        <Footer/>

		    </div>
		);
	}
}

export default Products;