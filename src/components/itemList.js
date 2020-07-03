import React from "react"
import { inlineArrayTransformer } from "common-tags"
import { nonExecutableDefinitionMessage } from "graphql/validation/rules/ExecutableDefinitions"

export default ItemList

function ItemList({ items }) {
  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div className="card">
              <div className="card-image">
                <img src={item.img} alt={item.title} />
                <span className="card-title">{item.title}</span>
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
                  <input className="qty-input" type="number" />
                </div>
                <button
                  className="valign-wrapper"
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
                <p>{item.desc}</p>
                <p>
                  <b>Price: {item.price}$</b>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
