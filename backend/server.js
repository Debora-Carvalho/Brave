const express = require("express");
const app = express();
const exphbs = require("express-handlebars").engine;
const bodyParser = require("body-parser");
const indexRoutes = require("./Routes/routesUsuariaViajante"); // Importando as rotas
const indexAdim = require("./Routes/routesUsuariaAdmin"); // Importando as rotas
const path = require('path');
const session = require('express-session');

app.use(session({
    secret: 'seuSegredoAqui', // Troque por uma chave secreta adequada
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Para ambiente de desenvolvimento, setar como false
}));

// Servir arquivos estáticos do diretório /frontend/public
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Middleware para parsing do corpo da requisição
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do Handlebars como engine de template
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    extname: '.handlebars'
}));

app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'views'));

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../frontend')));

// Configuração das rotas
app.use("/", indexRoutes);          // Roteia para as rotas usuárias
app.use("/administrador", indexAdim);       // Roteia para as rotas do administrador


// Inicialização do servidor na porta 8021
app.listen(8021, function () {
    console.log("Servidor ativo na porta 8021!");
});
