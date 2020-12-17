import React, {Component} from "react";


export default class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    // Snippet 
    // <Model size="modal-sm" id="myModal" ariaLabel="" title="" primaryButtonLabel=""  secondaryButtonLabel=""  primaryButtonId="" secondaryButtonId="" Content=""/>

    render(){
        return(<div className="modal fade" tabIndex="-1" role="dialog" id={this.props.id} aria-label={this.props.ariaLabel}>
        <div className={"modal-dialog "+ this.props.size} role="document">
            <div className="modal-content">
                <div className="modal-header modal-header-bg d-flex justify-content-between">
                    <h5 className="modal-title">{this.props.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="small-modal"><span
                            className="nc-icon-glyph ui-1_simple-remove"></span>
                    </button>
                
                </div>
                <div className="modal-body">
                    <p>{this.props.Content}</p>
                </div>
                <div className="modal-footer">
                    <button className="mdc-button mdc-button--raised mx-lg-3 mdc-button-secondary" data-dismiss="modal">
                        <span className="mdc-button__ripple"></span>{this.props.secondaryButtonLabel}
                    </button>
                   
                    <button className="mdc-button mdc-button--raised mx-lg-3 mdc-button-primary"> 
                        <span className="mdc-button__ripple"></span>{this.props.primaryButtonLabel}
                    </button>
                </div>
            </div>
        </div>
    </div>)
    }
}