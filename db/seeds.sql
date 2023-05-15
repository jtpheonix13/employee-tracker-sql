INSERT INTO department (name)
VALUES ('Sales'),
       ('Finance'),
       ('Engineering'),
       ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Manager', 40000, 1),
       ('Salesperson', 25000, 1),
       ('Account Manager', 90000, 2),
       ('Accountant', 75000, 2),
       ('Lead Engineer', 150000, 3),
       ('Software Engineer', 120000, 3),
       ('Legal Team Lead', 200000, 4),
       ('Lawyer', 150000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Jim', 'Halpert', 1, NULL ),
       ('Dwight', 'Schrute', 1, 1),
       ('Angela', 'Martin', 2, NULL),
       ('Kevin', 'Malone', 2, 3),
       ('Ashley', 'Rodriguez', 3, NULL),
       ('Kevin', 'Tupik', 3, 4),
       ('Sarah', 'Lourd', 4, NULL),
       ('Tom', 'Allen', 4, 4);