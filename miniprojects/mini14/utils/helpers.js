const dayjs = require("dayjs");

const helpers = {
    get_nice_date: (datetime) => {
        return dayjs(datetime).format("YYYY-M-D");
    },
    format_money: (raw_money) => {
        return `$${raw_money.toLocaleString()}`;
    }
};

module.exports = helpers;