const inquirer = require("inquirer");

async function getEmployees(cb) {
    cb([
        {
            name: 'TEster',
            id: 1,
        },
        {
            name: 'test2',
            id: 2,
        },
    ]);
}

async function getRoles(cb) {
    cb([
        {
            name: 'Director',
            id: 1,
        },
        {
            name: 'Employee',
            id: 2,
        },
    ]);
}

getEmployees((employees) => {
    getRoles((roles) => {
        inquirer.prompt([
            {
                name: 'employee',
                type: 'list',
                message: 'Select an employee',
                choices: employees.map((employee) => {
                   return {
                        name: employee.name,
                        value: employee.id,
                   };
                }),
            },
            {
                name: 'role',
                type: 'list',
                message: 'Select a role',
                choices: roles.map((role) => {
                    return {
                         name: role.name,
                         value: role.id,
                    };
                 }),
            }
        ]).then((answers) => {
            const { employee, role } = answers;
            console.log(employee, role);
            const query = "UPDATE employee SET role_id = ? WHERE id = ?";
            db.query(query, [role, employee], (err, res) => {
                
            });
        });
    });
});