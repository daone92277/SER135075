import React, {Component} from "react";


export default class TextField extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(<div className="mdc-text-field mdc-text-field--outlined">
        <input className={this.props.className + " mdc-text-field__input"} type={this.props.type} id={this.props.id} value={this.props.value}/>
        <div className="mdc-notched-outline">
          <div className="mdc-notched-outline__leading"></div>
          <div className="mdc-notched-outline__notch">
        <label htmlFor="text-field-hero-input" className="mdc-floating-label">{this.props.label}</label>
          </div>
          <div className="mdc-notched-outline__trailing"></div>
        </div>
      </div>);

    }
}