"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
/*
  ENUMS
  1. Primary goal is to signal to other engineers that these are all closely related values
  2. Use whenever we have small fixed set of values that are all closely related and known at compile time
  3. Creates an object with the same keys and values when converted from TS to JS
  4. Follow near identical syntax rules as normal objects, (MatchResult.HomeWin)
  
  */
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (exports.MatchResult = MatchResult = {}));
