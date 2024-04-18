require('dotenv').config();
const db = require('../src/config/db');

module.exports.up = function (next) {
    // Primeira query para selecionar o banco de dados criado ou existente
        const useDatabaseSQL = `USE ${process.env.DB_NAME}`;
        db.query(useDatabaseSQL, (err, result) => {
            if (err) return next(err);

            // Terceira query para criar a tabela de carros
            const createTableSQL = `
                CREATE TABLE IF NOT EXISTS carros (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    modelo VARCHAR(45) NOT NULL,
                    placa VARCHAR(8) NOT NULL
                )
            `;
            db.query(createTableSQL, (err, result) => {
                if (err) return next(err);
                console.log("Tabela 'carros' criada com sucesso!");
                next();
            });
        });
};

module.exports.down = function (next) {
    const sql = `DROP TABLE IF EXISTS carros`;
    // Execute sua operação SQL aqui para excluir a tabela 'user'
    // Substitua 'db' pelo seu objeto de conexão com o banco de dados
    db.query(sql, (err, result) => {
        if (err) return next(err);
        console.log("Tabela 'carros' removida com sucesso!");
        next();
    });
};