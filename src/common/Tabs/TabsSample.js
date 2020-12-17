import React, {Component} from "react";


export default class TabsSample extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return( 
            // <!-- Tabs -->
            <div className="row">
                <div className="scrollspy-item">
                    <div className="scrollspy-content">
                        <div className="row">
                        {/*  */}
                        <div className="row">
                                {/* <!--Bootstrap Tabs --> */}
                                <div className="row bs-tabs">
                                    <div className="col-md-6">
                                        <h5>Tabs with background color and rounded corners</h5>
                                        <ul className="nav nav-tabs br-round-tabs">
                                            <li className="nav-item active"> <a className="nav-link" data-toggle="tab" href="#home2">Home</a> </li>
                                            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu12">Menu 1</a> </li>
                                            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu22">Menu 2</a> </li>
                                            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu32">Menu 3</a> </li>
                                            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu42">Menu 4</a> </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane container active" id="home2">Home content</div>
                                            <div className="tab-pane container fade" id="menu12">Menu 1 Content</div>
                                            <div className="tab-pane container fade" id="menu22">Menu 2 Content</div>
                                            <div className="tab-pane container fade" id="menu32">Menu 3 Content</div>
                                            <div className="tab-pane container fade" id="menu42">Menu 4 Content</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <h5>Tabs with background color</h5>
                                        <ul className="nav nav-tabs br-solid-tabs">
                                            <li className="nav-item active"> <a className="nav-link" data-toggle="tab" href="#home">Home</a> </li>
                                            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu1">Menu 1</a> </li>
                                            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu2">Menu 2</a> </li>
                                            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu3">Menu 3</a> </li>
                                            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu4">Menu 4</a> </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane container active" id="home">Home Content</div>
                                            <div className="tab-pane container fade" id="menu1">Menu 1 Content</div>
                                            <div className="tab-pane container fade" id="menu2">Menu 2 Content</div>
                                            <div className="tab-pane container fade" id="menu3">Menu 3 Content</div>
                                            <div className="tab-pane container fade" id="menu4">Menu 4 Content</div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Material Tabs --> */}
                                <div className="col-md-12">
                                    <h5>Simple tabs</h5>
                                    <div className="mdc-tabs-selector" role="tablist">
                                        <div className="mdc-tab-scroller">
                                            <div className="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll" >
                                                <div className="mdc-tab-scroller__scroll-content">
                                                    <ul className="nav nav-tabs w-100 flex-nowrap">
                                                        <li className="w-100">
                                                            <a className="mdc-tab mdc-tab--active mdc-link" role="tab" aria-selected="true" data-toggle="tab" href="#original-tab-one" id="mdc-tab-1">
                                                                <span className="mdc-tab__content">
                                                                    <span className="mdc-tab__text-label">Item One</span>
                                                                </span>
                                                                <span className="mdc-tab-indicator mdc-tab-indicator--active">
                                                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                                                </span>
                                                                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
                                                            </a>
                                                        </li>
                                                        <li className="w-100">
                                                            <a className="mdc-tab mdc-link" role="tab" aria-selected="true" data-toggle="tab" href="#original-tab-two" id="mdc-tab-2">
                                                                <span className="mdc-tab__content">
                                                                    <span className="mdc-tab__text-label">Item Two</span>
                                                                </span>
                                                                <span className="mdc-tab-indicator">
                                                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                                                </span>
                                                                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
                                                            </a>
                                                        </li>
                                                        <li className="w-100">
                                                            <a className="mdc-tab mdc-link" role="tab" aria-selected="true" data-toggle="tab" href="#original-tab-three" id="mdc-tab-3">
                                                                <span className="mdc-tab__content">
                                                                    <span className="mdc-tab__text-label">Item Three</span>
                                                                </span>
                                                                <span className="mdc-tab-indicator">
                                                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                                                </span>
                                                                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
                                                            </a>
                                                        </li>
                                                        <li className="w-100">
                                                            <a className="mdc-tab mdc-link" role="tab" aria-selected="true" data-toggle="tab" href="#original-tab-four" id="mdc-tab-4">
                                                                <span className="mdc-tab__content">
                                                                    <span className="mdc-tab__text-label">Item Four</span>
                                                                </span>
                                                                <span className="mdc-tab-indicator">
                                                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                                                </span>
                                                                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
                                                            </a>
                                                        </li>
                                                        <li className="w-100">
                                                            <a className="mdc-tab mdc-link" role="tab" aria-selected="true" data-toggle="tab" href="#original-tab-five" id="mdc-tab-5">
                                                                <span className="mdc-tab__content">
                                                                    <span className="mdc-tab__text-label">Item Five</span>
                                                                </span>
                                                                <span className="mdc-tab-indicator">
                                                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                                                </span>
                                                                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div id="original-tab-one" className="container tab-pane active">
                                            Item One Content
                                        </div>
                                        <div id="original-tab-two" className="container tab-pane fade">
                                            Item Two Content
                                        </div>
                                        <div id="original-tab-three" className="container tab-pane fade">
                                            Item Three Content
                                        </div>
                                        <div id="original-tab-four" className="container tab-pane fade">
                                            Item Four Content
                                        </div>
                                        <div id="original-tab-five" className="container tab-pane fade">
                                            Item Five Content
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/*  */}
                        </div>
                    </div>
                </div>
            </div>)
    }
}