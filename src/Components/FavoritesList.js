import React, { Component } from "react";
import axios from "axios";
import FavoriteItem from "./FavoriteItem";
// import RecipeItem from './RecipeItem';
import "../styles/auth.css";

export default class FavoritesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      error: ""
    };
  }
  componentDidMount() {
    axios
      .get("/api/favorites")
      .then(response => {
        this.setState({ favorites: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "An unkown error occured"
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <section className="recipe-list">
          {this.state.favorites.map(favorite => (
            <FavoriteItem
              favorites={favorite}
              id={favorite.recipe_id}
              dish={favorite.dish}
              ing={favorite.ing}
              dir={favorite.dir}
              comment={favorite.comment}
              img={favorite.img}
              key={favorite.dish}
            />
          ))}

          <p>{this.state.error}</p>
        </section>
      </>
    );
  }
}
