import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import './components/Slider/slider.css'
// layouts
import 'bootstrap/dist/css/bootstrap.css';
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Emeteoroids from "views/emeteoroids/emeteoroids";
// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import AdminLogin from "views/Admin_login/Admin_login"
import Comets from "views/comets/comets.js"
import meteorites from "views/meteorites/meteorites.js"
import meteoroids from "views/meteoroids/meteoroids.js"
import Chonrites from "views/chonrites/chonrites";
import Form from "views/form/form"
import ltypechondrites from "views/chonrites/ltypechonrite.js"
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/adminLogin" component={AdminLogin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/chonrites" exact component={Chonrites} />
      <Route path="/form" exact component={Form} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/comets" exact component={Comets} />
      <Route path="/meteoroids" exact component={meteoroids} />
      <Route path="/meteorites" exact component={meteorites} />
      <Route path="/ltypechondrites" exact component={ltypechondrites} />
      <Route path="/emeteoroids" exact component={Emeteoroids} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  
  document.getElementById("root")
);
