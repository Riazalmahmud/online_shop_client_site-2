import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Pages/context/AuthProvider/AuthProvider";
import Header from "./Pages/SharePage/Header/Header";
import Home from "./Pages/Home/Home";
import PrivateRoute from "./Pages/SharePage/PrivateRoute/PrivateRoute";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Card/Cart";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/SharePage/Login/Login";
import AddProduct from "./Pages/SharePage/AddProduct/AddProduct";
import Register from "./Pages/SharePage/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Wish from "./Pages/Wish/Wish";
import Notfound from "./Pages/Notfound/Notfound";
import Footer from "./Pages/Footer/Footer";
import Testimonial from "./Pages/SharePage/Porduct/Testimonial/Testimonial.js";
import ProductManage from "./Pages/SharePage/Porduct/ProductManage/ProductManage.js";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/Shop">
              <Shop></Shop>
            </PrivateRoute>
            <Route path="/Cart">
              <Cart></Cart>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/AddProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/productManage">
              <ProductManage></ProductManage>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Contact">
              <Contact></Contact>
            </Route>
            <Route path="/testimonial">
              <Testimonial></Testimonial>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/Register">
              <Register></Register>
            </Route>
            <Route path="/Dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/Wish">
              <Wish></Wish>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
