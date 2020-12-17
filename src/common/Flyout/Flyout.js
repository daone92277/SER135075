import React, {Component} from "react";


export default class Flyout extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render (){
        return (<aside className="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust">
        <div className="mdc-drawer__content">
            <div className="mdc-list">
                <a className="mdc-list-item mdc-list-item--activated" href="#page" aria-current="page">
                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
                    <span className="mdc-list-item__text">Inbox</span>
                </a>
                <a className="mdc-list-item" href="#page">
                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
                    <span className="mdc-list-item__text">Outgoing</span>
                </a>
                <a className="mdc-list-item" href="#page">
                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                    <span className="mdc-list-item__text">Drafts</span>
                </a>
            </div>
        </div>
    </aside>)

    }
}