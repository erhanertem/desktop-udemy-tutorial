// Type annotation with arrays
const carDealers: string[] = [];
// Inferred array
const carMakers = ['ford', 'chevy', 'toyota'];
const dates = [new Date(), new Date()];

// Nested array type annotation
const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake_: string[][] = [];

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push('2045-10-10');
importantDates.push(new Date());
// importantDates.push(100);
