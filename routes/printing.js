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

router.get('/greeting-cards/', (req,res)=>{
    let majesticType= Object.keys(req.query).length?req.query.q:''

    if(majesticType){
        let data = getProducts(`greeting-cards-${majesticType}`)
        res.render('services/greeting-cards-type',{products:JSON.stringify(data),majesticType})
    }else{
        let data = getProducts('greeting-cards')
        res.render('services/greeting-cards',{products:JSON.stringify(data)})
    }
    
    console.log("REQ",req.query)
    
})

router.get('/postcards/', (req,res)=>{
    let majesticType= Object.keys(req.query).length?req.query.q:''

    if(majesticType){
        let data = getProducts(`postcards-${majesticType}`)
        res.render('services/postcards-type',{products:JSON.stringify(data),majesticType})
    }else{
        let data = getProducts('postcards')
        res.render('services/postcards',{products:JSON.stringify(data)})
    }
    
    console.log("REQ",req.query)
    
})

router.get('/business-cards/', (req,res)=>{
    let majesticType= Object.keys(req.query).length?req.query.q:''

    if(majesticType){
        let data = getProducts(`business-cards-${majesticType}`)
        console.log(data)
        res.render('services/business-cards-type',{products:JSON.stringify(data),majesticType})
    }else{
        let data = getProducts('business-cards')
        console.log(JSON.stringify(data))
        res.render('services/business-cards',{products:JSON.stringify(data)})
    }
    
    // console.log("REQ",req.query)
})


// router.get('/greeting-cards/:majesticType',(req,res)=>{
//     console.log("hello")
//     console.log(req.params)
//     res.render('services/greeting-cards')
// })

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
    console.log("FILE: ", file)
}
    

    return data
}