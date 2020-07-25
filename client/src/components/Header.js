import React, { Component } from 'react';
class Header extends Component{
   render(){
      return(
        <div className="site-header">
        <div className="container">
            <a href="index.html" className="branding">
                <img src={require("./images/logo.png")} alt="" className="logo"></img>
                <div className="logo-type">
                    {/*<img src={require("./images/logo (2).png")} className="logo"></img>*/}
                    <h2 className="logo">CURRENT WEATHER</h2>
                    <small className="site-description">tagline goes here</small>
                </div>
            </a>
        </div>
    </div>
      );
   }
}
export default Header;