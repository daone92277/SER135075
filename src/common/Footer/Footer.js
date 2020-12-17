import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const AppName = "SRD Integration";

    return (
      // <!--Footer start-->
      <footer role="contentinfo">
        <div className="container-fluid">
          <div className="container no_padding">
            <div className="footerLinks">
              <h1 className="footer_title">{AppName}</h1>
              <ul className="linksFooter" role="navigation">
                <li>
                  <a href="#page">Privacy Statement</a>
                </li>
                <li>
                  <a href="#page">Terms and Conditions</a>
                </li>
              </ul>
            </div>
            <div className="copyRight">
              &copy; 2020 Broadridge Financial Solutions, Inc. All Rights
              Reserved.
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </footer>
      // <!--FooterEnds-->
    );
  }
}
