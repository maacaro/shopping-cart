import React, { useState } from "react"

export default ItemList

function ItemList({ items, onAddToCart }) {
  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <ul>
        {items.map(item => (
          <Item key={item.id} {...item} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </div>
  )
}

function Item({ id, img, title, price, desc, onAddToCart }) {
  const [quantity, setQuantity] = useState(0)
  const handleQtyPlus = () => {
    setQuantity(quantity + 1)
  }
  const handleQtyMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
  const handleOnChangeQty = ({ target: { value } }) => {
    setQuantity(Number(value))
  }
  const handleOnAddToCart = item => () => {
    const { quantity } = item
    if (quantity > 0) {
      onAddToCart(item)
      setQuantity(0)
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
            <i className="material-icons">remove</i>
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
            <input
              className="qty-input"
              type="number"
              value={quantity}
              onChange={handleOnChangeQty}
            />
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
            <i className="tiny material-icons">add</i>
          </button>
          <button
            className="cta-add"
            onClick={handleOnAddToCart({
              id,
              img,
              title,
              price,
              desc,
              quantity,
            })}
          >
            Agregar
          </button>
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
