import React from "react";
import { Route } from "react-router-dom";
// Import Pages
import Home from "./pages/Home";
// Import Style
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
