import { createContext, useReducer } from "react";

const CartContext = createContext({
  item: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const exist = state.items.findIndex((item) => item.id === action.item.id);

    const updateItems = [...state.items];
    if (exist > -1) {
      const updateItem = {
        ...state.items[exist],
        quantity: state.items[exist].quantity + 1,
      };
      updateItems[exist] = updateItem;
    } else {
      updateItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state.items, items: updateItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const exist = state.items.findIndex((item) => item.id === action.id);

    const existCartItem = state.items[exist];
    const updateItems = [...state.items];
    if (existCartItem.quantity == 1) {
      updateItems.splice(exist, 1);
    } else {
      const updateItem = {
        ...existCartItem,
        quantity: existCartItem.quantity - 1,
      };
      updateItems[exist] = updateItem;
    }

    return { ...state, items: updateItems };
  }

  return state;
}

export function CreateContextProvider({ children }) {
  const [cart, dispatchcartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchcartAction({ type: "ADD_ITEM", item });
  }
  function removeItem(id) {
    dispatchcartAction({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    item: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children} </CartContext.Provider>
  );
}
export default CartContext;
