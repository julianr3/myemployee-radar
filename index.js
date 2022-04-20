const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./config/connection.js')
const promptMain = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'main',
            message: "What would you like to do?",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update employee role"],
        },

    ])
        .then((userChoice) => {
            switch (userChoice.main) {
                case "view all departments":

                    // const allDepartments= await connection.query('SELECT * FROM department')
                    connection.promise().query('SELECT * FROM department')
                        .then(([allDepartments]) => {
                            console.table(allDepartments);
                            promptMain()
                        })


                    break;

                case "view all roles":
                    connection.promise().query('SELECT roles.id, roles.titles, roles.salary, department.name FROM roles JOIN department ON roles.department_id=department.id')
                    .then(([allRoles]) => {
                        console.table(allRoles);
                        promptMain()

                    })

                    break;

                case "view all employees":
                    connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, roles.titles, department.name AS department, roles.salary, employee.manager_id FROM employee JOIN roles ON employee.roles_id=roles.id JOIN department ON roles.department_id = department.id')
                        .then(([allEmployees]) => {
                            console.table(allEmployees);
                            promptMain()
                        })

                    break;

                case "add a department":
                    newDept();

                    break;

                case "add a role":
                    newRole();

                    break;

                case "add an employee":
                    addEmployee();

                    break;

                case "update employee role":
                    updateEmployee();

                    break;

                default:
                    build();
                    break;
            }
        })
}



// add department
const newDept = () => {
    inquirer.prompt([

        {
            type: 'input',
            name: 'deptName',
            message: "What is the name of the department?",
        },

    ]).then(answers => {
        console.log((answers.deptName) + ' has been added to the database successfully!');

        connection.promise().query(`INSERT INTO department (name) VALUES ("${answers.deptName}")`)
                    .then(() => {
                        // console.table(allRoles);
                        console.log("Department added!")
                        promptMain()

                    })
    })
}
// add a role
const newRole = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'roleName',
            message: "What is the name of the role?",
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: "What is the salary of the role?",
        },
        {
            type: 'list',
            name: 'roleName',
            message: "Which department does the role belong to?",
            choices: ['Sales', 'Engineering', 'Finance', 'Legal']
        },

    ]).then(answers => {
        console.log((answers.roleName) + ' has been added to the database successfully!');
        promptMain();
    })
}

const addEmployee = () => {
    inquirer.prompt([

        {
            type: 'input',
            name: 'empFirst',
            message: "What is the employee's first name?",
        },
        {
            type: 'input',
            name: 'empLast',
            message: "What is the employee's last name?",
        },
        {
            type: 'list',
            name: 'empRole',
            message: "What is the employee's role?",
            choices: []
        },
        {
            type: 'input',
            name: 'empLast',
            message: "What is the employee's last name?",
        },

    ]).then(answers => {
        console.log((answers.empFirst) + ' has been added to the database successfully!');
    })
}

promptMain()