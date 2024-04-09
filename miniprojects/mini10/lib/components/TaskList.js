const Component = require("./Component");

class TaskList extends Component {
    render() {
        const innerHtml = this.renderInnerHTML();
        return `<ul class="tasks">${innerHtml}</ul>`;
    }
}

module.exports = TaskList;