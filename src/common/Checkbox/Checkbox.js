import React, { Component } from "react";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const disable = this.props.disable
    //mdc-checkbox--disabled
      const className = disable ? "mdc-checkbox mdc-checkbox--disabled" : "mdc-checkbox"
      return( <div className="mdc-form-field">
      <div className={className}>
        <input
          type="checkbox"
          className={"mdc-checkbox__native-control js-option"}
          id={this.props.id}
          disabled={disable ? true : false}
          data-group={this.props.dataGroup}
          aria-label={this.props.aria}
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark"></div>
        </div>
        <div className="mdc-checkbox__ripple"></div>
      </div>
      <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
    </div>)
    

    
  }
}
