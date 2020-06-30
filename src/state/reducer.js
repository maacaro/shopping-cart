export { cart, products }

function cart(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { ...action.payload }]
    default:
      return []
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
