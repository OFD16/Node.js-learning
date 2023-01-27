module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "actors",
                user: "admin",
                    password: "admin"
        },
        migrations: {
            directory: "./data/migrations"
        },
        seeds: {
            directory: "./data/seeds"
        }
    },
    production: {
        //api ımızı deploy ettiğimiz servis bağlantıları olucak
    }
}