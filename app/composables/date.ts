const { DateTime } = require("luxon");

export default function date() {
    const beginYear = 2021;

    const date = DateTime.now().toObject();
    return {
        date: date,
        yearsInField: date.year - beginYear
    }
};