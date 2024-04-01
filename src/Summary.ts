import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

/*
Summary is not doing any of the heavy lifting
Summary is using true composition by delegating the methods of the class passed into the Summary. 
Example the analyzer (WinsAnalysis) passed in will run and return a string of the tem and the wins and the outputTarget (ConsoleReport) will log the string from the analyzer
*/
export class Summary {
  // Passing WinsAnalysis and ConsoleReports and calling methods on it
  // Now we can pass any class that adheres to the interfaces
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  // takes in list of tuples and returns nothing
  buildAndPrintReport(matches: MatchData[]): void {
    // execute methods that references outside of the summary
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
