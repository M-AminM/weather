import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import { Style } from "./styles";

function App() {
  return (
    <div className="App">
      <Style />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
