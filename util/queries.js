import mysql from 'mysql2';
import cTable from 'console.table';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_db'
  });

export function allDepartment(){
    db.query( 'SELECT * FROM department', function ( err, results ) {
        return console.table(results);
    });
};

export function allRoles(){
    db.query( 'SELECT * FROM roles', function ( err, results ) {
        return console.table(results);
    });
};

export function allEmployee(){
    db.query( 'SELECT * FROM employee', function ( err, results ) {
        if(err){
            console.log(err);
        }else{
            return console.table(results);
        };
    });
};

export function addDepartment( id, name ){
    db.query('INSERT INTO department ( id, name ) VALUES( ?, ? )', [ id, name ], function ( err, results ) {
        if(err){
            console.log(err);
        }else{
            return results;
        };
    });
};

export function addRole( id, title, salary, department_id ){
    db.query('INSERT INTO roles ( id, title, salary, department_id ) VALUES( ?, ?, ?, ? )', [ id, title, salary, department_id ], function ( err, results ) {
        if(err){
            console.log(err);
        }else{
            return results;
        };
    });
};

export function addEmployee( id, first_name, last_name, roles_id, manager_id ){ id, first_name, last_name, roles_id, manager_id
    db.query('INSERT INTO employee ( id, first_name, last_name, roles_id, manager_id ) VALUES( ?, ?, ?, ?, ? )', [ id, first_name, last_name, roles_id, manager_id ], function ( err, results ) {
        if(err){
            console.log(err);
        }else{
            return results;
        };
    });
};

export function updateRole( employeeId, roleId ){
    db.query( `UPDATE employee SET roles_id = ? WHERE id = ?`, [roleId, employeeId], function ( err, results){
        if(err){
            console.log(err);
        }else{
            return results;
        };
    });
};