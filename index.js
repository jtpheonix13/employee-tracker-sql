const inquirer = require('inquirer');
const sql = require('mysql2');
let questions = require('./utils/questions');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Opie1316!',
        database: 'employee_db'
    },
    console.log('Connected to the Employee Database!')
);

const init = async () => {
    try {
        let data = await inquirer.prompt(questions.startMenu)
        switch(data.startChoice) {
            case "View All Employees":
                viewEmployees();
                break;
            case "View All Departments":
                viewDepartments();
                break;

        }
    } catch(err) {
        console.log(err);
    }
}

init();

const viewEmployees = () => {
    db.query('SELECT id, name AS Department FROM department;', (err, results) => {
        if (err) console.log(err);
        console.table(results);
        init();
    })
}

const viewDepartments = () => {
    db.query('SELECT id, name AS Department FROM department;', (err, results) => {
        if (err) console.log(err);
        console.table(results);
    })
}


