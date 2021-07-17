import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";



const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products">
          <Catalog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;