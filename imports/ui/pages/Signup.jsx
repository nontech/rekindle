import React, { Component } from 'react';
import AccountsUIWrapper from '../AccountsUIWrapper';
import { Redirect, withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base'
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';


import schema from '../../api/signupformschema.js';

import {
    AutoField,
    AutoForm,
    ErrorsField,
    SubmitField
  } from 'uniforms-semantic';



class Signup extends Component {
    
    componentDidMount() {
        this.props.hideNavigation();
    }

    componentWillUnmount() {
        this.props.unhideNavigation();
       
    }

    handleSubmit(data){
      
        Accounts.createUser(data);
    }

    render(){

        if (!!this.props.User === true && !!this.props.User.profile.didOnboarding === false){
            return(
                <Redirect to="/createProfile/1" />
            )
            
        } else if (!!this.props.User === true){
            return(
                <Redirect to="/" />
            )
        
        
            }else {
            //console.log(this.props.User)
            return(
                <div className="login-page-container">

                    <div className="content-container">
                        <h2 className="login-logo">Rekindle</h2>
                        <div className="slogan">Exchange books with your friends</div>
                        <div className="slogan2">List your own books now!</div>
                       
{/*                        
                        <div className="login-link-container">
                            <div className="login-link">  <AccountsUIWrapper/> </div>
                        </div>
                        */}

                        <div className="signup-form-container">

                            <AutoForm ref={'ref'} schema={schema} onSubmit={data => this.handleSubmit(data)} >
                                {/* <h4></h4> */}

                                <AutoField name="email" placeholder='Email address' ref="email" />
                                {/* <AutoField name="firstname" placeholder='First name'/> 
                                <AutoField name="lastname" placeholder='Last name'/> 
                                 */}
                                <AutoField name="password" placeholder='Create a password' ref="password" />

                                {/* <AutoField name="repassword" placeholder='reenter your password' ref="repassword" /> */}
                                {/* <ErrorsField name="repassword">
                                    <span>Passwords don't match</span>
                                </ErrorsField> */}

                                <SubmitField  className="button" color="black" value="Get in there!" />
                            </AutoForm>

                            <div className="Signup-form-subline-switch-container">
                             Already have a Rekindle account?    
                             <NavLink activeClassName="nav-home-btn-active" className="nav-home-btn" exact to='/login'>Log in</NavLink>   
                            </div>
                        </div>


                       
                        <div className="subline">For CodeUniversity people only</div>

                    </div>
                </div>
                
            )
        }
    
    }

}


export default Signup;