const express = require("express");
const router = express.Router();
const ControllerViajante = require("../Controllers/ControllerViajante");
const ControllerUsuario = require("../Controllers/ControllerUsuario");
const ControllerAdmin = require("../Controllers/ControllerAdmin");
const ControllerViagem = require("../Controllers/ControllerViagem");

//Contorller Administrador
router.post("/CadastrarAdmin", ControllerAdmin.cadastroAdmin);
router.post('/deleteAdmin/:id', ControllerAdmin.deleteAdmin);
router.post('/AprovandoViajantes', ControllerAdmin.aprovandoViajantes);

//Contorller Viajante
router.post('/CadastroViajante', ControllerViajante.cadastroViajante);
router.post('/UploadDocumentos', ControllerViajante.uploadDocumentos);
router.post('/deleteViajante/:id', ControllerAdmin.deleteViajante);
router.post('/editarPerfil', ControllerViajante.editarPerfil);
router.post('/AtualizarSenhaPerfil', ControllerViajante.atualizarSenhaPerfil);
router.post('/AtualizarEmailPerfil', ControllerViajante.atualizarEmail);
router.post('/deletarViajante', ControllerViajante.deleteViajante);
router.post('/avaliar-organizadora', ControllerViajante.updateAvaliacao);
router.post('/viagem-update/:id', ControllerViajante.alterarViagem);
router.post('/viagem-delete/:id', ControllerViajante.deleteViagem);
router.post('/viagem/toggle-status/:id', ControllerViajante.toggleViagemStatus);


//Controller Viagem
router.post('/cadastroViagem', ControllerViagem.cadastrarViagem);
router.post('/adicionar/:id', ControllerViagem.adicionarViagem);

//Contorller Usuario
router.get("/Logout", ControllerUsuario.logout);
router.post("/Login", ControllerUsuario.login);
router.post("/AtualizarSenha", ControllerUsuario.atualizarSenha);
router.post("/ValidarEmail", ControllerUsuario.validarEmail);
router.post("/ValidaCodigo", ControllerUsuario.validaCodigo);

module.exports = router;
