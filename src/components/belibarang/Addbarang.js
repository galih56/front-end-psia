import React, { Component } from "react";
import { Button, Row, Col, Form, Table } from "react-bootstrap";
import { SelectBarang } from '../select/Select_barang';
import { SelectKategori } from '../select/Select_kategori';
export class Addbarang extends Component {
    constructor(props) {
        super(props);
        this.state = { listbarang: [], addMode: "1" };
        this.handleAddBarang = this.handleAddBarang.bind(this);
        this.getTotal = this.getTotal.bind(this);
        this.removeBarang = this.removeBarang.bind(this);
    }
    modeOnChange(e) {
        this.setState({ addMode: e.target.value });
    }
    showAddForm() {
        if (this.state.addMode === "2") {
            return (
                <div>
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
                        </Col>
                        <Col>
                            <SelectKategori />
                        </Col>
                        <Col>
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

                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="stok">
                                <Form.Label>Stok :</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="stok"
                                    placeholder="Stok"
                                    min="0"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Harga Beli">
                                <Form.Label>Harga Beli :</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="hargaBeli"
                                    placeholder="Harga Beli"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
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
                </div>
            )
        } else {
            return (
                <div>
                    <SelectBarang />
                    <Form.Group>
                        <Form.Label>Stok : </Form.Label>
                        <Form.Control type="number" name="stok" min="0" required></Form.Control>
                    </Form.Group>
                </div>
            )
        }
    }

    handleAddBarang(e) {
        e.preventDefault();

        if (this.state.addMode === "2") {
            var newBarang = this.state.listbarang.concat({
                kodeBarang: e.target.kodeBarang.value,
                nama: e.target.nama.value,
                hargaJual: e.target.hargaJual.value,
                stok: e.target.stok.value,
                kodeKategori: e.target.kodeKategori.value,
                hargaBeli: e.target.hargaBeli.value
            })
            this.setState({ listbarang: newBarang })
        } else {
            var kodeBarang = e.target.kodeBarang.value;
            var stok = e.target.stok.value;
            var url = "http://localhost:8000/barang/" + kodeBarang;
            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    data[0].stok = Number.parseInt(stok);
                    this.setState({ listbarang: this.state.listbarang.concat(data[0]) });//push return length.jadi gak bisa di .map()
                    this.props.getListBarangNota(this.state.listbarang);
                });
        }
    }

    getTotal(listdata) {
        var total = 0;
        listdata.map((data) => {
            total = total + (Number.parseInt(data.hargaBeli) * Number.parseInt(data.stok))
        })
        return (<td>{total}</td>)
    }

    removeBarang(list, idx) {
        var newlist = []
        list.forEach((item, i) => {
            if (i != idx) {
                newlist.push(item);
            }
        })
        this.setState({ listbarang: newlist })
    }


    render() {
        return (
            <div>
                <br />
                <Form.Control as="select" onChange={e => this.modeOnChange(e)}>
                    <option value="1" selected={true}>Pilih yang sudah ada</option>
                    <option value="2" >Tambah barang baru</option>
                </Form.Control>
                <Form onSubmit={this.handleAddBarang}>
                    {
                        this.showAddForm()
                    }
                    <Button type="submit" variant="success" className="float-right">
                        Tambah </Button>
                </Form>
                <br />
                <Table className="mt-4" striped bordered hover size="small">
                    <thead>
                        <tr>
                            <td>Kode - Nama </td>
                            <td>Harga beli</td>
                            <td>Jumlah</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listbarang.map((data, idx) =>
                            <tr key={idx} >
                                <td>{data.kodeBarang}<br />{data.nama}</td>
                                <td>{data.hargaBeli}</td>
                                <td>{data.stok}</td>
                                <td><Button variant="danger" onClick={() => this.removeBarang(this.state.listbarang, idx)}>Hapus</Button></td>
                            </tr>
                        )}
                        <tr>
                            <td colSpan={2}><strong>Total</strong></td>
                            {this.getTotal(this.state.listbarang)}
                        </tr>
                    </tbody>
                </Table>
            </div>
        )

    }
}