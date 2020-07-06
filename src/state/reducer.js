export { cart, products }

function cart(state = { items: [], total: 0, quantity: 0 }, action = {}) {
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
      return state
  }
}
function products(state = [], action) {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return [...action.payload]
    default:
      return state
  }
}
