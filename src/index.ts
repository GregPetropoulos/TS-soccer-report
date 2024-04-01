// *Soccer Stats App with TS
import { ConsoleReports } from './reportTargets/ConsoleReports';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { HtmlReports } from './reportTargets/HtmlReports';

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
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something the satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);

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
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReports());

// This gets refactored as a static method in Summary no need to new up for better code 
const summary = Summary.winsAnalysisWithHtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches);
