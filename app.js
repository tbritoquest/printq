const express = require('express')

const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = process.env.PORT || 3000

// const fs = require('fs')

// Set the template engine
app.set('view engine', 'ejs')
app.use(expressLayouts)

//static files
app.use(express.static('public'))

const majestic = require('./routes/majestic.js')
const printing = require('./routes/printing')
const helper = require('./routes/helper.js')

app.get('/',(req,res)=>{
    res.render('welcome')
})

app.use('/printing-products', printing)
app.use('/category', majestic)
app.use('/helper',helper)


app.listen(3000, function(){
    console.log("Express server listening on port 3000");
})


