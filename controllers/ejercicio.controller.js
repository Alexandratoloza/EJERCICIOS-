import { Ejercicio } from '../models/ejercicio.model.js'

export const getAllEjercicios = async (req, res) => {
    try {
        const ejercicios = await Ejercicio.findAll()
        return res.json(ejercicios)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const createEjercicio = async (req, res) => {
    try {
        const { nombre, series, repeticiones, descanso } = req.body
        const ejercicio = await Ejercicio.create({ nombre, series, repeticiones, descanso })
        return res.json(ejercicio)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const removeEjercicio = async (req, res) => {
    try {
        const { nombre } = req.query
        const ejercicio = await Ejercicio.remove(nombre)
        return res.json(ejercicio)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const updateEjercicio = async (req, res) => {
    try {
        const { nombre, series, repeticiones, descanso } = req.body
        const ejercicio = await Ejercicio.update({ nombre, series, repeticiones, descanso })
        return res.json(ejercicio)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
  }



 }
