var FirstApp = function FirstApp() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            null,
            "Gamarjoba"
        )
    );
};

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(FirstApp, null));