let departmentArray = [];
let roleArray = [];
let employeeArray = [];

// initial question

const startMenu = [
    {
        type: "list",
        name: "selection",
        message: "What would you like to do?",
        choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
    }
];

// prompt for getting new department info
const addDepartment = [
    {
        type: "input",
        name: "departmentName",
        message: "What is the department name?"
    }
];

// prompt for adding new role
const addRole = [
    {
        type: "input",
        name: "roleName",
        message: "What is the role called?"
    },
    {
        type: "input",
        name: "roleSalary",
        message: "What is the salary for the role?"
    },
    {
        type: "list",
        name: "roleDepartment",
        message: "What department does the role belong to?",
        choices: departmentArray
    }
];

// prompt for new employee add
const newEmployee = [
    {
        type: "input",
        name: "firstName",
        message: "Enter the employee's First Name."
    },
    {
        type: "input",
        name: "lastName",
        message: "Enter the employee's Last Name."
    },
    {
        type: "list",
        name: "employeeRole",
        message: "What is the employees role?",
        choices: roleArray
    },
    {
        type: "list",
        name: "employeeManager",
        message: "Who is the employee's manager?",
        choices: employeeArray
    }
];

// prompts for updating employees role
const updateRole = [
    {
        type: "list",
        name: "employee",
        message: "Choose an employee to update.",
        choices: employeeArray
    },
    {
        type: "list",
        name: "role",
        message: "Select a new role to assign to this employee.",
        choices: roleArray
    }
]
