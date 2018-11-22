import React, { Component } from "react";

export default class Card extends Component{
    /* constructor(props){
        super(props);
    }  */
    render(){
        const {style} = this.props;
        return(
            <div contentEditable={true} style={style}><ul><li></li></ul></div>
        );
    }
}