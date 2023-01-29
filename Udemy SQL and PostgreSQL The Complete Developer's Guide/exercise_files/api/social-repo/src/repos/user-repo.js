const pool = require('../pool');

const toCamelCase = require('./utils/to-camel-case');

// #1.option
// module.exports = {
//   find() {},
//   findById() {},
// };

// #2.option
// class UserRepo {
//   find() {}
//   findById() {}
//   insert() {}
// }
// module.exports = new UserRepo();

// #3.option
class UserRepo {
  static async find() {
    const { rows } = await pool.query('SELECT * FROM users;');

    //get rid of _ or - and make the preceeding letter upper case to conform to camelCase for all posgrsql table field names
    return toCamelCase(rows);
  }
  static async findById(id) {
    // // VERY IMPORTANT! REALLY BIG SECURITY ISSUE!
    // const { rows } = await pool.query(`
    // SELECT * FROM users WHERE id = ${id};
    // `);
    /*
    http://localhost:3005/users/2;DROP TABLE users;
    becomes 
    SELECT * FROM users WHERE id = 2;DROP TABLE users;
    which adds an extra line of code after the semi column which ended up deleting the entire table
    IMPORTANT! THEREBY, WE NEVER EVER DIRECTLY CONCATENATE USER-PROVIDED INPUT INTO A SQL QUERY
    SOLUTION: 
    #1. WE WOULD NEED A SANITIZER TO SANITIZE USER-PROVIDED VALUE TO OUT APP.
    #2. RELY ON PG MODULE TO SANITIZE VALUES TO US. 
    
    
    #2. INSTEAD OF MAKING PG NPM MODULE TO PROCESS THE QUERY DIRECTLY, WE CHOP THE PROCESS INTO TWO. WE PROVIDE A TEMPLATE SQL QUERY AND THE VALUE SEPERATELY. 
    #2.1.FIRST, WE SEND OUT A QUERYT TEMPLATE TO POSTGRSQL DB THRU PG :
    PREPARE XHDHDHDHH (INTEGER) AS SELECT * FROM users WHERE id = $1;
    #2.2 SECOND, WE SEND OUT THE VALUE UNDER THE TEMPLATE XHDHDHDHH AND CHECKED WHETHER IT COMPLIES WITH THE TYPE
    EXECUTE XHDHDHDHH('127');
    #2.1.FIRST, WE SEND OUT A QUERYT TEMPLATE TO POSTGRSQL DB THRU PG :
    PREPARE XHDHDHDHH (INTEGER) AS SELECT * FROM users WHERE id = $1;
    LIMITATION OF THIS APPROACH IS WE CANT SPECIFIY SPECIFIC FIELDS ON THE QUERY SUCH AS:
    PREPARE XHDHDHDHH (INTEGER) AS SELECT id, username, bio FROM users
    WHERE id = $1;
    */

    // Actual query template and params are seperated and its reflected to query method on the pg pool object we predefined as params.
    // VERY IMPORTANT! WHETHER YOUR APP OR USER INPUT IS USED, THIS IS HOW WE SHOULD DO QUERIES....
    //->Single params implementation
    const { rows } = await pool.query(`SELECT * FROM users WHERE id = $1;`, [
      id,
    ]);
    // //->Multiple params implementation
    // const { rows } = await pool.query(
    //   `
    // SELECT * FROM users WHERE id = $1 AND username = $2;
    // `,
    //   [id, username]
    // );

    return toCamelCase(rows)[0];
  }
  static async insert(username, bio) {
    const { rows } = await pool.query(
      'INSERT INTO users (username, bio) VALUES($1,$2) RETURNING *;',
      [username, bio]
    );

    // RETURNING * ENABLES A FULL FLEDGED DB REPORT OF THE ITEM CHANGED IN OUR RESPONSE
    return toCamelCase(rows)[0];
  }
  static async update(id, username, bio, date) {
    const { rows } = await pool.query(
      'UPDATE users SET username =$1, bio=$2, updated_at=$4 WHERE id =$3 RETURNING *;',
      [username, bio, id, date]
    );

    // RETURNING * ENABLES A FULL FLEDGED DB REPORT OF THE ITEM CHANGED IN OUR RESPONSE
    return toCamelCase(rows)[0];
  }
  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *;',
      [id]
    );

    // RETURNING * ENABLES A FULL FLEDGED DB REPORT OF THE ITEM CHANGED IN OUR RESPONSE
    return toCamelCase(rows)[0];
  }
}

// In static objects, an instance does not need to be created and the static methods are called directly
module.exports = UserRepo;
