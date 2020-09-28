import { createStore, combineReducers } from "redux";
import CartReducer from "../features/cart/cartReducer";

const rootReducer = combineReducers({
  cart: CartReducer
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
