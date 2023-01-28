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
    // VERY IMPORTANT! REALLY BIG SECURITY ISSUE!
    const { rows } = await pool.query(`
    SELECT * FROM users WHERE id = ${id};
    `);

    return toCamelCase(rows)[0];
  }
  static async insert() {}
  static async update() {}
  static async delete() {}
}

// In static objects, an instance does not need to be created and the static methods are called directly
module.exports = UserRepo;
