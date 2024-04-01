"use strict";
// https://nodejs.org/api/ for reading files
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs")); //Node specific to TS -- throws an error needed a type definition file, run npm install @types/node
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        // 2darray
        this.data = [];
    }
    read() {
        // Load the file, parse and format the data into 2dArray
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8' //want string not buffer
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        });
    }
}
exports.CsvFileReader = CsvFileReader;
