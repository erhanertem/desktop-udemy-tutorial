// THIS FILE ENABLES US TO RUN JSX JS CODE INSIDE A NODEJS SERVER ENV
/**`
 * "@babel/core"
 * "@babel/preset-env"
 * "@babel/preset-react"
 * "@babel/register"
 */
require('@babel/register')({ extensions: ['.js', '.jsx'] });

require('./server.js');
