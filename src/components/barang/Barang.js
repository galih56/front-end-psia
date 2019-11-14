import React, { Component } from "react";
import { Add_barang } from './Add_barang.js';
import { Edit_barang } from './Edit_barang.js';
// import { Button, ButtonToolbar, Table, Row, Col } from 'react-bootstrap';
import { Table, Row, Col } from 'react-bootstrap';


export class Barang extends Component {
    constructor(props) {
        super(props);
        this.state = { listbarang: [], addmodalshow: false, editmodalhost: false }
    }

    refreshList() {
        //Kalo pake api
        fetch("http://localhost:8000/barang")
            .then(response => response.json())
            .then(data => {
                this.setState({ listbarang: data });
            });
    }
    componentDidMount() {
        this.refreshList()
    }

    render() {
        const { listbarang, kodeBarang, nama, hargaJual, hargaBeli, stok, kodeKategori } = this.state;
        return (
            <div className="col-12 mt-4">
                <Row>
                    <Col><h5>Daftar Barang</h5></Col>
                    {/* <Col> <ButtonToolbar className="float-right">
                        <Button
                            variant="primary"
                            onClick={() => this.setState({ addmodalshow: true })}
                        >
                            Tambah Barang </Button>
                    </ButtonToolbar></Col> */}
                </Row>
                <Table className="mt-4" striped bordered hover size="small">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga Jual</th>
                            <th>Harga Beli</th>
                            <th>Stok</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listbarang.map(data => (
                            <tr>
                                <td>{data.nama}<br />{data.kategori.nama}</td>
                                <td>{data.hargaJual}</td>
                                <td>{data.hargaBeli}</td>
                                <td>{data.stok}</td>
                                <td>
                                    {/* <ButtonToolbar>
                                        <Button
                                            className="mr-2"
                                            variant="primary"
                                            onClick={() =>
                                                this.setState({
                                                    editmodalshow: true,
                                                    kodeBarang: data.kodeBarang,
                                                    nama: data.nama,
                                                    hargaJual: data.hargaJual,
                                                    hargaBeli: data.hargaBeli,
                                                    stok: data.stok,
                                                    kodeKategori: data.kategori_kodeKategori
                                                })
                                            }
                                        >
                                            Edit
                                        </Button>
                                    </ButtonToolbar> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Add_barang
                    show={this.state.addmodalshow}
                    onHide={() => this.setState({ addmodalshow: false })}
                />
                <Edit_barang
                    show={this.state.editmodalshow}
                    onHide={() => this.setState({ editmodalshow: false })}
                    kodeBarang={kodeBarang}
                    nama={nama}
                    kodeKategori={kodeKategori}
                    hargaBeli={hargaBeli}
                    hargaJual={hargaJual}
                    stok={stok}
                    refreshList={this.refreshList}

                />

            </div >
        );
    }
} 