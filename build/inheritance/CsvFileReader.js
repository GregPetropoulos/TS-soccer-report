"use strict";
// https://nodejs.org/api/ for reading files
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs")); //Node specific to TS -- throws an error needed a type definition file, run npm install @types/node
/*
GENERICS
1. Like a function arguments, but for types in class/function definitions
2. Allows us to define the type of a property/argument/return value at a future point
3. Used heavily when writing reusable code
*/
// <T> is shorthand for generic type which is acts as an argument, it could be named anything
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        // 2darray
        // data: string[][] = []; replaced with MatchData
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
        })
            .map(this.mapRow); //moved the map logic into the mapRow method and referenced it
    }
}
exports.CsvFileReader = CsvFileReader;
