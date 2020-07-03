import React, { useState } from "react"

export default ItemList

function ItemList({ items }) {
  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <ul>
        {items.map(item => (
          <Item {...item} />
        ))}
      </ul>
    </div>
  )
}

function Item({ id, img, title, price, desc }) {
  const [quantity, setQuantity] = useState(0)
  const handleQtyPlus = () => {
    setQuantity(quantity + 1)
  }
  const handleQtyMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <li key={id}>
      <div className="card">
        <div className="card-image">
          <img src={img} alt={title} />
          <span className="card-title">{title}</span>
        </div>
        <div
          className="qty-box"
          style={{
            display: "flex",
            width: "95%",
            margin: "0 auto",
          }}
        >
          <button
            className="valign-wrapper"
            onClick={handleQtyMinus}
            style={{
              width: "20%",
              height: "35px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#dfdfdf",
              cursor: "pointer",
              justifyContent: "center",
            }}
          >
            <icon className="material-icons">remove</icon>
          </button>
          <div
            className="valign-wrapper"
            style={{
              width: "25%",
              borderStyle: "solid",
              borderWidth: "1px",
              borderRight: "none",
              borderLeft: "none",
              borderColor: "#dfdfdf",
            }}
          >
            <input className="qty-input" type="number" value={quantity} />
          </div>
          <button
            className="valign-wrapper"
            onClick={handleQtyPlus}
            style={{
              width: "20%",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#dfdfdf",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <icon className="tiny material-icons">add</icon>
          </button>
          <button className="cta-add">Agregar</button>
        </div>
        <div className="card-content">
          <p>{desc}</p>
          <p>
            <b>Price: {price}$</b>
          </p>
        </div>
      </div>
    </li>
  )
}
