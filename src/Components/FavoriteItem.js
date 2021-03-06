import React, { Component } from "react";
import axios from "axios";
import "../styles/auth.css";

class FavoriteItem extends Component {
  render() {
    return (
      <li className="recipe-item">
        <h3>{this.props.dish}</h3>
        <p>
          <super>Ingredients:</super>
          {this.props.ing}
        </p>
        <p>
          <super>Directions:</super> {this.props.dir}
        </p>
        <p>
          <super>Comments: </super>
          {this.props.comment}
        </p>
        <img src={this.props.img} alt={this.props.dish} />
        <button
          onClick={() => {
            axios.delete(`/api/favorites/${this.props.id}`);
          }}
          id="nav-button"
        >
          Delete
        </button>
      </li>
    );
  }
}
export default FavoriteItem;
