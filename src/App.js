import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { HomePage } from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
