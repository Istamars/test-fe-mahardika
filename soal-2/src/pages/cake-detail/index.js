import { connect } from "react-redux"

function Detail(props) {
  let {cake} = props;

  console.log(cake)

  const renderHarga = () => {
    if(cake.harga.length > 1) return `Rp ${cake.harga[0]} - Rp ${cake.harga[cake.length - 1]}`
    return `Rp ${cake.harga[0]}`
  }

  const renderButton = (lists) => {
    return lists.map((list) => {
      return <button className="btn btn-secondary mr-1">{list}</button>
    })
  }

  const renderDropdown = (lists) => {
    return lists.map((list) => {
      return <option value={list}>{list}</option>
    })
  }

  if(cake === undefined) return <div>Loading . . .</div>
  return (
    <div className="row">
      <div className="col-6">
        <img src={require(`../../assets/${cake.gambar}`).default} className="w-100" alt={cake.nama}/>
      </div>
      <div className="col-6">
        <div className="font-tnr sub-title accent-color bold">{cake.nama}</div>
        <div>{renderHarga()}</div>
        <p className="py-1">SKU : {cake.stok}</p>
        <div>{cake.deskripsi}</div>
        <div>
          <div className="col-2">
            <span className="bold">Bentuk</span>
          </div>
          <div className="col-10">
            {renderButton(cake.bentuk)}
          </div>
        </div>
        <div>
          <div className="col-2">
            <span className="bold">Ukuran</span>
          </div>
          <div className="col-10">
            {renderButton(cake.ukuran)}
          </div>
        </div>
        <div>
          <div className="col-2">
            <span className="bold">Topping</span>
          </div>
          <div className="col-10">
            <select className="px-1 py-1">
              {renderDropdown(cake.topping)}
            </select>
          </div>
        </div>
        <div>
          <div className="col-2">
            <span className="bold">Harga</span>
          </div>
          <div className="col-10 sub-title-2 accent-color">
            {`IDR ${cake.harga[0]}`}
          </div>
        </div>
        <div>
          <div className="col-2">
            <span className="bold">Jumlah</span>
          </div>
          <div className="col-10">
            <input type="number" defaultValue="1" className="px-1 py-1 mr-1" min="1" />
            <button className="btn btn-primary">tambah ke keranjang</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    cake: state.cakes[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps)(Detail);