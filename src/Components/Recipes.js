import React, { Component } from "react";
import axios from "axios";
import RecipeItem from "./RecipeItem";
import "../styles/auth.css";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      recipes: [{}]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/recipes")
      .then(response => {
        this.setState({ recipes: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "An unkown error occured."
        });
      });
  }
  editComment = newComment => {
    this.setState({ comment: newComment });
  };

  handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.recipes;
      newList = currentList.filter(recipe => {
        const lc = recipe.dish.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.recipes;
    }
    this.setState({
      recipes: newList
    });
  }

  render() {
    // console.log(this.state);
    return (
      <section className="recipe-list">
        {/* <input
          type="text"
          className="search"
          onChange={this.handleChange}
          placeholder="search"
        ></input> */}

        {this.state.recipes.map(recipe => (
          <RecipeItem
            editComment={this.editComment}
            id={recipe.recipe_id}
            dish={recipe.dish}
            ing={recipe.ing}
            dir={recipe.dir}
            comment={recipe.comment}
            img={recipe.img}
            key={recipe.dish}
          />
        ))}

        <p>{this.state.error}</p>
      </section>
    );
  }
}
