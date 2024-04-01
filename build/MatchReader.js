"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = []; //assign the transformed data to matches an empty array
    }
    load() {
        // Loads the file given
        this.reader.read();
        // transform the data into MatchData tuple
        // assign the transform the data into matches
        this.matches = this.reader.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5], //Type assertion 'A', 'H','D'
                row[6]
            ];
        });
    }
}
exports.MatchReader = MatchReader;
