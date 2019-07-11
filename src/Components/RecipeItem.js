import React, { Component } from 'react'
// import axios from 'axios'

class RecipeItem extends Component {
    render() {
        return (
            <li>
                <h3>{this.props.dish}</h3>
                <p>Ingredients: {this.props.ing}</p>
                <p>Directions: {this.props.dir}</p>
                <p>Comments: {this.props.comment}</p>
                <img
                    src={this.props.img}
                    alt={this.props.dish}
                />
                <button>Add to Favorites</button>
            </li>)
    }

}
export default RecipeItem;
