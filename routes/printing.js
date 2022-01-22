const express = require('express')
const router = express.Router()


// Reading excel files
const reader = require('xlsx')

router.get('/envelopes', (req,res)=>{
    let data = getProducts('envelopes')
    res.render('services/envelopes',{products:JSON.stringify(data)})
})

router.get('/menus', (req,res)=>{
    let data = getProducts('menus')
    res.render('services/menus',{products:JSON.stringify(data)})
})

router.get('/greeting-cards', (req,res)=>{
    res.render('services/greeting-cards')
})

module.exports = router




function getProducts(name){
    // Reading our test file
    
    const file = reader.readFile(`db/${name}.xlsx`)
   
    let data = []
    
    const sheets = file.SheetNames
    
    for(let i = 0; i < sheets.length; i++)
    {
    const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[i]])
    temp.forEach((res) => {
        data.push(res)
    })
    }
    

    return data
}