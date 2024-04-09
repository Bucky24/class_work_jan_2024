const Component = require("./Component");
const dayjs = require("dayjs");

class Header extends Component {
    render() {
        const now = dayjs();
        const formattedDate = now.format("YYYY-MM-DD");
        return `<header class="header"><h1>Todo Today</h1><p>${formattedDate}</p></header>`;
    }
}

module.exports = Header;