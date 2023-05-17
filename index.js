const inquirer = require('inquirer');
const mysql = require('mysql2');
// pulls in the inquirer prompt questions
const questions = require('./utils/questions');
// pulls in the functions to be used based on user response to prompts
const requests = require('./utils/employee_db_fn');

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

    requests.mainMenu();
};

init();




