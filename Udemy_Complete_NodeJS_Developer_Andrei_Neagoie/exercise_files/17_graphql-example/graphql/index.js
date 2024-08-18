const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync('**/*', {
   extensions: ['graphql'],
});

const resolversArray = loadFilesSync('**/*.resolvers.js');

module.exports = {
   typesArray,
   resolversArray,
};
