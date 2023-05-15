SELECT employees.id,
       employees.first_name AS First,
       employees.last_name AS Last,
       role.title,
       department.name,
       role.salary,
       manager.first_name AS Manager FROM employees JOIN role ON employees.role_id
       JOIN department ON role.department_id = department_id LEFT OUTER JOIN
       employee manager ON employees.manager_id = manager.id;
