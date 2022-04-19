const inquirer = require('inquirer');
const cTable = require('console.table');

const promptMain = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'main',
            message: "What would you like to do?",
            choices: ["view all departments","view all roles", "view all employees", "add a department", "add a role", "add an employee", "update employee role"],
        },

    ])
    .then(userChoice => {
        switch (userChoice.main) {
            case "view all departments":
                console.table(department);
                
                break;

            case "view all roles":
                console.table(roles)
                    
                break;

            case "view all employees":
                console.table(employee);
                    
                break;

            case "add a department":
                newDept();
                    
                break;

            case "add a role":
                viewRoles();
                        
                break;
    
            case "add an employee":
                viewEmployees();
                        
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

promptMain()

// add department
const newDept = () => {
    return inquirer.prompt([
        
        {
            type: 'input',
            name: 'deptName',
            message: "What is the name of the department?",
        },
       
    ]).then(answers => {
        console.log(answers);
        // const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        // teamMembers.push(manager);
        promptMain();
    })
}