import React, { Component } from "react";

export class TabelJurnal extends Component {
    constructor(props) {
        super(props);
        this.state = { dataJurnal: [] }
    }

    componentDidMount() {
        this.refreshTable();
    }

    refreshTable() {
        //Kalo pake api
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => {
                this.setState({ dataJurnal: data });
                console.log(data)
            });
    }

    render() {
        const { dataJurnal } = this.state;
        return (
            <div >
                <h3 className="row">Jurnal</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-bordered responsive">
                                    <thead>
                                        <tr>
                                            {/* <th>Tanggal</th> */}
                                            <th>Keterangan</th>
                                            <th>Akun</th>
                                            <th>Debet</th>
                                            <th>Kredit</th>
                                            <th>No.Bukti</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataJurnal.map((data, index) => (
                                            <tr key={data.id} >
                                                {/* <th key={data.tanggal}>{data.tanggal}</th> */}
                                                <th >{data.body}</th>
                                                <td>{data.name}</td>
                                                <td>{data.name}</td>
                                                <td>{data.name}</td>
                                                <td>{data.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}
