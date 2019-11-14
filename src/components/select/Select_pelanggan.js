import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class SelectPelanggan extends Component {
    constructor(props) {
        super(props);
        this.state = { listpelanggan: [] };
    }

    componentDidMount() {
        fetch("http://localhost:8000/pelanggan")
            .then(response => response.json())
            .then(data => {
                this.setState({ listpelanggan: data });
            });
    }


    render() {
        return (
            <Form.Group controlId="Supplier">
                <Form.Label>Pelanggan :</Form.Label>
                <Form.Control
                    as="select"
                    name="kodePelanggan"
                    required
                >
                    <option>-- Pilih Pelanggan --</option>
                    {this.state.listpelanggan.map(data => <option key={data.kode} value={data.kode}>{data.nama}</option>)}

                </Form.Control>
            </Form.Group>
        );
    }
}
