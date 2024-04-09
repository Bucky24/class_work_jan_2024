const TaskListItem = require("../../../lib/components/TaskListItem");

describe("TaskListItem", () => {
    it('should render expected content if priority is true', () => {
        // setup
        const listItem = new TaskListItem(
            ['item1', 'item2'],
            true,
        );

        const result = listItem.render();

        expect(result).toEqual("<li class=\"tasks-item tasks-item-priority\">item1 item2</li>");
    });

    it('should render expected content if priority is false', () => {
        // setup
        const listItem = new TaskListItem(
            ['item1', 'item2'],
            false,
        );

        const result = listItem.render();

        expect(result).toEqual("<li class=\"tasks-item\">item1 item2</li>");
    });
});
