const Component = require("./Component");

class TaskListItem extends Component {
    constructor(children, priority) {
        super(children);

        this.priority = priority;
    }

    render() {
        const innerHtml = this.renderInnerHTML();
        // add tasks-item-priority when priority = true
        if (this.priority) {
            return `<li class="tasks-item tasks-item-priority">${innerHtml}</li>`;
        } else {
            return `<li class="tasks-item">${innerHtml}</li>`;
        }
    }
}

module.exports = TaskListItem;