let btn = document.getElementById('btn');
btn.onclick = () => {
  import('./click.js').then(({ default: click }) => click());
};
