import express from "express";
import {getAllDepartamento, getAllDepartamentoById} from "../controllers/DepartamentoController.js";

const router = express.Router()

router.get('/', getAllDepartamento)
router.get('/departamentoById',getAllDepartamentoById)

export default router