import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class SelectKategori extends Component {
    constructor(props) {
        super(props);
        this.state = { listkategori: [] };
    }

    componentDidMount() {
        fetch("http://localhost:8000/kategori")
            .then(response => response.json())
            .then(data => {
                this.setState({ listkategori: data });
            });
    }


    render() {
        return (
            <Form.Group controlId="kodeKategori">
                <Form.Label>Kategori :</Form.Label>
                <Form.Control
                    as="select"
                    name="kodeKategori"
                    required
                ><option value="">-- Pilih Kategori --</option>
                    {this.state.listkategori.map(data => <option key={data.kodeKategori} value={data.kodeKategori}>{data.nama}</option>)}
                </Form.Control>
            </Form.Group>
        );
    }
}
