import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../MatchResult';
import { dateStringToDate } from '../utils';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]), //Date
      row[1], //string
      row[2], //string
      parseInt(row[3]), //number
      parseInt(row[4]), //number
      row[5] as MatchResult, //Type assertion 'A', 'H','D'
      row[6] //string
    ];
  }
}
