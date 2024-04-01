"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// *Soccer Stats App with TS
const ConsoleReports_1 = require("./reportTargets/ConsoleReports");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
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
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReports_1.ConsoleReports());
summary.buildAndPrintReport(matchReader.matches);
