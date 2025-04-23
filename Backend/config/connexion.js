import { createConnection } from 'mysql';

const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,  
    database: process.env.DB_NAME

});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connexion à la base de données établie');
});

export default connection;