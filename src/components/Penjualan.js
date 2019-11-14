import React, {
    Component
} from "react";

export class Penjualan extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="listbarang" id="uncontrolled-tab-example">
                    <Tab eventKey="listbarang" title="Home">
                    </Tab>
                    <Tab eventKey="addbarang" title="Profile">
                    </Tab>
                </Tabs>
            </div>
        );
    }
}