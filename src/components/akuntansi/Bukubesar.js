import React, { Component } from "react";

export class Bukubesar extends Component {
    render() {
        return (
            <div >
                <h3 className="row mt-5 mb-3">Buku Besar</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-bordered responsive">
                                    <thead>
                                        <tr>
                                            <th>Tanggal</th>
                                            <th>Keterangan</th>
                                            <th>Debet</th>
                                            <th>Kredit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>---</th>
                                            <th>---</th>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
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
