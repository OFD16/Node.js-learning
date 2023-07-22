 # **NODE.JS Learning** 
# Installation
1- Clone the repository.
2- Install the required dependencies using `npm install`.

# Usage
1- Run the project with: `npm run server`.
2- Access the application on `http://localhost:5000/`.

# Getting Started

If you want to start a specific lesson, you need to navigate to the lesson path.

 `cd pathName` after `npx run server`

Example: 
```
cd ders4-middleWare
npx run server
```

**Node.js**
1- Creating an app: `npm init -y `(-y means all question answers are set to "yes").
2- In package.json, under `"scripts"`, add `"start": "node index.js"`. This allows you to run npm start to execute node index.js.
3- Nodemon package provides fast refresh during development.
4- Install nodemon as a development dependency using: `npm i -D nodemon` (-D adds the package to devDependencies, so it won't be included in the production version).
5- Start your project with: `npx nodemon start`.
6- For even faster startup, add a new script into `package.json`: ` "server": "nodemon index.js" ` (you can change the name "server" to anything you prefer).
7- To start the project, `run: npm run server`.


**Warnings**
- If you encounter the error  `"ERR_SSL_PROTOCOL_ERROR > localhost sent an invalid response" `, check your HTTP protocol (it should be "http" instead of "https"). 
  Also, verify the localhost port, e.g., http://localhost:5000/.
- Do not forget to run  `npm i ` to install dependencies.
- To install a package globally, use: ` npm i -g knex `.
- If you encounter the error:  `"Cannot find module 'C:\Users\{username}\root...\Node.js-learning\ders7\server'" `, try running:  `npm run server `.

# DataTables

**Migration**
- To create a new dataTable, use:` knex migrate:make actor_movie_table_create`.
- You can apply the migrations written in the `migrate.js` file by running: `knex migrate:up`. To undo a migration, use: `knex migrate:down`. To run all pending migrations in order, use: `knex migrate:latest`.
- Other psql commands you can use in your root project:
  * Connecting to the database: `psql -d actors -U admin` (enter password: "admin").
  * Print actor table: `SELECT * FROM actor;`.
  * Exit from the database:` \q`.
- Seed (In Develop phase, we use seeds for adding data to the database quickly):
  * To create a seed file, use: `knex seed:make 01_actor_add`.
  * To run the seeds and add data to the database, use: `knex seed:run`.
- A complicated SQL command: `SELECT movie.*, actor.* FROM actor JOIN movie ON actor.id = movie.id.` (It's hard to understand this command.)

# Project Status
 - This project has error handling problems.                             
