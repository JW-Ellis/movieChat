import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Movie from "./components/Movie/Movie";
import Avengers from "./components/Join/avengers";
import GoneGirl from "./components/Join/goneGirl";
import Joker from "./components/Join/joker";
import Midsommar from "./components/Join/midsommar";
import Parasite from "./components/Join/parasite";
import StarWars from "./components/Join/starwars";
import Drive from "./components/Join/drive";
import Rings from "./components/Join/rings";
import Oldboy from "./components/Join/oldboy";
import Terminator from "./components/Join/terminator";
import Thing from "./components/Join/thing";
import Monty from "./components/Join/monty";
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
    <Route path="/drive" component={Drive} />
    <Route path="/rings" component={Rings} />
    <Route path="/oldboy" component={Oldboy} />
    <Route path="/terminator" component={Terminator} />
    <Route path="/thing" component={Thing} />
    <Route path="/monty" component={Monty} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
