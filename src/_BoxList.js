import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm'
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxList: [
                { id: uuidv4(), height: "20", width: "20", backgroundColor: "black" }
            ]

        }

        this.AddBox = this.AddBox.bind(this)
        this.renderList = this.renderList.bind(this)

    }
    renderList() {
        return (
            <div style={{ textAlign: "-webkit-center" }}>
                {this.state.boxList.map(item => (
                    <div key={item.id} style={{
                        textAlign: "-webkit-center",
                        height: item.height + "px",
                        width: item.width + "px",
                        backgroundColor: item.backgroundColor
                    }} >
                    </div>
                ))}
                <p></p>
                <p></p>
            </div>
        );

    }
    AddBox(box) {
        let newBox = { ...box, id: uuidv4() };
        this.setState(state => ({
            boxList: [...state.boxList, newBox]
        }));


    } //End of add

    render() {

        return (
            <div style={{ textAlign: "center" }}>

                <div> <NewBoxForm addBox={this.AddBox} /></div >
                {this.renderList()}
            </div>
        )
    }

}

export default BoxList