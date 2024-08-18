let d;

d = new Date();
d = d.toString();

d = new Date(2021, 0, 11, 12, 4, 3);
d = new Date('2021-07-11');
d = new Date('2021/07/11');
d = new Date('2021-07-11T12:30:00');
d = new Date('2021/07/11 12:30:00');

d = d.getTime();
d = d.valueOf();

d = new Date(1625995800000);

d = Date.now();

console.log(d, typeof d);
