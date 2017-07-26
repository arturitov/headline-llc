import React from 'react';
import Footer from './Footer.js';
import {Image} from 'react-bootstrap';

class Contact extends React.Component{
	render(){
		return(
			<div className="container">
		        <div className="row">
		            <div className="col-md-8">
		                <iframe width="100%" height="400px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=25.732538,-80.316791&amp;spn=56.506174,79.013672&amp;t=m&amp;z=18&amp;output=embed"></iframe>
		            </div>
		            <div className="col-md-4">
		                <h3>Contact Details</h3>
		                <p>
		                    7480 Bird Rd<br/>Maimi, FL 33155<br/>
		                </p>
		                <p><i className="fa fa-phone"></i> 
		                    <abbr title="Phone">P</abbr>: (999) 999-9999</p>
		                <p><i className="fa fa-envelope-o"></i> 
		                    <abbr title="Email">E</abbr>: <a href="mailto:info@headlinellc.com">info@headlinellc.com</a>
		                </p>
		                <p><i className="fa fa-clock-o"></i> 
		                    <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM</p>
		                
		            </div>
		        </div>

		        <div className="row">
		            <div className="col-md-8">
		                <h3>Send us a Message</h3>
		                <form name="sentMessage" id="contactForm" noValidate>
		                    <div className="control-group form-group">
		                        <div className="controls">
		                            <label>Full Name:</label>
		                            <input type="text" className="form-control" id="name"/>
		                            <p className="help-block"></p>
		                        </div>
		                    </div>
		                    <div className="control-group form-group">
		                        <div className="controls">
		                            <label>Phone Number:</label>
		                            <input type="tel" className="form-control" id="phone" />
		                        </div>
		                    </div>
		                    <div className="control-group form-group">
		                        <div className="controls">
		                            <label>Email Address:</label>
		                            <input type="email" className="form-control" id="email" />
		                        </div>
		                    </div>
		                    <div className="control-group form-group">
		                        <div className="controls">
		                            <label>Message:</label>
		                            <textarea rows="10" cols="100" className="form-control" id="message"  maxLength="999" style={{resize:"none"}}></textarea>
		                        </div>
		                    </div>
		                    <div id="success"></div>
		                    <button type="submit" className="btn btn-primary">Send Message</button>
		                </form>
		            </div>

		        </div>

		        <Footer/>
		    </div>
		);
	}
}

export default Contact;