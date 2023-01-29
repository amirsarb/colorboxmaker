import React, { Component } from 'react'
class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    render() {

        const { height, width, backgroundColor } = this.props
        return (<div style={{ height: height, width: width, backgroundColor: backgroundColor }}></div>)
    }


}

export default Box