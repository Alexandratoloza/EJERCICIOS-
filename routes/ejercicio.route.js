import { Router } from 'express'
import { createEjercicio, getAllEjercicios, removeEjercicio, updateEjercicio } from '../controllers/ejercicio.controller.js'

const router = Router()

router.get('/', getAllEjercicios)
router.post('/', createEjercicio)
router.delete('/', removeEjercicio)
router.put('/', updateEjercicio)

export default router;