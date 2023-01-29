import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm'
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxList: [
                { id: uuidv4(), height: "150", width: "150", backgroundColor: "black" }
            ]

        }

        this.AddBox = this.AddBox.bind(this)
        this.renderList = this.renderList.bind(this)
        this.RemoveBox = this.RemoveBox.bind(this)

    }
    renderList() {

    //    this.state.boxList.map((item, index) => {
    //         return (
    //             <div style={{ textAlign: "-webkit-center" }}>
    //            <div key={item.id} style={{
    //                                     textAlign: "-webkit-center",
    //                                     height: item.height + "px",
    //                                     width: item.width + "px",
    //                                     backgroundColor: item.backgroundColor
    //                                 }} >
    //                        <button onClick={this.RemoveBox} key={index} >Remove Color</button>              
    //            </div>
    //            </div>
               
    //            )
    //     });
        
        return (
            <div style={{ textAlign: "-webkit-center" }}>

                {this.state.boxList.map(item => (

                  
                        <div key={item.id} style={{
                            textAlign: "-webkit-center",
                            height: item.height + "px",
                            width: item.width + "px",
                            backgroundColor: item.backgroundColor
                        }} >
                             <button onClick={()=>this.RemoveBox(item.id)} >Remove Color</button>
                        </div>
                       
              

       ))}

    </div>



        );

    }
  
    //Remove box from boxList
    RemoveBox( index) {
 
       var newList =  this.state.boxList.filter(item =>
        item.id !== index
      )
        //  console.log(newList)
          this.setState({boxList:newList});
    }
  

    // Add box to boxList
    AddBox(box) {
        let newBox = { ...box, id: uuidv4() };
        this.setState(state => ({
            boxList: [...state.boxList, newBox]
        }));


    }   //End of add

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