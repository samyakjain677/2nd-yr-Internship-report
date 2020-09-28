import React from "react";
import box from "bulma";

function ProductListItem(props) {
  const itemcount = props.cart.filter(item => item.id === props.product.id)[0];
  return (
    <div className="box column is-4">
      <h2> {props.name}</h2>
      <img
        width="200px"
        heigth="100px"
        title={props.product.name}
        src={`/products/${props.product.image}`}
      />
      <div>{props.product.description}</div>
      <div> {props.product.price}</div>
      <div>
        <button
          className="button is-success"
          onClick={() => props.addToCart(props.product)}
        >
          Add to cart
        </button>
        {itemcount ? (
          <button
            className="button is-danger"
            onClick={() => props.removeFromCart(props.product)}
          >
            Remove
          </button>
        ) : null}
      </div>
    </div>
  );
}
export default ProductListItem;
