import React, { Component } from "react";
import axios from 'axios';

class Category extends Component {
  state = {
    items: []
  };

componentDidMount() {
  axios.get('https://davids-restaurant.herokuapp.com/categories.json').then(
      (res) => {
          this.setState({
              items: res.data
          })
      },
      (error) => {
          console.log(error);
      })
}

getDetails(i) {
    this.props.history.push({ pathname: '/categories/items/' + i.short_name});
}

render() {
    let menuItems = this.state.items.map( (item) => {
        return <li 
          key={item.id}
          onClick={() => {this.getDetails(item)}}
        >
          {item.name} - ({item.short_name})
      </li>;
    })
  const style={
      float: 'left'
  }
  return (
    <div style={style}>
      <h3>Menu Categories</h3>
      <ul>
        {menuItems}
      </ul>
    </div>
  );
}
}

export default Category;