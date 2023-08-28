//REMOTE
const path = require('path')
// -->MODULE FEDERATION PLUGIN COMES FROM WEBPACK WITH .CONTAINER APPEND. CONTAINER REFERS TO A PROJECT WHOSE MAIN JOB IS TO PROVIDE DATA TO OTHERS. 
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './entry.js',
  output: {
    clean: true,
    path:path.resolve(__dirname, 'dist')
  },
  devServer: {
    port:4444
  },
  //MAMP SERVER: localhost:80/remote
  plugins: [
    // -->INSTANTIATE THE MODULEFEDERATION PLUGIN
    new ModuleFederationPlugin({
      name: 'remote_container',  //NOTE: DECLARES A GLOBAL VARIABLE WHICH IS A IIFE FOR THE BUNDLED FILE.
      filename: 'remoteEntry.js', //INTIAL BUNDLED CHUNK
      exposes: { //REST OF THE CHUNKS 
        './info': './info.js', 
        './createElem': './createElem.js',
        './entry': './entry.js'
      }
    })
  ]

}