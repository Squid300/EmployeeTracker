import inquirer from 'inquirer';
import { allDepartment, allRoles, allEmployee, addDepartment, addRole, addEmployee, updateRole } from "./util/queries.js";
import { initQuestion, addEmployeeQuestions, addRoleQuestions, addDepartmentQuestions, updateRoleQuestions } from "./util/questions.js";

function newEmployee() {
    return inquirer
            .prompt( addEmployeeQuestions )
            .then(( answers) => {
                addEmployee( answers.id, answers.firstName, answers.lastName, answers.roleId, answers.managerId );
                console.log("Employee Added!");
                init();
            })
            .catch(( error ) => console.log( error ))
};

function newRole() {
    return inquirer
            .prompt( addRoleQuestions )
            .then(( answers ) => {
                addRole( answers.id, answers.title, answers.salary, answers.departmentId );
                console.log("Role Added!");
                init();
            })
            .catch(( error ) => console.log( error ))
};

function update() {
    return inquirer
            .prompt( updateRoleQuestions )
            .then(( answers ) => {
                updateRole( answers.employeeId, answers.roleId );
                console.log("Role updated!");
                init();
            })
};

function newDepartment() {
    return inquirer
            .prompt( addDepartmentQuestions )
            .then(( answers ) => {
                addDepartment( answers.id, answers.name );
                console.log("Department added!");
                init();
            })
            .catch(( error ) => console.log( error ))
};

export function init() {
    return inquirer
            .prompt( initQuestion )
            .then(( answers ) => {
                if( answers.start === 'view all departments' ){
                    allDepartment();
                    init();
                }else if( answers.start === 'view all roles' ){
                    allRoles();
                    init();
                }else if( answers.start === 'view all employees' ){
                    allEmployee();
                    init();
                }else if( answers.start === 'add a department'){
                    newDepartment();
                }else if( answers.start === 'add a role' ){
                    newRole();
                }else if( answers.start === 'add an employee' ){
                    newEmployee();
                }else if( answers.start === 'and update an employee role' ){
                    update();
                }
            })
            .catch(( error ) => console.log( error ))
};

init();