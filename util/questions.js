export const initQuestion = [
    {
        type: 'list',
        name: 'start',
        message: 'what would you like to do?',
        choices: [
            'view all departments', 
            'view all roles', 
            'view all employees',
            'add a department', 
            'add a role',
            'add an employee',
            'and update an employee role',
        ],
        loop: false,
    }
];

export const addEmployeeQuestions = [
    {
        type: 'number',
        name: 'id',
        message: 'Employees id'
    },
    {
        type: 'input',
        name: 'firstName',
        message: 'first name'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'last name'
    },
    {
        type: 'number',
        name: 'roleId',
        message: 'id of employees role'
    },
    {
        type: 'number',
        name: 'managerId',
        message: 'id of employees manager'
    },
];

export const addRoleQuestions = [
    {
        type: 'number',
        name: 'id',
        message: 'id for role'
    },
    {
        type: 'input',
        name: 'title',
        message: 'title of role'
    },
    {
        type: 'number',
        name: 'salary',
        message: 'salary of role'
    },
    {
        type: 'number',
        name: 'departmentId',
        message: 'id of roles department'
    }
];

export const addDepartmentQuestions = [
    {
        type: 'number',
        name: 'id',
        message: 'departments id'
    },
    {
        type: 'input',
        name: 'name',
        message: 'name of department'
    }
];

export const updateRoleQuestions = [
    {
        type: 'nubmer',
        name: 'employeeId',
        message: 'id of employee you want to update'
    },
    {
        type: 'number',
        name: 'roleId',
        message: 'new role for employee'
    }
];