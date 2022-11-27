import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('🚀🚀🚀 Hola a todos mis conocidos ✨  🚀🚀🚀 ')
})

app.listen(8000, () => {
    console.log("Servidor corriendo en http://localhost:8000")
})

