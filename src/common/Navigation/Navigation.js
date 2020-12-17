import React, { Component } from "react";


export default class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(    
            // <!-- Primary Navigation start -->
            <div className="container-fluid br_blue_background no_padding">
                <div className="container no_padding">
                    <div className="navbar navbar-inverse">
                        <div className="navbar-inner">
                            <div>
                                
                                <div className="navbar-collapse collapse primary_nav">
                                                                     
                                  {/* <!-- search form start--> */}
                                    
                                   <div className="navbar-form navbar-right" role="search">
                                       <div className="headerSearchBox">
                                    <input className="form-control border-gray searchInput" type="text" placeholder="Search" aria-label="header-search"/>
                                    <button className="btn btn-group py-1 px-1 searchButton">
                                        <i className="material-icons">
                                            search
                                        </i>
                                    </button>
                                     </div>
                                    </div>
                                    
                    
                                    {/* <!-- search form end--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            )
    }

}