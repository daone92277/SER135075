import React, {Component} from "react";



export default class Toggle extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const additional_ids = this.props.id
        const checked = this.props.checked

        return(<React.Fragment>
            <div className={checked ? "mdc-switch mdc-switch--checked" : "mdc-switch"}>
        <div className="mdc-switch__track"></div>
        <div className={checked ? "mdc-switch__thumb-underlay mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" : "mdc-switch__thumb-underlay"}>
            <div className="mdc-switch__thumb"></div>
            <input type="checkbox" id={additional_ids} className="mdc-switch__native-control" role="switch" aria-checked="false" />
        </div>
      </div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        </React.Fragment>)
    }
}