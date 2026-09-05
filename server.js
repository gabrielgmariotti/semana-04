const { DatabaseSync } = require("node:sqlite");
const db = new DatabaseSync("Clientes.db");

const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/clientes", (req, res) => {
    const todos = db.prepare("SELECT * FROM clientes").all();
    res.json(todos);
})

app.get("/sumidos", (req, res) => {
    const sumidos = db.prepare("SELECT * FROM clientes WHERE ultima_compra < '2026-05-11'").all();
    res.json(sumidos);
})

app.listen(3000);
console.log("Servidor rodando em http://localhost:3000");