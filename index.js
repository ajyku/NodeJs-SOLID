const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome!')
})

// No route handler
app.use((req, res, next) => {
    const error = new Error("Not found")
    error.status = 404
    next(error)
})

// Error handling middleware
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send(err.message || "Someting broke!")
})

// Start server
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})