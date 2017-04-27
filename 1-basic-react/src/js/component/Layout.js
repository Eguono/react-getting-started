import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <h1><Header/></h1>
                <h1><Footer/></h1>
            </div>
        );
    };
};