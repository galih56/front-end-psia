import React, { Component } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import Moment from 'react-moment';

export class Shownotabeli extends Component {
    constructor(props) {
        super(props);
        this.state = { listbarang: [] };
        this.handleUndefinedData = this.handleUndefinedData.bind(this);
        this.handleVisibilityRekening = this.handleVisibilityRekening.bind(this);
    }

    componentDidUpdate() {
        var noNota = this.props.detailnota.noNota;
        fetch("http://localhost:8000/notabeli/" + noNota + "/barang")
            .then(response => response.json())
            .then(data => {
                this.setState({ listbarang: data })
                console.log(data);
            });
    }
    handleVisibilityRekening(jenisPembayaran) {
        if (jenisPembayaran != "Tunai") {
            return (<td><h6>Rekening : </h6>{jenisPembayaran}</td>)
        } else {
            return (<td></td>)
        }
    }
    handleUndefinedData(data) {
        if (typeof data != "undefined") {
            return (
                <tbody>
                    <tr>
                        <td><h6>No. Nota : </h6>{this.props.detailnota.noNota}</td>
                        <td><h6>Pengirim : </h6>{this.props.detailnota.pengirim.nama}</td>
                    </tr>
                    <tr>
                        <td><h6>Jatuh Tempo Pelunasan :  </h6><Moment format="DD/MM/YYYY">{this.props.detailnota.jatuhTempoPelunasan}</Moment></td>
                        <td><h6>Ongkos Kirim : </h6>{this.props.detailnota.ongkir}</td>
                    </tr>
                    <tr>
                        <td><h6>Cara Bayar:  </h6>{this.props.detailnota.caraBayar}</td>
                        <td><h6>Jatuh Tempo Diskon : </h6><Moment format="DD/MM/YYYY">{this.props.detailnota.jatuhTempoDiskon}</Moment></td>
                    </tr>
                    <tr>
                        <td><h6>Supplier : </h6>{this.props.detailnota.supplier.nama}</td>
                        <td><h6>Pelanggan : </h6>{this.props.detailnota.pelanggan.nama}</td>
                    </tr>
                    <tr>
                        {this.handleVisibilityRekening(this.props.detailnota.rekening.namaBank)}
                    </tr>
                </tbody>
            )
        }
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
                            Detail Nota
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table>
                            {
                                this.handleUndefinedData(this.props.detailnota.supplier)
                            }
                        </Table>
                        <Table className="mt-4" striped bordered hover size="small">
                            <thead>
                                <tr>
                                    <td>Kode - Nama </td>
                                    <td>Harga beli</td>
                                    <td>Jumlah</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listbarang.map((data, idx) =>
                                    <tr key={idx} >
                                        <td>{data.kodeBarang}<br />{data.barang.nama}</td>
                                        <td>{data.harga}</td>
                                        <td>{data.jumlah}</td>
                                    </tr>
                                )}
                                <tr><td ><strong>Total</strong></td><td colSpan={2} style={{ textAlign: "center" }}><strong>{this.props.detailnota.total}</strong></td></tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide} variant="danger">
                            Close
            </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }
}
