import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/akuntansi/Home";
import { Navigation } from "./components/Navigation";
import { Akun } from "./components/akuntansi/Akun";
import { Jurnal } from "./components/akuntansi/Jurnal";
import { Laporan } from "./components/akuntansi/Laporan";
import { Worksheet } from "./components/akuntansi/Worksheet";
import { Bukubesar } from "./components/akuntansi/Bukubesar";
import { Barang } from "./components/barang/Barang";
import { Notabeli } from './components/belibarang/Notabeli';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container pt-5">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/notabeli" component={Notabeli} />
          <Route path="/Akun" component={Akun} />
          <Route path="/Barang" component={Barang} />
          <Route path="/Jurnal" component={Jurnal} />
          <Route path="/Bukubesar" component={Bukubesar} />
          <Route path="/Worksheet" component={Worksheet} />
          <Route path="/Laporan" component={Laporan} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
