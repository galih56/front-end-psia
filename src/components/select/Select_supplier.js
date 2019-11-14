import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class SelectSupplier extends Component {
    constructor(props) {
        super(props);
        this.state = { listsupplier: [] };
    }

    componentDidMount() {
        fetch("http://localhost:8000/supplier")
            .then(response => response.json())
            .then(data => {
                this.setState({ listsupplier: data });
            });
    }


    render() {
        return (
            <Form.Group controlId="kodeSupplier">
                <Form.Label>Supplier :</Form.Label>
                <Form.Control
                    as="select"
                    name="kodeSupplier"
                    required
                ><option value="">-- Pilih Supplier --</option>
                    {this.state.listsupplier.map(data => <option key={data.kode} value={data.kode}>{data.nama}</option>)}
                </Form.Control>
            </Form.Group>
        );
    }
}
