import React from "react";
import ReactDom  from "react-dom";
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div", {id:"child"},[
        React.createElement("h1", {}, "Hello World"),
        React.createElement("h2", {}, "Hello World"),

    ]),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1", {}, "Hello World"),
        React.createElement("h2", {}, "Hello World"),

    ]),
 ])

 ReactDOM.render(parent, document.getElementById("root"));
 root.render(parent);