import React, { Component } from 'react';
import axios from 'axios';
import FavoriteItem from './FavoriteItem'
// import RecipeItem from './RecipeItem';


export default class FavoritesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favorites: [],
            error: '',
        }
    }
    componentDidMount() {
        axios
            .get("/api/favorites")
            .then(response => {
                this.setState({ favorites: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: 'An unkown error occured'
                })
            })
    }

    render() {
        return (
            <>

                <div>
                    <ul>
                        {this.state.favorites.map(favorite => (
                            <FavoriteItem
                                favorites={favorite}
                                dish={favorite.dish}
                                ing={favorite.ing}
                                dir={favorite.dir}
                                comment={favorite.comment}
                                img={favorite.img}
                                key={favorite.dish}
                            />
                        ))}
                    </ul>
                    <p>{this.state.error}</p>
                </div>
            </>
        )
    }
}