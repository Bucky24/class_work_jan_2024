const dayjs = require("dayjs");

const Header = require("../../../lib/components/Header");

describe("Header", () => {
    it('should render a well formed header with the current date', () => {
        const header = new Header();

        const result = header.render();

        const formattedDate = dayjs().format("YYYY-MM-DD");

        expect(result).toEqual(`<header class=\"header\"><h1>Todo Today</h1><p>${formattedDate}</p></header>`);
    });
});