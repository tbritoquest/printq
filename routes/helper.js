const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/data', (req,res)=>{

    // EDIT THIS LINE ONLY
    let inputs = [input,input2]
    //END 

    let questions = []
    Object.keys(inputs[0]).forEach(el => {
        questions.push(el)
    })

    const columnNames = questions.join(",")+"\n"

    fs.appendFile('data.csv',columnNames,err =>{
        if(err){
            console.error(err)
        }
    })


    var start = new Date().getTime();
    for(let x=0;x<inputs.length;x++){
        let dats = generateData(inputs[x])
        for(let i=0;i<dats.length;i++){
            let content = dats[i]+"\n"
            fs.appendFile('data.csv',content,err =>{
                if(err){
                    console.error(err)
                }
            })
        }
    }
    
    var end = new Date().getTime();
    var time = end - start;
    console.log(`Execution time: ${time} milliseconds`)
    

    res.render('data')
})

function generateData(input){
    let questions = []
    Object.keys(input).forEach(el => {
        questions.push(el)
    })

    let tmp = input[questions[0]]

    let i = 1
    while(i<questions.length){
        tmp = merge(input[questions[i]], tmp)
        i++
    }
    return tmp
}

//options: ex. blank envelopes, A2 envelopes , etc
function merge(options, strArr){
    let result = []
    for(let i=0;i<options.length;i++){
        for(let j=0;j<strArr.length;j++){
            result.push(strArr[j]+','+options[i])
        }
    }

    return result
}

//------------------EDIT DATA BELOW --------------------------------//

// 4/1 & 4/4
let input = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Raised Spot UV'],
    'Size': ['2 x 3.5'],
    'Stock': ['16PT C2S'],
    'Coating' : ['No Coating'],
    'Lamination':['Velvet'],
    'Raised Spot UV Side':['Raised Spot UV Front','Raised Spot UV on both sides'],
    'Raised Spot UV Height:': ['50 Microns'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Runsize': [100,250,500],
}

//  4/0 (4 color front)
let input2 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Raised Spot UV'],
    'Size': ['2 x 3.5'],
    'Stock': ['16PT C2S'],
    'Coating' : ['No Coating'],
    'Lamination':['Velvet'],
    'Raised Spot UV Side':['Raised Spot UV Front'],
    'Raised Spot UV Height:': ['50 Microns'],
    'Colorspec': ['4/0 (4 color front)'],
    'Runsize': [100,250,500],
}



module.exports = router
