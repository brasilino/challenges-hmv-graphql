module.exports = {
    host: 'http://Servi-ALB01-1VD5W3BIU2PCZ-422654258.us-east-1.elb.amazonaws.com:8080/api/',
    db: {
        client: '',
        connection: {
            database: process.env.APP_DB_NAME,
            encrypt: true,
            password: process.env.APP_DB_PASSWORD,
            server: process.env.APP_DB_HOST,
            user: process.env.APP_DB_USER,
            requestTimeout: 100000
        },
        pool: {
            min: 2,
            max: 10
        }
    }
}