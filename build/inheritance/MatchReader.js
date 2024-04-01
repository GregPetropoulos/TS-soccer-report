"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("../utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]), //Date
            row[1], //string
            row[2], //string
            parseInt(row[3]), //number
            parseInt(row[4]), //number
            row[5], //Type assertion 'A', 'H','D'
            row[6] //string
        ];
    }
}
exports.MatchReader = MatchReader;
