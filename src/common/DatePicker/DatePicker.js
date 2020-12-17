import React, { Component } from 'react';



export default class DatePicker extends Component {

    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let customClasses

        if(this.props.className !== undefined){
            customClasses = this.props.className
        }else{
            customClasses = ""
        }
      

        return(
   
            <div className="mdc-text-field mdc-text-field--outlined mdc-date-picker date">
                <input
                    className={customClasses + " form-control mdc-text-field__input" }
                    type="text"
                    value={this.props.value}
                    id={this.props.id}
                />
                <div className="input-group-addon">
                <button className="mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded mdc-icon-button--on" aria-pressed="true" aria-label="Select a Date"><i className="material-icons mdc-text-field__icon">calendar_today</i></button>
                </div>
                <div className="mdc-notched-outline mdc-notched-outline--upgraded">
                    <div className="mdc-notched-outline__leading"></div>
                    <div className="mdc-notched-outline__notch">
                        <label htmlFor="text-field-hero-input" className="mdc-floating-label">
                            {this.props.label}
                        </label>
                    </div>
                    <div className="mdc-notched-outline__trailing"></div>
                </div>
            </div>  
            
        );
    }

}

