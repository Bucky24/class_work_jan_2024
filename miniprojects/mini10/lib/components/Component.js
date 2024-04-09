class Component {
    constructor(children) {
        this.children = children || [];
    }

    render() {
        throw new Error("Child class must implement render() method.");
    }

    renderInnerHTML() {
        const renderedChildren = [];
        for (const child of this.children) {
            if (typeof child === "string") {
                renderedChildren.push(child);
            } else {
                const renderedChild = child.render();
                renderedChildren.push(renderedChild);
            }
        }

        return renderedChildren.join(" ");
    }
}

module.exports = Component;