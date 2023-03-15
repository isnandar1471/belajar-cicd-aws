const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
  EXPRESS DEMO APP

  lastupdate: 2023/04/15 09:10
  `)
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 100,
    },
    {
      productId: '102',
      price: 150,
    },
  ])
})

app.get('/contacts', (req, res) => {
  res.send({
    phoneNumber: 6285814718596,
  })
})

app.get('/pricing', (req, res) => {
  res.send([
    {
      type: 'free',
      price: 0
    },
    {
      type: 'personal',
      price: 100000
    },
    {
      type: 'team',
      price: 300000
    },
    {
      type: 'company',
      price: 1000000
    },
  ])
})


app.listen(port, () => {
  console.log(`server running in 0.0.0.0:${port}`)
})
