import React from "react";
import ProductListItem from "./productListItem";
import { connect } from "react-redux";
function ProductList(props) {
  return (
    <div className="columns">
      {props.products.map(product => (
        <ProductListItem
          product={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cart={props.cart}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "Add", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "Remove", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
