import React from 'react';
import Form from '../components/Form.js';
import Header from '../components/Header.js';
import SocialButton from '../components/Social-login.js';
import '../styles/card.css';
import '../styles/media_queries.css';
import ImagePane from '../components/Image-pane.js';

const Main = () => {
  return (
    <div className="container">
    <div className="card">
	    <div className="row">

	    	<div className="col-md-6">
		      <div className="card__content">
		   	  <Header />
		   	  <SocialButton />
		      <Form />
		      </div>
		     </div>

		     <div className="col-md-6">
		      <div>
		      <ImagePane />
		      </div>
		     </div>
	      </div>
    </div> 
    </div>
  )
}

export default Main;