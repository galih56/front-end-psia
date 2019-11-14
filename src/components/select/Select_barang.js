import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class SelectBarang extends Component {
    constructor(props) {
        super(props);
        this.state = { listbarang: [] };
    }

    componentDidMount() {
        fetch("http://localhost:8000/barang")
            .then(response => response.json())
            .then(data => {
                this.setState({ listbarang: data });
            });
    }


    render() {
        return (
            <Form.Group controlId="kodeBarang">
                <Form.Label>Barang :</Form.Label>
                <Form.Control
                    as="select"
                    name="kodeBarang"
                    required
                ><option value="">-- Pilih Barang --</option>
                    {this.state.listbarang.map(data => <option key={data.kodeBarang} value={data.kodeBarang}>{data.nama} -- {data.kategori.nama}</option>)}
                </Form.Control>
            </Form.Group>
        );
    }
}
