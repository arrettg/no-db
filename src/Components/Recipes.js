import React, { Component } from "react";
import axios from "axios";
import RecipeItem from "./RecipeItem"


export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            error: "",
        }
    }

    componentDidMount() {
        axios
            .get("/api/recipes")
            .then(response => {
                this.setState({ recipes: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: 'An unkown error occured.'
                })
            })
    }
    editComment = newComment => {
        this.setState({ comment: newComment })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.recipes.map(recipe => (
                        <RecipeItem
                            editComment={this.editComment}
                            dish={recipe.dish}
                            ing={recipe.ing}
                            dir={recipe.dir}
                            comment={recipe.comment}
                            img={recipe.img}
                            key={recipe.dish}
                        />

                    ))}
                </ul>
                <p>{this.state.error}</p>
            </div>
        )
    }
}