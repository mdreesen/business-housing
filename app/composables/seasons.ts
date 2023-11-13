const { DateTime } = require("luxon");

export default function seasons() {
    const winterMonths = [11, 12, 1, 2, 3];

    const date = DateTime.now().toObject();

    switch (true) {
        case winterMonths.includes(date?.month):
            return 'winter';
            break

        default:
            return 'default';
    }
};