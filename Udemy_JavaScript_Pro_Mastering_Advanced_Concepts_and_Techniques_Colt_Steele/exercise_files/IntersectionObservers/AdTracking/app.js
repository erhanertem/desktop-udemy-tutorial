// const observer = new IntersectionObserver(entries =>
//   entries.forEach(entry => {
//     console.log('Intersection Observed');
//     // console.log(entry);
//   })
// );
// const ad = document.querySelector('.ad');
// observer.observe(ad);

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         console.log('AD IS VISIBLE');
//       } else {
//         console.log('AD IS NOT VISIBLE');
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const percentage = Math.round(entry.intersectionRatio * 100, 2);
//         console.log(`${percentage}% of the ad visible`);
//       } else {
//         console.log('AD IS NOT VISIBLE');
//       }
//     });
//   },
//   { threshold: [0, 0.25, 0.5, 0.75, 1] }
// );

// const ad = document.querySelector(".ad");
// observer.observe(ad);

// // TRACKING HOW LONG AN AD IS VISIBLE
// let adViewTimes = [];
// let adVisibleStartTime;

// const observer = new IntersectionObserver(
//   entries => {
//     // console.log(entries);
//     entries.forEach(entry => {
//       // console.log(entry);
//       const { isIntersecting } = entry;
//       if (isIntersecting) {
//         //ad is visible
//         adVisibleStartTime = Date.now();
//       } else if (adVisibleStartTime) {
//         //ad has been visible, no longer is visible
//         let adViewDuration = Date.now() - adVisibleStartTime;
//         adViewTimes.push(adViewDuration);
//         console.log(`Ad was viewed for ${adViewDuration} ms`);
//         console.log('✅', adViewTimes);
//         adVisibleStartTime = undefined;
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// const ad = document.querySelector('.ad'); //Only first matching element with ad class is selected
// observer.observe(ad);

// OBSERVE MULTIPLE OBJECTS @ SAME TIME
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log(entry);
      const { isIntersecting } = entry;
      const { id } = entry.target;
      if (isIntersecting) {
        console.log(`${id} ad is visible`);
      } else {
        console.log(`${id} ad is NOT visible`);
      }
    });
  },
  { threshold: 0.5 }
);

const ads = document.querySelectorAll('.ad');
ads.forEach(ad => observer.observe(ad));
