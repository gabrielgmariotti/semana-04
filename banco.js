const { DatabaseSync } = require("node:sqlite");
const db = new DatabaseSync("Clientes.db");
db.exec("CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY, nome TEXT, telefone TEXT, ultima_compra TEXT)");
db.exec("DELETE FROM clientes");
db.exec("INSERT INTO clientes (nome, telefone, ultima_compra) VALUES ('Maria Silva', '51 999990001', '2026-08-01')");
db.exec("INSERT INTO clientes (nome, telefone, ultima_compra) VALUES ('Joao Souza', '51999990002', '2026-07-28')");
db.exec("INSERT INTO clientes (nome, telefone, ultima_compra) VALUES ('Ana Lima', '51999990003', '2026-03-15')");

const todos = db.prepare("SELECT * FROM clientes").all();
console.log(todos);

const sumidos = db.prepare("SELECT * FROM clientes WHERE ultima_compra < '2026-05-11'").all();
console.log("=== CLIENTES SUMIDOS ===");
console.log (sumidos);
