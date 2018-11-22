import React, {Component} from "react";

class Header extends Component{
    render(){
        const {title,style} = this.props;
        return (
            <h3 style={style}>{title}</h3>
        )
    }
}

export default Header;