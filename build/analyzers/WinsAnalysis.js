"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult"); //ENUM
// Analyzer is checking our class has the required name and signature, does not restrict
// example could add more methods
class WinsAnalysis {
    // Takes in a team name and finds how many time they won a match
    constructor(team) {
        this.team = team;
    }
    // run through the MatchData tuple and returns a string
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        // return the string types
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
