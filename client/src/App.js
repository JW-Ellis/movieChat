import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Movie from "./components/Movie/Movie";
import Avengers from "./components/Join/avengers";
import GoneGirl from "./components/Join/goneGirl";
import Joker from "./components/Join/joker";
import Midsommar from "./components/Join/midsommar";
import Parasite from "./components/Join/parasite";
import StarWars from "./components/Join/starwars";
import Chat from "./components/Chat/Chat";

const App = () => (
  <Router>
    <Route path="/" exact component={Movie} />
    <Route path="/avengers" component={Avengers} />
    <Route path="/gonegirl" component={GoneGirl} />
    <Route path="/joker" component={Joker} />
    <Route path="/midsommar" component={Midsommar} />
    <Route path="/parasite" component={Parasite} />
    <Route path="/starwars" component={StarWars} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
