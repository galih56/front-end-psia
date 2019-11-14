import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class Edit_barang extends Component {
    constructor(props) {
        super(props);
        this.state = { listkategori: [], kodeBarang: "", kodeKategori: "", hargaJual: "", hargaBeli: "", stok: "" };
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
        console.log(JSON.stringify({
            kodeBarang: this.props.kodeBarang,
            nama: event.target.nama.value,
            stok: event.target.stok.value,
            hargaJual: event.target.hargaJual.value,
            hargaBeli: event.target.hargaBeli.value,
            kodeKategori: event.target.kodeKategori.value,
        }));
        fetch("http://localhost:8000/barang", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                kodeBarang: this.props.kodeBarang,
                nama: event.target.nama.value,
                stok: event.target.stok.value,
                hargaJual: event.target.hargaJual.value,
                hargaBeli: event.target.hargaBeli.value,
                kodeKategori: event.target.kodeKategori.value,
            })
        })
            .then(response => response.json())
            .then(result => {
                if (result.status === 'sukses') {
                    // this.props.refreshList();
                    this.props.onHide();
                }
            });
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
                            Ubah Employee
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group controlId="kodeBarang">
                                        <Form.Label>Kode Barang :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="kodeBarang"
                                            placeholder="Kode Barang"
                                            defaultValue={this.props.kodeBarang}
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
                                            {
                                                this.state.listkategori.map(data => {
                                                    if (data.kodeKategori === this.props.kodeKategori) {
                                                        return <option selected="true" key={data.kodeKategori} value={data.kodeKategori}>{data.nama}</option>
                                                    } else {
                                                        return <option key={data.kodeKategori} value={data.kodeKategori}>{data.nama}</option>
                                                    }

                                                })
                                            }
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="Nama">
                                        <Form.Label>Nama :</Form.Label>
                                        <Form.Control
                                            type="nama"
                                            name="nama"
                                            defaultValue={this.props.nama}
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
                                            defaultValue={this.props.stok}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Harga Beli">
                                        <Form.Label>Harga Beli :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="hargaBeli"
                                            defaultValue={this.props.hargaBeli}
                                            placeholder="Harga Beli"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Harga Jual">
                                        <Form.Label>Harga Jual :</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="hargaJual"
                                            defaultValue={this.props.hargaJual}
                                            placeholder="Harga Jual"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group>
                                <Button type="submit" variant="success" className="float-right">
                                    Ubah </Button>
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
