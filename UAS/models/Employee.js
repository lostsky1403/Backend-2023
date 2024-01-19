// import database
const db = require("../config/database");

// make employee model
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;}
  static all() {
    return new Promise((resolve, reject) => {
      // lakukan query ke db untuk ambil data
      const sql = "SELECT * FROM employees";
      db.query(sql, (sql, results) => {
        resolve(results);
      });
    });
  }

  /**

   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data employee yang baru diinsert.
   */

  // promise 1
  static async create(Employee) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO employees SET ?";
      db.query(sql, Employee, (err, results) => {
        resolve(results.insertId);
      });
    });

    // promise 2
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM employees WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  static find(id) {
    // lakukan promise, select by id
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM employees WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  static async update(id, data) {
    // update data
    await new Promise((resolve, reject) => {
      // query untuk update data
      const sql = "UPDATE employees SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    // select data by id
    const employee = await this.find(id);
    return employee;
  }
  static search(name) {
    return new Promise((resolve, reject) => {
        // query untuk select data berdasarkan name
        // Like berguna untuk mencari data yang sesuai dengan parameter yang diberikan
        const sql = `SELECT * FROM employees WHERE name LIKE '%${name}%' `;
        db.query(sql, (err, results) => {
            resolve(results);
        });
    });
}

  static getByStatus(status) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM employees WHERE status = ?';

      db.query(sql, status, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }


  static async delete(id) {
    // query delete
    return new Promise((resolve, reject) => {
      // query sql
      const sql = "DELETE FROM employees WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
    });
    });
  }
}

// export model
module.exports = Employee;
