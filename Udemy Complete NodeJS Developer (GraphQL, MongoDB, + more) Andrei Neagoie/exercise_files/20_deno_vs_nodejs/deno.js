// LESSON 20 - DENO vs NODEJS
// function a() {
//     console.log(42);
// }
// a();

// // const food = 'hate';
// const food = Deno.args[0]; // https://deno.land/api@v1.41.3?s=Deno.args
// if (food === 'love') {
//     console.log('🦖 ...Dino is born');
// } else {
//     console.log('🥚 ...this egg needs some love');
// }
// @CLI --> deno run deno.js "love"

// const food = Deno.args[0]; // https://deno.land/api@v1.41.3?s=Deno.args
// const parent = Deno.args[1];
// if (food === 'love' && parent === 'ryan') {
//     console.log(`🦖 ...Dino is born w/ ${parent}`);
// } else {
//     console.log('🥚 ...this egg needs some love');
// }
// // @CLI --> deno run deno.js "love" "ryan"
// console.table(Deno.metrics());

// setTimeout(() => {
//     console.log('check');
//     console.table(Deno.metrics());
// }, 1000);
