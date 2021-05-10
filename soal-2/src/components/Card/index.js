import React from 'react';

export default function Card({id, nama, harga, promo, gambar}) {
  const renderHarga = () => {
    if(harga.length > 1) {
      if(!promo) return <div className="text-small unchange-color">{`Rp ${harga[0]} - Rp ${harga[harga.length - 1]}`}</div>
      
      return (
        <React.Fragment>
          <div className="text-small unchange-color"><s>{`Rp ${harga[0]} - Rp ${harga[harga.length - 1]}`}</s></div>
          <div className="unchange-color">{promo}</div>
        </React.Fragment>
      )
    }

    if(!promo) return <div className="unchange-color">{harga}</div>
    return (
      <React.Fragment>
        <div className="text-small unchange-color"><s>{harga}</s></div>
        <div className="unchange-color">{promo}</div>
      </React.Fragment>
    )
  }

  return (
    <a href={`/detail/${id}`}>
      <div className="card center">
        <img className="w-100" src={require(`../../assets/${gambar}`).default} alt={nama} />
        <div className="uppercase text-small ellipsis">{nama}</div>
        {renderHarga()}
      </div>
    </a>
  )
} 