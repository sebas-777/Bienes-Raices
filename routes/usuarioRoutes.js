import express from "express";
import {formularioLogin,formularioRegistro,formularioOlvidePassword} from '../controllers/usuarioControllers.js'

const router = express.Router();

// Routing 
router.get('/login', formularioLogin);
router.get('/register',formularioRegistro)
router.get('/forgot-password',formularioOlvidePassword)


export default router