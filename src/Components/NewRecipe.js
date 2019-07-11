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
    }

    render() {
        return (
            <form
                onSubmit={
                    e => {
                        e.preventDefault();
                        if (!this.state.image) {
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
                        }
                    }
                }
        )
    }
}