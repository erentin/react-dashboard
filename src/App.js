import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import FeaturedInfo from "./components/featuredInfo/FeaturedInfo";
import Userlist from "./components/userList/Userlist";
import Home from "./components/homepage/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
      <Router>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Switch>
            <Route path="/" element={<Home/>}>
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
