import { useReducer } from "react";
import CartContext from "./CartContext";

// default start for the cart to be used in the reducer function
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Reducer function logic
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // finding the accurate total amount
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //Checking if an item already exists in the Cart, if yes findng it's index , if no , giving it a value of null
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    //Assigning the existing item variable to the existing variale in the cart, if there is no existing variabe, it's vaue will be null or false like said above
    const existingItem = state.items[existingItemIndex];
    //END
    let updatedItems;
    let updatedbuttons;
    //   checking if it is true or false that the item already exists in the cart
    if (existingItem) {
      //assigns  the exsiting item and adds the amount inputted to the amount of the existing item to the updatedItem variale
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      //END

      //Get all the items in the cart and assigns the updatedItem varibale to the Existing item
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
      //END
    } else {
      //Adding the item into the cart if it doesn't exist before before
      updatedItems = state.items.concat(action.item);

      //END
    }
    return {
      //Returning the items data and totalAmount
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      buttonShow: updatedbuttons,
      //END
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    //Assigning the existing item variable to the existingItem variable
    const existingItem = state.items[existingItemIndex];
    //END

    //Finding the accurate Total Amount
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    //END
    let updatedItems;
    let updatedbuttons;

    //Checking if the amount is equals to 1
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      updatedbuttons = false;
    }
    //END
    else {
      //Get all the items in the cart, decrements the item amount and assigns them to the updatedItem
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      //END

      //Get all the items in the cart and assigns the updatedItem varibale to the Existing item
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
      //END
    }
    return {
      //Returning the items data and totalAmount
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      buttonShow: updatedbuttons,
      //END
    };
  }

  if (action.type === "Quantity") {
    return state.items.findIndex((item) => item.id === action.id).amount;
  }
  //Returns the default cart state if no condition is met
  return defaultCartState;
  //END
};

const CartProvider = (props) => {
  // using the useReducer hook
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // dispatching the cart ADD action
  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  // dispatching the cart REMOVE action
  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const getQuantityHandler = (id) => {
    dispatchCartAction({
      type: "QUANTITY",
      id: id,
    });
  };

  // Defining and Automating the cartContext functions
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    buttonShow: cartState.buttonShow,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    getQuantity: getQuantityHandler,
  };

  // rendering every content by using CartContext
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
