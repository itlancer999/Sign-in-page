import React from 'react';
import '../styles/form.css';

const Form = ({ props }) => {
  return (
    <div className="card__form">
      <div className="card__fields">
        <span className="card__form--description">or use your email for registration:</span>
        <input className="card__form--input" placeholder="name" type="input" />
        <input className="card__form--input" placeholder="email" type="email" />
        <input className="card__form--input" placeholder="password" type="password"/>
      </div>

      <div className="card__terms">
        <input className="card__terms--checkbox m-1" type="checkbox" id="terms" /><label name="terms">
        I agree to sign the Terms and Conditions
        </label>
      </div>
      <div className="card__footer">
        <button className="card__button card__button--primary" type="submit" onClick="console.log('Signing up!')">Sign Up</button>
        <button className="card__button card__button--secondary" onClick="console.log('Logging in!')">Log in</button>
      </div>
    </div>
  )
}

export default Form;