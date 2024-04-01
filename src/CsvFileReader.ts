// https://nodejs.org/api/ for reading files

import fs from 'fs'; //Node specific to TS -- throws an error needed a type definition file, run npm install @types/node


export class CsvFileReader {
  // 2darray
   data: string[][] = [];

  constructor(public filename: string) {}
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
      
  }
}
