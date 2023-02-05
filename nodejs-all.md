		if you want to start some lesson you need to go specific lesson path.

	example:

			cd pathName
			npx run server
			

			cd ders4-middleWare
			npx run server
			

                                                                    NODE.JS

        1) Creating app: npm init -y (-y it means alll questinon answers are yes)
        2) In package.json > "scripts" > "start": "node index.js" > it means when you write to terminal npm start = (npm node index.js)
        3) Nodemon package provides fast refresh area
        4) When you installing nodemon pack. you need to write npm i -D nodemon (-D means you adding this package to devDependicies so when you in product version there won't be this package)
        5) You need to start your project with "npx nodemon start"
        6) Also if you want to faster it you can add new script tp package.json > "scripts" > "server": "nodemon index.js" (server = you can change name)
        7) If you want to start project you need to write "npm run server"
	8) install knex and express packages >> npm i knex pg >> npm i -g knex >> npm i express >> npm i nodemon

            Warnings:
        1) You can take this error: ERR_SSL_PROTOCOL_ERROR > localhost geçersiz bir yanıt gönderdi.
        You need to check your http protokol. It was https so it was wrong. Also check localhost port! Simple example: http://localhost:5000/
        2) DO NOT FORGET npm i to terminal
        3)When you need to install your knew package to global. You need to write to termianl this command:
        npm i -g knex
        3)Error: Cannot find module 'C:\Users\CABBAR\Desktop\Node.js-learning\ders7\server' >>> npm run server cmd üzerindne




                    DataTables
        *Migration*:
    1)creating new dataTable > knex migrate:make actor_movie_table_create
    2)You can create that you wrote on migrate..js file with code by running 'knex migrate:up' command also knew migrate:down going back migration and knex migrate:latest starting all migrates in order.
    3) other psql commands you can use in your root project
        -   'psql -d actors -U admin' => connecting to database
        -    entering password  'admin'
        -    SELECT*FROM actor;  => printing actor table
        -    '\q' exit from database

        *Seed*(In Develop phase we are using seeds for adding datas to database fastly):
    1) 'knex seed:make 01_actor_add' this command will be create seed file
    2) 'knex seed:run' this command running seed and adding veriables to database
    3) SELECT movie.*, actor.* FROM actor JOIN movie ON actor.id = movie.id; very hard to understand this command.



    /////////THIS PROJECT HAS ERROR HANDLING PROBLEMS/////////