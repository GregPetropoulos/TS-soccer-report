import { MatchData } from '../MatchData'; //TYPED TUPLE
import { Analyzer } from '../Summary'; //INTERFACE
import { MatchResult } from '../MatchResult'; //ENUM

// Analyzer is checking our class has the required name and signature, does not restrict
// example could add more methods
export class WinsAnalysis implements Analyzer {
  // Takes in a team name and finds how many time they won a match
  constructor(public team: string) {}

  // run through the MatchData tuple and returns a string
  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    // return the string types
    return `Team ${this.team} won ${wins} games`;
  }
}
