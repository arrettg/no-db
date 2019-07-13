import React, { Component } from 'react';
import Header from "./Components/Header"
import NewRecipe from './Components/NewRecipe'
import Recipes from './Components/Recipes'
import FavoritesList from './Components/FavoritesList'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: "home"
    }
    this.changeView = this.changeView.bind(this)
    this.handleClickAddRecipe = this.handleClickAddRecipe.bind(this)
    this.handleClickFavorites = this.handleClickFavorites.bind(this)
    this.handleClickHome = this.handleClickHome.bind(this)
  }
  changeView(newView) {
    this.setState({ view: newView })
  }

  handleClickAddRecipe() {
    this.setState({ view: "addRecipe" })
  }
  handleClickHome() {
    this.setState({ view: "home" })
  }
  handleClickFavorites() {
    this.setState({ view: "favorites" })
  }

  render() {

    return (
      <div className="App">
        <Header />
        <nav>
          <button onClick={this.handleClickAddRecipe}>Add Recipe</button>
          <button onClick={this.handleClickHome}>Home</button>
          <button onClick={this.handleClickFavorites}>Favorites</button>
        </nav>
        {this.state.view === "home" ? <Recipes /> : null}
        {this.state.view === "addRecipe" && <NewRecipe changeView={this.changeView} />}
        {this.state.view === "favorites" && <FavoritesList changeView={this.changeView} />}

      </div>
    );
  }
}

export default App;
