import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import HomeContent from "../../components/HomeContent";
import Category from "../../components/Category";
import CategoryDetails from "../../components/CategoryDetails/CategoryDetails";


class ChineseMenu extends Component {
    render() {
        return <div>
            <h1>Welcome to Chef Chu's Restaurant</h1>
            <NavLink to="/home">
              <button>Home</button>
            </NavLink>
            <NavLink to="/categories">
              <button>Categories</button>
            </NavLink>
            <hr />
            <Route exact path="/home" component={HomeContent} />
            <Route path="/categories" component={Category} />
            <Route path="/categories/items/:id" component={CategoryDetails} />
          </div>;
    }
}

export default ChineseMenu;