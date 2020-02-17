import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
    render() {
        return (
            <div className="signin-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2>Sign Up</h2>
                    <p className="hint-text">Sign Up with your social media account</p>
                    <div className="social-btn text-center">
                        <a href="#" className="btn btn-primary btn-lg" title="Facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="btn btn-info btn-lg" title="Twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="btn btn-danger btn-lg" title="Google"><i className="fa fa-google"></i></a>
                    </div>
                    <div className="or-seperator"><b>or</b></div>
                    <div className="form-group">
        	<input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" />
        </div>
		<div className="form-group">
        	<input type="email" className="form-control input-lg" name="email" placeholder="Email Address" required="required" />
        </div>
		<div className="form-group">
            <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" />
        </div>
		<div className="form-group">
            <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required" />
        </div>  
        <div className="form-group">
            <button type="submit" className="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
        </div>
                </form>
                <div className="text-center">Already have an account?<Link to="/signin">Sign in</Link></div>
            </div>
        )
    }
}
