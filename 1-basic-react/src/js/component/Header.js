import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component{

    handleBars(e){
        const title = e.target.value;
        this.props.changeTitle(title)
    }
    render(){
        return (
            <div>
                <header><Title title={this.props.title}/></header>
                <input onChange={this.handleBars.bind(this)} value={this.props.title}/>
            </div>
        );
    };
};