// https://nodejs.org/api/ for reading files

import fs from 'fs'; //Node specific to TS -- throws an error needed a type definition file, run npm install @types/node

/*
GENERICS
1. Like a function arguments, but for types in class/function definitions
2. Allows us to define the type of a property/argument/return value at a future point
3. Used heavily when writing reusable code
*/
// <T> is shorthand for generic type which is acts as an argument, it could be named anything
export abstract class CsvFileReader<T> {
  // 2darray
  // data: string[][] = []; replaced with MatchData
  data: T[] = [];

  constructor(public filename: string) {}

  // Gets implemented by the child class
  abstract mapRow(row: string[]): T;

  read(): void {
    // Load the file, parse and format the data into 2dArray
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8' //want string not buffer
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow); //moved the map logic into the mapRow method and referenced it
  }
}
