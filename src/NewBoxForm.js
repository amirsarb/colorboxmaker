import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {

    constructor(props) {
        super(props)
        this.state = {

            height: "",
            width: "",
            backgroundColor: "",
            id:""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value

        })

    }

    handleSubmit(evt) {
        evt.preventDefault()
        // If all fields are not empty
        if (this.state.backgroundColor && this.state.height &&  this.state.width){
        const newBox = { ...this.state, id: uuidv4() };
        this.props.addBox(newBox)
        this.setState({ height: "", width: "", backgroundColor: "" }) }
    }

    render() {


        const { height, width, backgroundColor } = this.state
        return (
            <div>
                <h1>NewBoxForm</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="height"> Height:</label>
                    <input type="text" id="name" name="height" onChange={this.handleChange} value={height} />
                    <br />
                    <label htmlFor="width"> Width:</label>
                    <input type="text" id="width" name="width" onChange={this.handleChange} value={width} />
                    <br />
                    <label htmlFor="backgroundColor"> Color:</label>
                    <input type="text" id="backgroundColor" name="backgroundColor" onChange={this.handleChange} value={backgroundColor} />
                    <br />
                    <button>Submit New</button>
                </form>
            </div>
        )
    }

}

export default NewBoxForm