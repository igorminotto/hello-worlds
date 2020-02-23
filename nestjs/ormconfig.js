const config = {
    "type": process.env.DATABASE_TYPE || "mysql",
    "host": process.env.DATABASE_HOST || "localhost",
    "port": process.env.DATABASE_PORT || "3306",
    "username": process.env.DATABASE_USER || "root",
    "password": process.env.DATABASE_PASSWORD || "1234",
    "database": process.env.DATABASE_SCHEMA || "nestjs",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
};
module.exports = config;
