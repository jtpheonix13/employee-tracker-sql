const inquirer = require('inquirer');
const mysql = require('mysql2');
// pulls in the inquirer prompt questions
const questions = require('./utils/questions');


// connection to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Opie1316!',
        database: 'employee_db'
    },
    console.log('Connected to the Employee Database!')
);

const init = () => {
    console.log("***********************************")
    console.log("*                                 *")
    console.log("*        EMPLOYEE MANAGER         *")
    console.log("*                                 *")
    console.log("***********************************");

    mainMenu();
};


const mainMenu = async () => {
    try {
        let choice = await inquirer.prompt(questions.startMenu)

        switch(choice.selection) {
            case "View all Departments":
                viewDepartments();
                break;
            case "View all Roles": 
                viewRoles();
                break;
            case "View all Employees":
                viewEmployees();
                break;
            case "Add a Department":
                addDepartment();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add an Employee":
                addEmployee();
                break;
            case "Update an Employee Role":
                updateRole();
                break;
            case "Quit": 
                console.log("Thanks for using the employee database!");
                process.exit();
                break;
        }
    } catch(err) {
        console.log(err);
    }
}

init();

const viewDepartments = () => {
    db.query('SELECT id, name AS Department FROM department;', (err, res) => {
        if (err) console.log(err);
        console.table(res);
        mainMenu();
    });
}

const viewRoles = () => {
    db.query(`SELECT role.title AS Role, role.id, department.name AS Department, role.salary
            FROM role LEFT JOIN department ON role.department_id = department.id`, 
            (err,res) => {
                if (err) console.log(err);
                console.table(res);
                mainMenu();
            });
}

const viewEmployees = () => {
    db.query(`SELECT employees.id, 
                    employees.first_name AS First_Name,
                    employees.last_name AS Last_Name,
                    role.title,
                    department.name,
                    role.salary,
                    CONCAT (manager.first_name, " ", manager.last_name) AS Manager
                    FROM employees
                    LEFT JOIN role ON employees.role_id = role.id
                    LEFT JOIN department ON role.department_id = department.id
                    LEFT JOIN employees manager ON employees.manager_id = manager.id`,
                    (err, res) => {
                        if (err) console.log(err);
                        console.table(res);
                        mainMenu();
                    });
}

const addDepartment = async () => {
    try {
        let choice = await inquirer.prompt(questions.addDepartment)

        db.query(`INSERT INTO department (name) VALUES (?);`, choice.departmentName, (err, res) => {
            if (err) console.log(err);
            console.log("New Department Added!")
            mainMenu();
        });
    } catch(err) {
        console.log(err);
    }
}

const addRole = async() => {
    try {
        let choice = await inquirer.prompt(questions.addRole)

        db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);`, [choice.roleName, choice.roleSalary, choice.roleDepartment], (err, res) => {
            if (err) console.log(err);
            console.log("New Role Added!");
            mainMenu();
        });
    } catch(err) {
        console.log(err);
    }
}

const addEmployee = async() => {
    try {
        let choice = await inquirer.prompt(questions.newEmployee)

        db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id)
                VALUES (?, ?, ?, ?);`, [choice.firstName, choice.lastName, choice.employeeRole, choice.employeeManager], (err, res) => {
                    if (err) console.log(err);
                    console.log("New Employee Added!");
                    mainMenu();
                });
    } catch(err) {
        console.log(err);
    }
}

const updateRole = async() => {
    try {
        let choice = await inquirer.prompt(questions.updateRole)

        db.query(`UPDATE employees SET role_id = ? WHERE id = ?;`, [choice.role, choice.employee], (err, res) => {
            if (err) console.log(err);
            console.log("Employee Role Updated");
            mainMenu();
        });
    } catch(err) {
        console.log(err);
    }
}



