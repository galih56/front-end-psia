import React, { Component } from "react";
import { Addnotabeli } from './Addnotabeli';
import { Shownotabeli } from './Shownotabeli';
// import { Tes } from './tes'
import { Button, ButtonToolbar, Table, Row, Col } from 'react-bootstrap';

export class Notabeli extends Component {
    constructor(props) {
        super(props);
        this.state = { listnotabeli: [], addmodalshow: false, showmodalshow: false, detailnotabeli: {} }
        this.refreshList = this.refreshList.bind(this);
    }

    refreshList() {
        //Kalo pake api
        fetch("http://localhost:8000/notabeli")
            .then(response => response.json())
            .then(data => {
                this.setState({ listnotabeli: data });
            });
    }
    componentDidMount() {
        this.refreshList()
    }
    render() {
        var { detailnotabeli } = this.state
        return (
            <div className="col-12 mt-4">
                <Row>
                    <Col><h5>Daftar Nota</h5></Col>
                    <Col> <ButtonToolbar className="float-right">
                        <Button
                            variant="primary"
                            onClick={() => this.setState({ addmodalshow: true })}
                        >
                            Tambah Nota </Button>
                    </ButtonToolbar></Col>

                </Row>
                <Table className="mt-4" striped bordered hover size="small">
                    <thead>
                        <tr>
                            <th>No. Nota</th>
                            <th>Total Harga</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listnotabeli.map(data => (
                            <tr key={data.noNota}>
                                <td>{data.noNota}</td>
                                <td>{data.total}</td>
                                <td><Button variant="success" onClick={() => {
                                    this.setState({ showmodalshow: true }, () => this.setState({ detailnotabeli: data }))
                                    console.log(this.state.detailnotabeli);
                                }}>Detail</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Addnotabeli
                    show={this.state.addmodalshow}
                    onHide={() => this.setState({ addmodalshow: false })}
                    refreshlistnota={this.refreshList}
                />
                <Shownotabeli
                    show={this.state.showmodalshow}
                    onHide={() => this.setState({ showmodalshow: false })}
                    detailnota={detailnotabeli}
                ></Shownotabeli>
            </div >
        );
    }
} 