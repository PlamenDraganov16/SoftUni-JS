import React from "https://esm.sh/react@19.2.0";

// const h1ReactElement = React.createElement('h1', {}, 'My first react app');
// const h2ReactElement = React.createElement('h2', {}, 'The best framework ever');

// const App = React.createElement('div', {className: 'app-container'}, h1ReactElement, h2ReactElement);

var AppJSX = React.createElement(
    "div",
    { className: "app-container" },
    React.createElement(
        "h1",
        null,
        "My first JSX App!"
    ),
    React.createElement(
        "h2",
        null,
        "The best framework ever!"
    )
);
export default AppJSX;