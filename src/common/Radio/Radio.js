import React, {Component} from "react";


export default class Radio extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        
      
    }




    render(){
    return(
        <React.Fragment>
        <label className="d-block">{this.props.FieldLabel}</label>
        <div className="mdc-form-field">
            <div className="mdc-radio">
                <input className="mdc-radio__native-control" type="radio" id={this.props.radioOptionOneId} name={this.props.name} defaultChecked />
                <div className="mdc-radio__background">
                    <div className="mdc-radio__outer-circle"></div>
                    <div className="mdc-radio__inner-circle"></div>
                </div>
                <div className="mdc-radio__ripple"></div>
            </div>
        <label htmlFor="radio-1">{this.props.OptionLabelOne}</label>
        </div>
        <div className="mdc-form-field">
            <div className="mdc-radio">
                <input className="mdc-radio__native-control" type="radio" id={this.props.radioOptionTwoId} name={this.props.name} />
                <div className="mdc-radio__background">
                    <div className="mdc-radio__outer-circle"></div>
                    <div className="mdc-radio__inner-circle"></div>
                </div>
                <div className="mdc-radio__ripple"></div>
            </div>
            <label htmlFor="radio-2">{this.props.OptionLabelTwo}</label>
        </div></React.Fragment>)
    }
}