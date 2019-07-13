import React, { Component } from 'react'
import axios from 'axios';


class FavoriteItem extends Component {


    handleClickDelete = () => {
        axios
            .delete('/api/favorites/' + this.props.dish)
        window.location.reload()
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
                <button onClick={this.handleClickDelete}>Delete</button>
            </li>



        )

    }
}
export default FavoriteItem