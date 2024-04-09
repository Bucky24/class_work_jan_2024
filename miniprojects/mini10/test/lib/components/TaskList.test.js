const TaskList = require("../../../lib/components/TaskList");

describe("TaskList", () => {
    it('should render expected content', () => {
        // setup
        const listItem = new TaskList(
            ['item1', 'item2'],
        );

        const result = listItem.render();

        expect(result).toEqual("<ul class=\"tasks\">item1 item2</ul>");
    });
});
