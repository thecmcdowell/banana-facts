import express from 'express'
import db from './data/db'

const app = express()

app.get('/api/bananafacts', (req, res) => {
    let fact = db[Math.floor(Math.random()*db.length)]
    console.log('fact', fact)
    res.status(200).send({
        success: 'true',
        message: fact.fact
    })
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})