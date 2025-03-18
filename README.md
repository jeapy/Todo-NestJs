# Todo-NestJs

## Description
API Rest de gestion de tâche

## Fonctionalité
    - User (CRUD)
    - Todo (CRUD)
## URL
    BASE URL : http://localhost:3030

    ENDPOINT

    ------------- USER -----------
    All user : GET /user

    One user : GET /user/:id

    Create user : POST /user
            {   
                "name": string,
                "username": string,
                "password": string
            }
    Update user : PUT /user/:id
            {   
                "name": string
            }

    ------------- TODO -----------
    All todo : GET /todo

    One todo : GET /todo/:id

    Create todo : POST /todo
            {   
                "title": string,
                "description": string
            }
    Complete todo : PUT /todo/:id/completed
            
##
- NestJs
- MariaDB