import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Addbarang } from './Addbarang';
import { SelectPelanggan } from '../select/Select_pelanggan'
import { SelectPengirim } from '../select/Select_pengirim'
import { SelectRekening } from '../select/Select_rekening'
import { SelectSupplier } from '../select/Select_supplier'


export class Addnotabeli extends Component {
    constructor(props) {
        super(props);
        this.state = { listBarangNota: [], tunai: false };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getListBarangNota = this.getListBarangNota.bind(this);
        this.handleCaraBayar = this.handleCaraBayar.bind(this);
    }

    getListBarangNota = (childData) => {
        this.setState({ listBarangNota: childData });
    }
    handleCaraBayar(e) {
        var caraBayar = e.target.value;
        if (caraBayar === "Tunai")
            this.setState({ tunai: true });
        else
            this.setState({ tunai: false });
    }
    handleSubmit(event) {
        event.preventDefault();
        var dp = "";
        console.log(event.target.ditanggungPerusahaan.checked);
        if (event.target.ditanggungPerusahaan.checked) dp = 1
        else dp = 0;
        fetch("http://localhost:8000/notabeli", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                caraBayar: event.target.caraBayar.value,
                ongkir: event.target.ongkir.value,
                nomorRekening: event.target.nomorRekening.value,
                jatuhTempoPelunasan: event.target.jatuhTempoPelunasan.value,
                kodeSupplier: event.target.kodeSupplier.value,
                kodePengirim: event.target.kodePengirim.value,
                kodePelanggan: event.target.kodePelanggan.value,
                ditanggungPerusahaan: dp,
                listbarang: this.state.listBarangNota

            })
        }).then(response => {
            if (response.status === 200) {
                this.setState({ addmodalshow: false });
                this.props.refreshlistnota();
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
                            Tambah Nota Beli
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tabs defaultActiveKey="barang" >
                            <Tab eventKey="barang" title="Barang">
                                <Addbarang getListBarangNota={this.getListBarangNota}></Addbarang>
                            </Tab>
                            <Tab eventKey="nota" title="Nota">
                                <Form onSubmit={this.handleSubmit}>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="caraBayar">
                                                <Form.Label>Cara Bayar :</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="caraBayar"
                                                    required
                                                    onChange={e => this.handleCaraBayar(e)}
                                                >
                                                    <option> -- Pilih Cara Bayar --</option>
                                                    <option value="Tunai">Tunai</option>
                                                    <option value="Transfer">Transfer</option>
                                                    <option value="Kredit">Kredit</option>
                                                    <option value="Cek">Cek</option>

                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="jatuhTempoPelunasan">
                                                <Form.Label>Jatuh Tempo Pelunasan :</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    name="jatuhTempoPelunasan"
                                                    required
                                                />
                                            </Form.Group>
                                            <SelectPelanggan />
                                            <SelectSupplier />
                                        </Col>
                                        <Col>

                                            <SelectRekening defaultDisabled={this.state.tunai} />
                                            <SelectPengirim />
                                            <Form.Group controlId="ongkir">
                                                <Form.Label>Ongkos Kirim :</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="ongkir"
                                                    min="0"
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="ditanggungPerusahaan">
                                                <p>Ditanggung Perusahaan :</p>
                                                <Form.Check
                                                    type="checkbox"
                                                    name="ditanggungPerusahaan"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group>
                                        <Button type="submit" variant="success" className="float-right">
                                            Tambah </Button>
                                    </Form.Group>
                                </Form>
                            </Tab>
                        </Tabs>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide} variant="danger">
                            Close </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }
}
