import React, { Component } from 'react';
import Recipes from './Recipes';
import NewRecipe from './NewRecipe';
import FavoritesList from './FavoritesList'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: "home"
        }
        this.changeView = this.changeView.bind(this)
    }
    changeView(newView) {
        this.setState({ view: newView })
    }

    render() {
        return (
            <header>
                <button onClick={() => {
                    this.setState({ view: "addRecipe" })
                }}>Add Recipe</button>
                <button onClick={() => { this.setState({ view: "home" }) }}>Home</button>
                <button onClick={() => { this.setState({ view: "favorites" }) }}>Favorites</button>
                {this.state.view === "home" ? <Recipes /> : null}
                {this.state.view === "addRecipe" && <NewRecipe changeView={this.changeView} />}
                {this.state.view === "favorites" && <FavoritesList changeView={this.changeView} />}
            </header>
        )
    }
}
export default Header