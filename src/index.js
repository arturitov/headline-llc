import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Brands from './components/Brands';
import registerServiceWorker from './registerServiceWorker';

import {HashRouter, Route, Link, Router} from 'react-router-dom';

ReactDOM.render((
  <Provider store={store}>
  <HashRouter>
      <div>
	  	<Route path="/" component={App} />
		<Route exact path="/" component={Home} />   
	  	<Route path="/about" component={About} />
	  	<Route path="/products" component={Products} />
	  	<Route path="/contact" component={Contact} />
	  	<Route path="/portfolio" component={Portfolio} />
	  	<Route path="/services" component={Services} />
	  	<Route path="/brands" component={Brands} />
	  </div>
  </HashRouter>
  </Provider>
), document.getElementById('root'));

