module.exports = {
    HOST: '165.22.123.116',
    USER: 'root',
    PASSWORD: '',
    DB: 'domicilio_api_db',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}