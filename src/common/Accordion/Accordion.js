import React, { Component } from "react";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <button className="card-header br-cyan-overlap text-white mdc-surface-ripple not-collapsed collapsed mdc-ripple-upgraded" data-target="#collapseCard" data-toggle="collapse" aria-expanded="true" aria-controls="collapseCard">
          <h5 className="card-title mb-0 text-light">
            {this.props.title}
            <a
              className="float-right not-collapsed collapsed"
              href="#collapseCard"
              data-toggle="collapse"
              aria-expanded="true"
              aria-controls="collapseCard"
            >
              <span className="sr-only">Open or Close Panel</span>
              <span
                className="pt-1 nc-icon-glyph arrows-1_small-triangle-up text-light"
                aria-hidden="true"
              ></span>
            </a>
          </h5>
        </button>
        <div className="collapse" id="collapseCard">
          <div className="card-body">
            <p className="card-text">{this.props.text}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
