const path = require('path');
const { defineConfig } = require('vite'); //NOT MANDATORY BUT PROVIDES HELPFULL SUGGESTIONS FOR VITE OPTIONS INSTEAD OF LOOK'INTO MANUAL

module.exports = defineConfig({
  //mode // --> no need to set it. Vite in preview/build mode is set to production vice versa
  //root:process.cwd() // -->Sets the CWD for vite
  root: path.resolve(__dirname, 'src'), //Now you can npx vite build command from src as well as ./
  //base:'/' // --> Default value is '/' and equavalent to setting publicPath in webpack
  //publicDir: 'public' // --> Controls where vite looks for static files. Defaults to public in relation to the base path. Setting it false disables the public folder.
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    target: 'modules', //Supports browsers that support ES6 modules
    minify: 'esbuild', //defaults to esbuild (much faster than terser, comparibly ok compression) - but there is also terser
    emptyOutDir: true, //Tells vite explicitly to delete the dist folder always even if its outside the root. Without this, the outside dirs are not deleted.
    //outDir:'dist', // --> defaults to 'dist' the folder where all bundled files are emitted to in relation to the base path.
    outDir: path.resolve(__dirname, 'dist'),
    assetsDir: 'myAssets', //Path is set reelative to outDir
    rollupOptions: {
      // input: {}, // --> Set an entry point name. Default is index.  Vite searches for the root dir set by base property for index.html
      // output: {}, // --> Controls how bundled files are named and saved
    },
  },
});
