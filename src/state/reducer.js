export { cart, products }

function cart(state = [], action = {}) {
  switch (action.type) {
    case "ADD_ITEM":
      const { items = [], total = 0, quantity = 0 } = state
      const { payload } = action
      const { price, quantity: itemQuantity } = payload
      return {
        items: [...items, { ...payload }],
        total: total + price * itemQuantity,
        quantity: quantity + itemQuantity,
      }
    default:
      return { items: [], total: 0, quantity: 0 }
  }
}
function products(state, action) {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return [...action.payload]
    default:
      return []
  }
}
