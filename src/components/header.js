import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, itemsQty }) => (
  <header>
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          Shopping
        </Link>
        <ul className="right">
          {/* <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">My cart</Link>
          </li> */}
          <li>
            <Link to="/cart" style={{ display: "flex" }}>
              <i
                style={{ height: "64px", lineHeight: "64px", fontSize: "20px" }}
                className="material-icons"
              >
                shopping_cart
              </i>
              <span style={{ marginLeft: "2px", fontSize: "16px" }}>
                {itemsQty}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  itemsQty: PropTypes.number,
}

Header.defaultProps = {
  siteTitle: ``,
  itemsQty: 0,
}

export default Header
