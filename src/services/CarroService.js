const db = require('../config/db');
module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM dbapi.carros', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('SELECT * FROM dbapi.carros WHERE id = ?', [codigo], (error,results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (modelo, placa) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO dbapi.carros (modelo,placa) VALUES (?, ?)', 
                [modelo, placa], 
                (error,results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
                }
            );
        });
    },

    alterar: (codigo, modelo, placa) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('UPDATE dbapi.carros SET modelo = ?, placa = ? WHERE id = ?', 
                [modelo, placa, codigo], 
                (error,results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (codigo) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM dbapi.carros WHERE id = ?',[codigo], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};