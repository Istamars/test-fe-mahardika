import React from 'react';

const INITIAL_STATE = {
  nama: "",
  harga: 0,
  berat: 2000,
  hargaPerKilo: 0,
}

export default class Form extends React.Component {
  state = INITIAL_STATE;

  isValid = () => {
    const buah = this.state;

    if (!buah.nama) {
      alert('Yuk isi dulu yuk. Nama buah ga boleh kosong ya.');
      return false;
    }
    if (buah.berat < 2000) {
      alert('Lebih ringan dari berat minimal nih, coba tambahin lagi beratnya, minimal 2 kilo yaa.');
      return false;
    }

    return true;
  }

  tambahBuah = (event) => {
    event.preventDefault();
    
    if (this.isValid()) {
      let {nama, berat, harga, hargaPerKilo} = this.state;
      berat = Number(berat) / 1000;
      harga = Number(harga);
      hargaPerKilo = harga/berat;
      this.props.tambahItem({nama, berat, harga, hargaPerKilo});
      this.setState(INITIAL_STATE);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateId !== prevProps.updateId) {
      if(this.props.updateId === -1) {
        return this.setState(INITIAL_STATE);
      }
      let {nama, berat, harga, hargaPerKilo} = this.props.toBeUpdateItem;
      berat *= 1000;
      this.setState({nama, berat, harga, hargaPerKilo});
    }
  }

  updateBuah = () => {
    if (this.isValid()) {
      let {nama, berat, harga, hargaPerKilo} = this.state;
      berat = Number(berat) / 1000;
      harga = Number(harga);
      hargaPerKilo = harga/berat;
      this.props.updateItem({nama, berat, harga, hargaPerKilo});
      this.setState(INITIAL_STATE);
    }
  }

  handleInputValueChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="border-1 center w-100 overflow-auto">
        <div className="form display-inline-block my-1 p-1 box">
          <form onSubmit={(event) => this.tambahBuah(event)}>
            <div className="spread pb-1">
              <span className="pr-1">Nama:</span>
              <input type="text" name="nama" value={this.state.nama} onChange={(event) => this.handleInputValueChange(event)} />
            </div>
            <div className="spread pb-1">
              <span className="pr-1">Harga Total:</span>
              <input type="number" name="harga" value={this.state.harga} onChange={(event) => this.handleInputValueChange(event)} />
            </div>
            <div className="spread pb-1">
              <span className="pr-1">Berat Total(dalam gram):</span>
              <input type="number" name="berat" value={this.state.berat} onChange={(event) => this.handleInputValueChange(event)} />
            </div>

            <div className="float-right">
              <button type="submit" className="mr-1" disabled={this.props.updateId !== -1}>Submit</button>
              <button onClick={() => this.updateBuah()} disabled={this.props.updateId === -1}>Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
