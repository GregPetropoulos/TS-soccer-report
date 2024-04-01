"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const HtmlReports_1 = require("./reportTargets/HtmlReports");
/*
======================================
======================================
LOADING THE DATA
======================================
======================================
1st Refactored Using generics with an Abstract class
 const reader = new MatchReader('football.csv');

 2nd Refactor with interface
 Create an object that satisfies the 'DataReader' interface
 */
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something the satisfying the DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
/*
=====================================
CLASS COMPOSITION(DELEGATION) WITH INTERFACES FOR BETTER FLEXIBILITY
=====================================
=====================================
*/
// Logs the team and wins to the console
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReports()
// );
// Making an html file with the team and wins
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReports_1.HtmlReports());
summary.buildAndPrintReport(matchReader.matches);
