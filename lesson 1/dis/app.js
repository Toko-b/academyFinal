var FirstCompo = function FirstCompo() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "h1",
            null,
            "Gamarjoba"
        ),
        React.createElement(
            "h2",
            null,
            "Gagimarjos"
        )
    );
};

var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(FirstCompo, null));