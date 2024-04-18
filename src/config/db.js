require('dotenv').config();
const { exec } = require('child_process');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

async function checkDatabaseExists(connection, dbName) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`, [dbName], (err, rows) => {
            if (err) reject(err);
            resolve(rows.length > 0);
        });
    });
}

async function createDatabase() {
    return new Promise((resolve, reject) => {
        db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err, result) => {
            if (err) reject(err);
            console.log(`Banco de dados criado com sucesso: ${process.env.DB_HOST}:${process.env.DB_PORT}: :${process.env.DB_NAME}`);
            resolve();
        });
    });
}

async function runMigrations() {
    return new Promise((resolve, reject) => {
        // Executa o comando para rodar as migrações
        exec('migrate up', (error, stdout, stderr) => {
            if (error) {
                console.error('Erro ao rodar as migrations:', error);
                reject(error);
                return;
            }
            if (stderr) {
                console.error('Erro ao rodar as migrations:', stderr);
                reject(stderr);
                return;
            }
            console.log('Migrations do banco executadas com sucesso:', stdout);
            resolve();
        });
    });
}

async function runDbSeeds(next) {
    console.log('executando seeds');
    // Dados a serem inseridos na tabela carros
    const carrosData = [
        { modelo: 'Fiat Uno', placa: 'ABC1234' },
        { modelo: 'Volkswagen Gol', placa: 'DEF5678' },
        { modelo: 'Chevrolet Onix', placa: 'GHI9012' }
    ];

    // Query para inserir os dados na tabela carros
    const insertCarrosSQL = `
        INSERT INTO ${process.env.DB_NAME}.carros (modelo, placa) VALUES ?
    `;
    console.log('executando query')
    // Execute a query de inserção dos dados
    db.query(insertCarrosSQL, [carrosData.map(carro => [carro.modelo, carro.placa])], (err, result) => {
        if (err) return next('erro ao executar query', err);
        console.log("Dados inseridos na tabela 'carros' com sucesso!");
        console.log('result', result)
    });
}

async function setupDatabase() {
    try {
        const databaseExists = await checkDatabaseExists(db, process.env.DB_NAME);
        if (!databaseExists) {
            // Cria o banco de dados se não existir
            await createDatabase();

            // Executa as migrações
            await runMigrations();

            // Executa as seeds
            await runDbSeeds()
        }
        db.destroy();
    } catch (error) {
        console.error('Erro durante a configuração do banco de dados:', error);
    }
}

setupDatabase();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Exporta a conexão para ser utilizada em outros módulos
module.exports = connection;
