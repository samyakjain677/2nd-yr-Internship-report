import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, NavLink } from "react-router-dom";
import Router from "./router";
import store from "./redux/store";
import { Provider } from "react-redux";

const Navigation = props => {
  return (
    <section className="hero is-primary is-bold">
      <nav
        class="hero-body navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item ">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="navbar-item ">
            <NavLink to="/cart">Cart</NavLink>
          </div>
        </div>
      </nav>
    </section>
  );
};
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navigation />
          <Router />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
