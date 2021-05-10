import React from 'react';

export default class Table extends React.Component {
  hapusBuah = (id) => {
    this.props.hapusListItem(id);
  }

  pilihBuah = (id) => {
    this.props.pilihItem(id);
  }

  resetBuah = () => {
    this.props.resetId();
  }

  renderActionButton = (index) => {
    if (this.props.updateId === index) {
      return (
        <React.Fragment>
          <button className="mr-1" onClick={(event) => this.resetBuah(index, event)} >Cancel</button>
          <button onClick={(event) => this.hapusBuah(index, event)}>Delete</button>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <button className="mr-1" onClick={(event) => this.pilihBuah(index, event)} >Edit</button>
        <button onClick={(event) => this.hapusBuah(index, event)}>Delete</button>
      </React.Fragment>
    );
  }

  renderList = () => {
    const {list} = this.props;

    if (list.length > 0) {
      return list.map((listItem, index) => {
        return (
          <tr key={index} className={this.props.updateId === index ? 'bg-lime' : ''}>
            <td>{index+1}</td>
            <td className="capitalize">{listItem.nama}</td>
            <td>{listItem.harga}</td>
            <td>{`${listItem.berat} kg`}</td>
            <td>{listItem.hargaPerKilo.toFixed(0)}</td>
            <td className="py-025 center display-inline-block w-100">
              {this.renderActionButton(index)}
            </td>
          </tr>
        );
      });
    }
    return (
      <tr>
        <td colSpan="6" className="center">Buah habis</td>
      </tr>
    );
  };

  render() {
    return (
      <div className="px-1">
        <div className="table">
          <table id="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga Total</th>
                <th>Berat Total</th>
                <th>Harga per kg</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}