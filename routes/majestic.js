const express = require('express')
const router = express.Router()


router.get('/akuafoil', (req,res)=>{
    // res.send('akuafoil')
    res.render('services/akuafoil')
})

router.get('/brown-kraft-cards', (req,res)=>{
    res.render('services/brown-kraft-cards')
})

module.exports = router
