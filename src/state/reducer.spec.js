import { cart as cartReducer } from "./reducer"

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
