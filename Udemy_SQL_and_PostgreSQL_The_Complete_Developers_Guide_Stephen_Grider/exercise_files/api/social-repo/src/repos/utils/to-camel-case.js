module.exports = rows => {
  //get rid of _ or - and make the preceeding letter upper case to conform to camelCase for all posgrsql table field names
  return rows.map(row => {
    const replaced = {};

    for (let key in row) {
      const camelCase = key.replace(/([-_][a-z])/gi, obj =>
        obj.toUpperCase().replace('_', '')
      );
      replaced[camelCase] = row[key];
    }

    return replaced;
  });
};
