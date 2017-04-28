import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { title: "welcome" }
    }

    changeTitle(title) {
        this.setState({ title });
    }
    render() {
        return (
            <div>
                <h1><Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} /></h1>
                <h1><Footer /></h1>
            </div>
        );
    };
};