const inquirer = require('inquirer');

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
                viewDepartments();
                
                break;

            case "view all roles":
                viewRoles();
                    
                break;

            case "view all employees":
                viewEmployees();
                    
                break;

            case "add a department":
                viewDepartments();
                    
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

// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role