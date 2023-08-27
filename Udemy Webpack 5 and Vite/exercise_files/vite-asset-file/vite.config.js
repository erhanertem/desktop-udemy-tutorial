const path = require('path');
const { defineConfig } = require('vite'); //NOT MANDATORY BUT PROVIDES HELPFULL SUGGESTIONS FOR VITE OPTIONS INSTEAD OF LOOK'INTO MANUAL

module.exports = defineConfig({
  //mode // --> no need to set it. Vite in preview/build mode is set to production vice versa
  //root:process.cwd() // -->Sets the CWD for vite
  root: path.resolve(__dirname, 'src'), //Now you can npx vite build command from src as well as ./
  //base:'/' // --> Default value is '/' and equavalent to setting publicPath in webpack.
  base: '/apple', // --> ALLOOWS CREATING CUSTOM HOSTING PATHS ON THE SERVER
  // base: './', // NOTE: '/' LOOKS FOR SERVER ROOT TO BE DEPLOYED @ BUT './' ALLOWS ANY SERVER LOCATION TURNING INTO A RELATIVE PATH - RELATIVE PATH DO NOT ALLOW CUSTOM PATHS.
  //publicDir: 'public' // --> Controls where vite looks for static files. Defaults to public in relation to the base path. Setting it false disables the public folder.
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    target: 'modules', //Supports browsers that support ES6 modules
    minify: 'esbuild', //defaults to esbuild (much faster than terser, comparibly ok compression) - but there is also terser
    emptyOutDir: true, //Tells vite explicitly to delete the dist folder always even if its outside the root. Without this, the outside dirs are not deleted.
    // cssCodeSplit: false, // --> If set to false separate lazy loading css files are consumed by the main css file - creating a single css file
    assetsInlineLimit: 0, // --> dataURI imports above 4kb is restricted by Vite. Intentionally we can ban dataURI conversion by setting to value 0 with no tolerance.
    //outDir:'dist', // --> defaults to 'dist' the folder where all bundled files are emitted to in relation to the base path.
    outDir: path.resolve(__dirname, 'dist'),
    assetsDir: 'myAssets', //Path is set reelative to outDir
    rollupOptions: {
      // input: {}, // --> Overrides entry point name. Default is index. Vite searches for the root dir set by base property for index.html
      input: {
        // main: './src/index.html', //->Causes problem with npx calls as its a fixed route
        main: path.resolve(__dirname, './src/index.html'),
      },
      // output: {}, // --> Controls how non-html bundled files are named and saved
      output: {
        // format: 'es', //-->Default format is 'es' stands for es-module
        entryFileNames: 'ENTRY/[name].[hash].[format].ini.js', //entry js file with a custom inner directory setup
        chunkFileNames: '[name].[hash].[format].chunk.js',
        assetFileNames: '[name].[hash].asset.[ext]',
      },
    },
  },
});
