import React, { Component } from "react";
import "../styles/auth.css";
import axios from "axios";

class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: ""
    };
  }
  handleChange = e => {
    this.setState({ newComment: e.target.value });
  };

  handleClickAdd = () => {
    axios.post(`/api/favorites/${this.props.id}`);
  };

  handleClick = () => {
    axios
      .put("/api/recipes/" + this.props.dish, {
        comment: this.state.newComment
      })
      .then(response => {
        this.props.editComment(response.data);
      });
    window.location.reload(true);
  };
  render() {
    return (
      <li className="recipe-item">
        <h3>{this.props.dish}</h3>
        <p id="recipe-text">
          <strong>Ingredients:</strong> {this.props.ing}
        </p>

        <p id="recipe-text">
          <strong>Directions: </strong>
          {this.props.dir}
        </p>
        <p id="recipe-text">
          <strong>Comments:</strong> {this.props.comment}
        </p>
        <img src={this.props.img} alt={this.props.dish} />
        <div className="recipe-button-wrapper">
          <button id="recipe-button" onClick={this.handleClick}>
            Edit Comment
          </button>
          <input
            id="edit-comment"
            placeholder="type here to change comments"
            value={this.state.newComment}
            onChange={this.handleChange}
          />

          <button
            id="recipe-button"
            onClick={() => {
              axios.post(`/api/favorites/${this.props.id}`);
            }}
          >
            Add to Favorites
          </button>
        </div>
      </li>
    );
  }
}
export default RecipeItem;
