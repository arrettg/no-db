import React, { Component } from 'react';
import Recipes from './Recipes';
import NewRecipe from './NewRecipe';


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
                <button>Favorites</button>
                {this.state.view === "home" ? <Recipes /> : null}
                {this.state.view === "addRecipe" && <NewRecipe changeView={this.changeView} />}
            </header>
        )
    }
}
export default Header