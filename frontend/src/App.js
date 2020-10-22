import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Forums from "./pages/Forums";
import Blogs from "./pages/Blogs";
import Owner from "./pages/Owner";
import FindStore from "./pages/FindStore";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import StoreView from "./pages/StoreView";
import AddStore from "./pages/AddStore";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/forums" component={Forums} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/owner" component={Owner} />
        {/* <Route path="/findStore/:storeName" component={props =>{
              return <StoreView {...props} />
            }} /> */}
        <Route path="/stores/:storeName" component={StoreView} />
        <Route path="/findStore" component={FindStore} />
        <Route path="/addStore" component={AddStore} />

        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
