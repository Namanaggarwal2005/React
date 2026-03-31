const reactElement = {
    type: 'h1',
    props: {
        children: 'Hello, Custom React!'
    }
};

const root = document.getElementById('root');

function createReactElement(root, reactElement) {
    const element = document.createElement(reactElement.type);

    for (let prop in reactElement.props) {
        if (prop === 'children') {
            const textNode = document.createTextNode(reactElement.props[prop]);
            element.appendChild(textNode);
        } else {
            element.style[prop] = reactElement.props[prop];
        }
    }

    root.appendChild(element);
}

createReactElement(root, reactElement);
