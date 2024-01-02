// "https://source.unsplash.com/random"
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      //Image needs to be loaded!!!
      console.log('LOADING A NEW RANDOM IMAGE!!!');
      entry.target.src = 'https://source.unsplash.com/random';
      // console.log(entry.target);
      observer.unobserve(entry.target);
    }
  }),
    { root: null, threshold: 0.5 };
});

const allImages = document.querySelectorAll('img.lazy');
allImages.forEach(img => observer.observe(img));
