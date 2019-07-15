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
            <li className="recipe-item">

                <h3>{this.props.dish}</h3>
                <p><super>Ingredients:</super>{this.props.ing}</p>
                <p><super>Directions:</super> {this.props.dir}</p>
                <p><super>Comments: </super>{this.props.comment}</p>
                <img
                    src={this.props.img}
                    alt={this.props.dish}
                />
                <button onClick={this.handleClickDelete} id="nav-button">Delete</button>
            </li>



        )

    }
}
export default FavoriteItem