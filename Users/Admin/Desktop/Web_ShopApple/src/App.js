import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import ProdukList from "./components/ProdukList";
import Details from "./components/Details";
import Cart from "./components/Cart";

import Modal from "./components/Modal";
import { Fragment } from "react/cjs/react.production.min";
import Default from "./components/Default";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={ProdukList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/cart" component={Default} />
      </Switch>
      <Modal />
    </Fragment>
  );
}

export default App;
