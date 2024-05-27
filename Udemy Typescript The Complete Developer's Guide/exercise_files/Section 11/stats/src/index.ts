import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

// > Path #2 Interface-composition solution
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of the customized reader setup
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// Filter Logic Process
let manUnitedWins = 0;
for (let match of matchReader.matches) {
	if (
		(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
		(match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
	) {
		manUnitedWins++;
	}
}
console.log(`Man United won ${manUnitedWins} games`);

// > Path #1 . Inheritance Solution
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
