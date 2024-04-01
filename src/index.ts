// *Soccer Stats App with TS
import { ConsoleReports } from './reportTargets/ConsoleReports';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

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

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReports()
);

summary.buildAndPrintReport(matchReader.matches);
