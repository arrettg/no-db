import React, { Component } from 'react'
import axios from 'axios'

export default class NewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: "",
            ing: "",
            dir: "",
            comment: "",
            img: "",
            error: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form
                onSubmit={
                    e => {
                        e.preventDefault();
                        if (!this.state.img) {
                            this.setState({ error: "Image is required!" })
                        } else if (!this.state.comment) {
                            this.setState({ error: "Comment is required!" })
                        } else {
                            axios.post("/api/recipes", {
                                dish: this.state.dish,
                                ing: this.state.ing,
                                dir: this.state.dir,
                                comment: this.state.comment,
                                img: this.state.img,
                            })
                                .then(response => {
                                    this.props.changeView("home")
                                })
                                .catch(error => {
                                    console.log(error)
                                    this.setState({
                                        error: "Something went wrong"
                                    })
                                })
                        }
                    }}
            >
                <input
                    name='dish'
                    placeholder='dish name'
                    onChange={this.handleChange}
                    value={this.state.dish}
                />
                <input
                    name='ing'
                    placeholder='ingredients'
                    onChange={this.handleChange}
                    value={this.state.ing}
                />
                <input
                    name='dir'
                    placeholder='directions'
                    onChange={this.handleChange}
                    value={this.state.dir}
                />
                <input
                    name='comment'
                    placeholder='type some comments here'
                    onChange={this.handleChange}
                    value={this.state.comment}
                />
                <input
                    name='img'
                    placeholder='paste an image here'
                    onChange={this.handleChange}
                    value={this.state.img}
                />
                <button type="reset">Cancel</button>
                <button type="submit">"Submit"</button>
                {this.state.error ? <p>{this.state.error}</p> : null}
            </form>
        )
    }
}