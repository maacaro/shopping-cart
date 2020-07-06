import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cart from "../components/cart"

function CartPage() {
  const { items, total } = useSelector(state => state.cart)
  return (
    <Layout>
      <SEO title="Page Cart" />
      <Cart items={items} total={total} />
    </Layout>
  )
}

export default CartPage
