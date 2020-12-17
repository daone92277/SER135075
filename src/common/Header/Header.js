import React, { Component } from "react";


export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){

        const AppName = "Srd Integration";
        const HomeUrl = window.location.href;

        
        return(
            // <!-- header start -->
                
                <div id="header">
                    <div className="white_bg no-padding">
                        <nav className="navbar navbar-default custom_nav">
                            <div className="container-fluid">
                                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                                <div>
                                    <ul className="nav navbar-nav navbar-left logo-nav">
                                        <li>
                                            <a className="navbar-brand" href={HomeUrl}>
                                                <img alt="Broadridge Financial Solutions Inc." src="images/logo.png" className="logo left"/>
                                            </a>
                                            <span className="logo_text">{AppName}</span>
                                        </li>
                                    </ul>
                                </div>
        
                                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                                <div id="header-util-nav" className="collapse navbar-collapse first-collapse">
                                    <ul role="navigation" className="nav yamm navbar-nav navbar-right utility_nav">
                                                                   
                                        <li className="dropdown block">
                                            <a href="#page">
                                                <span className="icn-bdr utility-text">Logout<i className="nc-icon-glyph media-1_button-power" title="Logout"></i></span>
                                            </a>
                                        </li>
                                      </ul>
                                </div>
                                {/* <!-- /.navbar-collapse --> */}
                            </div>
                            {/* <!-- /.container-fluid --> */}
                        </nav>
                    </div>
                </div>
                
             
            
        );
    }
}