import * as Note from './backend-api/note/index.js'
import { require } from './index.js'
import cors from 'cors'

const express = require('express')

const port = 3000

async function startServer () {

  const app = express()
  app.use(cors())

  app.use(express.json())
  
  const routers = [
    Note.router
  ]

  routers.forEach(r => app.use('/api', r))

  app.listen(port, () => {
    console.log(`"server is running at http://localhost:${port}"`)
  })
}

startServer().then(null, (err) => {
  console.error(JSON.stringify(err, null, '  '))
  console.log('starting server failed !!!')
  process.exit(1)
})