import React, {Component} from "react";


export default class Button extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        
      
    }


    render(){
       

        if(this.props.type === "primary"){
            return(<button id={this.props.id} title={this.props.title} data-placement={this.props.dataPlacement}  data-toggle={this.props.dataToggle} data-target={this.props.dataTarget} className={ this.props.type + " mdc-button mdc-button--raised mx-lg-3 mdc-button-primary mdc-ripple-upgraded " + this.props.AdditionalClasses}  data-html={this.props.dataHTML} disabled={this.props.disabled}> 
                <span className="mdc-button__ripple"></span>{this.props.label}
            </button>);
        }

        if(this.props.type === "secondary"){
            return(<button id={this.props.id} title={this.props.title} data-placement={this.props.dataPlacement}  data-toggle={this.props.dataToggle} data-target={this.props.dataTarget} className={ this.props.type + " mdc-button mdc-button--raised mx-lg-3 mdc-button-secondary " + this.props.AdditionalClasses} data-html={this.props.dataHTML} disabled={this.props.disabled}> 
                <span className="mdc-button__ripple"></span>{this.props.label}
            </button>);
        }

        if(this.props.type === "btn-secondary"){
            return(<button data-placement={this.props.dataPlacement} title={this.props.title} data-toggle={this.props.dataToggle} data-target={this.props.dataTarget} className={"btn " + this.props.type + " " + this.props.AdditionalClasses} data-html={this.props.dataHTML} disabled={this.props.disabled}>
                {this.props.label}
            </button>)
        }
        
        
    }
}