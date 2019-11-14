import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class SelectRekening extends Component {
    constructor(props) {
        super(props);
        this.state = { listrekening: [] };
    }

    componentDidMount() {
        fetch("http://localhost:8000/rekening")
            .then(response => response.json())
            .then(data => {
                this.setState({ listrekening: data });
            });
    }

    render() {

        if (this.props.defaultDisabled === true) {
            return (
                <Form.Group controlId="nomorRekening">
                    <Form.Label>Rekening :</Form.Label>
                    <Form.Control
                        as="select"
                        name="nomorRekening"
                        disabled={true}
                    ><option value="Tunai" selected={true}>-- Pilih Rekening --</option>
                        {this.state.listrekening.map(data => <option key={data.nomor} value={data.nomor}>{data.namaBank}</option>)}
                    </Form.Control>
                </Form.Group>)
        }
        else {
            return (
                <Form.Group controlId="nomorRekening">
                    <Form.Label>Rekening :</Form.Label>
                    <Form.Control
                        as="select"
                        name="nomorRekening"
                        required
                    ><option value="">-- Pilih Rekening --</option>
                        {this.state.listrekening.map(data => <option key={data.nomor} value={data.nomor}>{data.namaBank}</option>)}
                    </Form.Control>
                </Form.Group>)
        }
    }
}
