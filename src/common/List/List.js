import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Data = this.props.Data;

    if (Data != null) {
      const listItems = Data.map(data => (
        <li
          className="mdc-list-item mdc-ripple-upgraded"
          key={data}
          tabIndex="0"
        >
          <span
            className="mdc-list-item__graphic material-icons"
            aria-hidden="true"
          >
            folder
          </span>
          <span className="mdc-list-item__text">
            <span className="mdc-list-item__primary-text">{data}</span>
            <span className="mdc-list-item__secondary-text">9 Jan 2018</span>
          </span>
          <a
            href="#page"
            className="mdc-list-item__meta material-icons"
            aria-label="View more information"
            title="More info"
          >
            info
          </a>
        </li>
      ));

      return (
        <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list">
          {listItems}
        </ul>
      );
    } else {
      return null;
    }
  }
}
