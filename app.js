const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = process.env.PORT || 3000

// Set the template engine
app.set('view engine', 'ejs')
app.use(expressLayouts)

//static files
app.use(express.static('public'))

const majestic = require('./majestic.js')

// app.get('/',(req,res)=>{
//     res.render('welcome')
// })

app.use('/category', majestic)

app.listen(3000)