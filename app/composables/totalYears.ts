const { DateTime } = require("luxon");

export default function seasons() {
    const beginYear = 2021;

    const date = DateTime.now().toObject();
    return date.year - beginYear;
};