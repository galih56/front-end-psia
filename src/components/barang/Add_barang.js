import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class Add_barang extends Component {
    constructor(props) {
        super(props);
        this.state = { listkategori: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8000/kategori")
            .then(response => response.json())
            .then(data => {
                this.setState({ listkategori: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:8000/barang", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                kodeBarang: event.target.kodeBarang.value,
                nama: event.target.nama.value,
                hargaJual: event.target.hargaJual.value,
                stok: event.target.stok.value,
                kodeKategori: event.target.kodeKategori.value,
                hargaBeli: event.target.hargaBeli.value
            })
        }).then(response => {
            console.log(response.status);
            if (response.status === 200) {
                console.log('berhasil');
                this.setState({ addmodalshow: false });
                this.props.onHide();
            }
        })

    }
    render() {
        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Tambang Barang
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group controlId="Nama">
                                        <Form.Label>Kode Barang :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="kodeBarang"
                                            placeholder="Kode Barang"
                                            maxLength="5"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="kodeKategori">
                                        <Form.Label>Kategori :</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="kodeKategori"
                                            required
                                        ><option value="">-- Pilih Kategori --</option>
                                            {this.state.listkategori.map(data => <option value={data.kodeKategori}>{data.nama}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="Nama">
                                        <Form.Label>Nama :</Form.Label>
                                        <Form.Control
                                            type="nama"
                                            name="nama"
                                            placeholder="Nama"
                                            required
                                        />
                                    </Form.Group>


                                </Col>
                                <Col>
                                    <Form.Group controlId="stok">
                                        <Form.Label>Stok :</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="stok"
                                            placeholder="Stok"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Harga Beli">
                                        <Form.Label>Harga Beli :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="hargaBeli"
                                            placeholder="Harga Beli"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Harga Jual">
                                        <Form.Label>Harga Jual :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="hargaJual"
                                            placeholder="Harga Jual"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group>
                                <Button type="submit" variant="success" className="float-right">
                                    Tambah </Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide} variant="danger">
                            Close
            </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
