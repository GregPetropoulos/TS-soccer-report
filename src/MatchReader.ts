import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = []; //assign the transformed data to matches an empty array

  constructor(public reader: DataReader) {}
  load(): void {
    // Loads the file given
    this.reader.read();

    // transform the data into MatchData tuple
    // assign the transform the data into matches
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, //Type assertion 'A', 'H','D'
        row[6]
      ];
    });
  }
}
