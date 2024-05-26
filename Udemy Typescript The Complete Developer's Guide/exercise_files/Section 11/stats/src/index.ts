import fs from 'fs';

// readFileSync reads text, image, etc. {encoding: 'utf-8'} option returns the buffer data as text string
const matches = fs
	.readFileSync('football.csv', { encoding: 'utf-8' })
	.split('\n')
	.map((row: string): string[] => {
		return row.split(',');
	});
console.log(matches);

// enum - enumeration
const MatchResult = {
	HomeWin: 'H',
	AwayWin: 'A',
	Draw: 'D',
};

let manUnitedWins = 0;
for (let match of matches) {
	if (
		(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
		(match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
	) {
		manUnitedWins++;
	}
}
console.log(`Man United won ${manUnitedWins} games`);
