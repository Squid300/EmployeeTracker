const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_db'
  });

function allDepartment(){
    db.query( 'SELECT * FROM department', function ( err, results ) {
        return results;
    });
};

function allRoles(){
    db.query( 'SELECT * FROM roles', function ( err, results ) {
        return results;
    });
};

function allEmployee(){
    db.query( 'SELECT * FROM employee', function ( err, results ) {
        return results;
    });
};

function addDepartment( id, name ){
    db.query('INSERT INTO department ( id, name ) VALUES( ?, ? )', [ id, name ], function ( err, results ) {
        return results;
    });
};

function addRole( id, title, salary, department_id ){
    db.query('INSERT INTO roles ( id, title, salary, department_id ) VALUES( ?, ?, ?, ? )', [ id, title, salary, department_id ], function ( err, results ) {
        return results;
    });
};

function addEmployee( id, first_name, last_name, roles_id, manager_id ){ id, first_name, last_name, roles_id, manager_id
    db.query('INSERT INTO roles ( id, title, salary, department_id ) VALUES( ?, ?, ?, ? )', [ id, title, salary, department_id ], function ( err, results ) {
        return results;
    });
};

export { allDepartment, allRoles, allEmployee, addDepartment, addRole, addEmployee}