import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// > Path #2 Interface-composition solution
// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// // Create an instance of the customized reader setup
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(
// 	new WinsAnalysis('Man United'),
// 	// new ConsoleReport(), //Report to HTML | console.log
// 	new HtmlReport(),
// );
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

// // > Path #1 . Inheritance Solution
// const reader = new MatchReader('football.csv');
// reader.read();

// const dateOfFirstMatch = reader.data[0][0];
// console.log('dateOfFirstMatch :', dateOfFirstMatch);

// Filter Logic Process
// let manUnitedWins = 0;
// for (let match of reader.data) {
// 	if (
// 		(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
// 		(match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
// 	) {
// 		manUnitedWins++;
// 	}
// }
// console.log(`Man United won ${manUnitedWins} games`);
