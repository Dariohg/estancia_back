import express from 'express'
import {createEnlace, deleteEnlace, getAllEnlaces, getEnlace, updateEnlace} from "../controllers/EnlaceController.js";

const router = express.Router()

router.get('/',getAllEnlaces)
router.get('/:id',getEnlace)
router.post('/',createEnlace)
router.put('/:id',updateEnlace)
router.delete('/:id',deleteEnlace)

export default router