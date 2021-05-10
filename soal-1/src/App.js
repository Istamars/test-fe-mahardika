import React from 'react';
import Form from './components/Form';
import Table from './components/Table';

const INITIAL_STATE = {
  updateId: -1,
  buah: [
    {
      nama: "durian",
      harga: 400000,
      berat: 5,
      hargaPerKilo: 80000,
    },
    {
      nama: "manggis",
      harga: 350000,
      berat: 10,
      hargaPerKilo: 35000,
    },
    {
      nama: "Nanas",
      harga: 100000,
      berat: 4,
      hargaPerKilo: 25000,
    },
    {
      nama: "Nangka",
      harga: 90000,
      berat: 2,
      hargaPerKilo: 45000,
    },
    {
      nama: "Strawberry",
      harga: 120000,
      berat: 6,
      hargaPerKilo: 20000,
    },
    {
      nama: "Plum",
      harga: 273280,
      berat: 3.2,
      hargaPerKilo: 85400,
    },
    {
      nama: "Kiwi",
      harga: 129600,
      berat: 2.4,
      hargaPerKilo: 54000,
    },
  ]
}

export default class App extends React.Component {
  state = INITIAL_STATE;

  hapusBuah = (id) => {
    const buahLama = this.state.buah;
    this.setState({buah: [...buahLama.slice(0, id), ...buahLama.slice(id+1)]});
  }

  tambahBuah = (buahBaru) => {
    const buahLama = this.state.buah;
    this.setState({buah: [...buahLama, buahBaru]});
  }

  pilihBuah = (id) => {
    this.setState({updateId: id});
  }

  resetId = () => {
    this.setState({updateId: -1});
  }

  updateBuah = (buahUpdate) => {
    const buahLama = this.state.buah;
    const {updateId} = this.state; 
    this.setState({buah: [...buahLama.slice(0, updateId), buahUpdate, ...buahLama.slice(updateId+1)], updateId: -1});
  }

  render() {
    const {updateId, buah} = this.state;

    return (
      <React.Fragment>
        <div className="center"><h2>Daftar Harga Buah</h2></div>
        <Table list={buah} hapusListItem={this.hapusBuah} pilihItem={this.pilihBuah} resetId={this.resetId} updateId={updateId} />
        <div className="center"><h2>Form Daftar Harga Buah</h2></div>
        <Form tambahItem={this.tambahBuah} updateItem={this.updateBuah} toBeUpdateItem={buah[updateId]} updateId={updateId} />
      </React.Fragment>
    );
  }
}

