USE employee_db;

INSERT INTO department ( id, name ) 
VALUES ( 1, "Clothing" ),
       ( 2, "Electronics" ),
       ( 3, "Food" );

INSERT INTO roles ( id, title, salary, department_id )
VALUES ( 1, "Clothing Manager", 60000, 1 ),
       ( 2, "Clothing Worker", 40000, 1 ),
       ( 3, "Electronics Manager", 60000, 2 ),
       ( 4, "Electronics Worker", 40000, 2 );

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES ( 1, "Dutch", "A", 1, NULL ),
       ( 2, "John", "B", 2, 1 ),
       ( 3, "Bill", "C", 3, NULL ),
       ( 4, "Arthur", "D", 4, 3);