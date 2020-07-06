import React from "react"
import { Link } from "gatsby"

export default Cart

function Cart({ items }) {
  return (
    <div className="container">
      <div className="cart">
        <h5>You have ordered:</h5>
        <ul className="collection">
          {(items &&
            items.map(item => {
              return (
                <li className="collection-item " key={item.id}>
                  <div className="item-img">
                    <img src={item.img} alt={item.img} className="" />
                  </div>
                  <div className="item-desc">
                    <span className="title">{item.title}</span>
                    <p>{item.desc}</p>
                    <p>
                      <b>Price: {item.price}$</b>
                    </p>
                    <p>
                      <b>Quantity: {item.quantity}</b>
                    </p>
                    <div className="add-remove">
                      <Link to="/cart">
                        <i className="material-icons">arrow_drop_up</i>
                      </Link>
                      <Link to="/cart">
                        <i className="material-icons">arrow_drop_down</i>
                      </Link>
                    </div>
                    <button className="waves-effect waves-light btn pink remove">
                      Remove
                    </button>
                  </div>
                </li>
              )
            })) || <p>Nothing.</p>}
        </ul>
      </div>
    </div>
  )
}
