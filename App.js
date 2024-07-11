const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {id: "headOne"}, "This is headOne"),
        React.createElement("h2", {id: "headTwo"}, "This is headTwo")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {id: "headOne"}, "This is headOne"),
        React.createElement("h2", {id: "headTwo"}, "This is headTwo")
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);