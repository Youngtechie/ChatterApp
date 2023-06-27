import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import axios from 'axios'
import cors from 'cors'
import bodyParser from 'body-parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(bodyParser.json())

// Serve the Vue.js static files
app.use(express.static(path.join(__dirname, 'dist')))

app.use(cors())

app.post('/postContent', (req, res) => {
  // Access the received data from the request body
  const { contentUrl } = req.body // Destructure contentUrl from req.body

  axios
    .get(`${contentUrl}`)
    .then((response) => {
      // Process the response
      res.send(response.data)
    })
    .catch((error) => {
      // Handle any errors
      console.error(error)
    })
  // Process the data as needed
})

app.post('/access', (req, res) => {
  // Access the server
  const { accessUrl } = req.body
  // Destructure accessUrl from req.body
  axios.get(`${accessUrl}`).then((response) => {
    res.json(response.data)
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// Start the Express server
app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
