/*
 * action types
 */
let itemsCreated = 0;

/*
 * action creators
 * using thunk middleware (redux-thunk) for async action creators
 */

export function addItem(price) {
  return function(dispatch, getState) {
    let id = itemsCreated += 1;
    dispatch({ 
      type: "ADD_ITEM", 
      item: { 
        id,
        name: `Item ${id}`,
        price
      } 
    })
  }
}

export function removeItem(id) {
  return function(dispatch, getState) {
    dispatch({ type: "REMOVE_ITEM", id })
  }
}