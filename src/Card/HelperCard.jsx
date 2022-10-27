import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { msg: 'Hi, There!' }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        this.setState({ msg: 'Welcome to the React world!' })
    }

    render() {
        return (
            <div>
                <h2>Message :</h2>
                <p>{this.state.msg}</p>
                <button onClick={this.handleClick}>
                    Click here!
                </button>
            </div>
        )
    }
}

export default App
