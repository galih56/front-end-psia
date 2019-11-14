import React, { Component } from "react";

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="card col-6">
                        <div className="card-body">
                            <h5 className="card-title">Perubahan Ekuitas</h5>
                            <div className="row">
                                <div className="col-6"><h6>Modal Pemilik :</h6></div>
                                <div className="col-6"></div>
                            </div>
                            <div className="row">
                                <div className="col-6"><h6>Prive :</h6></div>
                                <div className="col-6"></div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6"><h6>Ekuitas Modal Pemilik : </h6></div>
                                <div className="col-6"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-6">
                        <div className="card-body">
                            <h5 className="card-title">Pendapatan</h5>
                            <div className="row">
                                <div className="col-6">Penjualan : </div>
                                <div className="col-6"></div>
                            </div>
                            <div className="row">
                                <div className="col-6">Diskon Penjualan : </div>
                                <div className="col-6"></div>
                            </div>
                            <div className="row">
                                <div className="col-6">Pendapatan Lain lain : </div>
                                <div className="col-6"></div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6">TOTAL PENDAPATAN : </div>
                                <div className="col-6"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-12">
                        <div className="card-body">
                            <h5 className="card-title">Biaya</h5>
                            <div className="row">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6">HPP : </div>
                                        <div className="col-6"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">Gaji Pegawai : </div>
                                        <div className="col-6"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">Sediaan Habis Pakai : </div>
                                        <div className="col-6"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">Depresiasi Kendaraan : </div>
                                        <div className="col-6"></div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6">Biaya Listrik, Air, Telepon : </div>
                                        <div className="col-6"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">Penjualan Aset Tetap : </div>
                                        <div className="col-6"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">Biaya atau Rugi Lain Lain : </div>
                                        <div className="col-6"></div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6">TOTAL BIAYA : </div>
                                <div className="col-6"></div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-6">LABA / RUGI : </div>
                                <div className="col-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="row mt-5 mb-3">DAFTAR AKUN</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-striped responsive">
                                    <thead>
                                        <tr>
                                            <th>Kode Akun</th>
                                            <th>Nama Akun</th>
                                            <th>Nilai Awal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
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
