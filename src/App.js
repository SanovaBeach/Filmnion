import React from "react";
import { Route, Switch } from "react-router-dom";
import "./_main.scss";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:media_type/" component={Movies} />
        <Route exact path="/:media_type/:titleId" component={MovieDetail} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
