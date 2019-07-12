import React, { Component } from 'react'


class FavoriteItem extends Component {

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
            </li>



        )

    }
}
export default FavoriteItem