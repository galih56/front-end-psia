import React, { Component } from "react";

export class Tes extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <div className="col-12 mt-4">
                tes props
                {this.props.tes.noNota}
            </div >
        );
    }
} 