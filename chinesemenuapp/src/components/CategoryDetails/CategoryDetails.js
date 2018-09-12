import React, { Component } from "react";
import axios from "axios";
import './CategoryDetails.css';

class CategoryDetail extends Component {
    state = {
        itemDetails: [],
        itemId: null
    };

    componentDidMount() {
        this.loadDetails();
    }

    componentDidUpdate() {
        this.loadDetails();
    }

    loadDetails () {
        if (this.props.match.params.id) {
            if (!this.state.itemId || (this.state.itemId && this.state.itemId !== this.props.match.params.id)) {
                axios.get(
                    "https://davids-restaurant.herokuapp.com/menu_items.json?category=" +
                    this.props.match.params.id
                ).then(
                    res => {
                        this.setState({
                            itemDetails: res.data.menu_items,
                            itemId: this.props.match.params.id
                        });
                    },
                    err => { }
                );
            }
        }
    }

    render() {
        if (this.state.itemDetails.length > 0) {
            const tableData = this.state.itemDetails.map((item) => {
                return <tr>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                </tr>;
            });
            return <div className="table">
                <h3>
                Items in Category: ({this.props.match.params.id})
                </h3>
                <table>
                <thead>
                    <tr>
                    <th>
                        <b>Name</b>
                    </th>
                    <th>
                        <b>Description</b>
                    </th>
                    </tr>
                </thead>
                <thead>{tableData}</thead>
                </table>
            </div>; 
        } else {
            return <div>
                <p>No Data Available</p>
            </div>
        }  
    }
}

export default CategoryDetail;