import Router from 'express-promise-router'

import { Endpoints } from '../endpoints.js'

import { getNoteProfileBy, getNoteList } from './controller.js'

export const router = Router()

router.post(Endpoints.GET_NOTE_LIST, async (_req,res) => {
  try{
    const data = await getNoteList()
    res.json(data)
  } catch(err){
    res.json({
      error:err
    })
  }
})

router.post(`${Endpoints.NOTE_PROFILE}/:id`, async (req,res) => {
  try{
    const id = req.params.id
    const data = await getNoteProfileBy(id)
    
    res.json(data)
  } catch(err){
    res.json({
      error:err
    })
  }
})