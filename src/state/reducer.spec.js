import { cart as cartReducer, products as productsReducer } from "./reducer"

describe("cart Reducer", () => {
  it("return the initial state", () => {
    const initialState = []

    const state = cartReducer(null, {})

    expect(state).toEqual(initialState)
  })
  it("add an item into the state", () => {
    const expectedState = [{ id: 0, desc: "foo" }]

    const state = cartReducer([], {
      type: "ADD_ITEM",
      payload: { id: 0, desc: "foo" },
    })

    expect(state).toEqual(expectedState)
  })
})

describe("product reducer", () => {
  it("return the initial state", () => {
    const initialState = []

    const state = productsReducer(null, {})

    expect(state).toEqual(initialState)
  })
  it("add a list of products to the state", () => {
    const expectedState = [
      { id: 0, desc: "foo" },
      { id: 1, desc: "bar" },
    ]

    const state = productsReducer([], {
      type: "LOAD_PRODUCTS",
      payload: [
        { id: 0, desc: "foo" },
        { id: 1, desc: "bar" },
      ],
    })

    expect(state).toEqual(expectedState)
  })
})
