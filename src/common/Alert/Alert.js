import React, { Component } from 'react';



export default class Alert extends Component {

    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div className={"alert alert-"+this.props.status}>
                    <strong>{this.props.message}</strong>
            </div>
        );
    }

}

