import React, { Component } from 'react';
import Header from "./Components/Header"
import NewRecipe from './Components/NewRecipe'
import Recipes from './Components/Recipes'
import FavoritesList from './Components/FavoritesList'
import Footer from './Components/Footer'



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
      <main className="App">
        <div className="bg"></div>

        <Header />
        <nav className="button-wrapper">
          <button id="nav-button" onClick={this.handleClickAddRecipe}>Add Recipe</button>
          <button id="nav-button" onClick={this.handleClickHome}>Home</button>
          <button id="nav-button" onClick={this.handleClickFavorites}>Favorites</button>
        </nav>
        {this.state.view === "home" ? <Recipes /> : null}
        {this.state.view === "addRecipe" && <NewRecipe changeView={this.changeView} />}
        {this.state.view === "favorites" && <FavoritesList changeView={this.changeView} />}
        <Footer />
      </main>
    );
  }
}

export default App;
