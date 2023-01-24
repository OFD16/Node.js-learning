                                                                    NODE.JS

        1) Creating app: npm init -y (-y it means alll questinon answers are yes)
        2) In package.json > "scripts" > "start": "node index.js" > it means when you write to terminal npm start = (npm node index.js)
        3) Nodemon package provides fast refresh area
        4) When you installing nodemon pack. you need to write npm i -D nodemon (-D means you adding this package to devDependicies so when you in product version there won't be this package)
        5) You need to start your project with "npx nodemon start"
        6) Also if you want to faster it you can add new script tp package.json > "scripts" > "server": "nodemon index.js" (server = you can change name)
        7) If you want to start project you need to write "npm run server"


            Warnings:
        1) You can take this error: ERR_SSL_PROTOCOL_ERROR > localhost geçersiz bir yanıt gönderdi.
        You need to check your http protokol. It was https so it was wrong. Also check localhost port! Simple example: http://localhost:5000/

