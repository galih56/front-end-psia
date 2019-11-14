import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class SelectPengirim extends Component {
    constructor(props) {
        super(props);
        this.state = { listpengirim: [] };
    }

    componentDidMount() {
        fetch("http://localhost:8000/pengirim")
            .then(response => response.json())
            .then(data => {
                this.setState({ listpengirim: data });
            });
    }


    render() {
        return (
            <Form.Group controlId="kodePengirim">
                <Form.Label>Pengirim :</Form.Label>
                <Form.Control
                    as="select"
                    name="kodePengirim"
                    required
                ><option value="">-- Pilih Pengirim --</option>
                    {this.state.listpengirim.map(data => <option key={data.kode} value={data.kode}>{data.nama}</option>)}
                </Form.Control>
            </Form.Group>
        );
    }
}
