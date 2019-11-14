import React, { Component } from "react";

export class Worksheet extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = { data: null }
    // }


    componentDidMount() {

    }

    refreshTable() {

        //Kalo pake api
        // fetch("https://jsonplaceholder.typicode.com/comments")
        //     .then(response => response.json())
        //     .then(result => {
        //         this.setState({ data: result });
        //     });
    }

    render() {
        var table_div_style = { overflowX: 'scroll' };

        return (
            <div>
                <h3 className="row">Worksheet</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12" style={table_div_style}>
                                <table className="table table-bordered responsive " >
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th colSpan="2" align="center">Trial Balance</th>
                                            <th colSpan="2" align="center">Adjustment</th>
                                            <th colSpan="2" align="center">Adjusted Trial Balance</th>
                                            <th colSpan="2" align="center">Income Statement</th>
                                            <th colSpan="2" align="center">Balance Sheet</th>
                                            <th colSpan="2" align="center">Post Closing Trial Balance</th>
                                        </tr>
                                        <tr>
                                            <th>Akun</th>
                                            <th>Debet</th>
                                            <th>Kredit</th>
                                            <th>Debet</th>
                                            <th>Kredit</th>
                                            <th>Debet</th>
                                            <th>Kredit</th>
                                            <th>Debet</th>
                                            <th>Kredit</th>
                                            <th>Debet</th>
                                            <th>Kredit</th>
                                            <th>Debet</th>
                                            <th>Kredit</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th align="left">1241426361</th>
                                            <td align="center">1241426361</td>
                                            <td align="center">1241426361</td>
                                            <td align="center">1241426361</td>
                                            <td align="center">1241426361</td>
                                            <td align="center">1241426361</td>
                                            <td align="center">1241426361</td>
                                            <td align="center">1241426361</td>
                                            <td align="center">1241426361</td>
                                            <td align="center">1241426361</td>
                                            <td align="center">1241426361</td>
                                            <td align="center">1241426361</td>
                                            <td align="center">2985192</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}
