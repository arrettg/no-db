import React, { Component } from 'react'

import axios from 'axios'

class RecipeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: ""
        }
    }
    handleChange = e => {
        this.setState({ newComment: e.target.value })
    }

    handleClick = () => {
        axios
            .put("/api/recipes/" + this.props.comment, { comment: this.state.newComment })
            .then(response => {
                this.props.editComment(response.data)
            })
    }
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
                <input
                    placeholder="type here to change comments"
                    value={this.state.newComment}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Edit Comment</button>
                <button>Add to Favorites</button>
            </li>)
    }

}
export default RecipeItem;
