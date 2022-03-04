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

//------------------EDIT DATA BELOW --------------------------------//xs


let input = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Painted Edge'],
    'Size': ['2 x 3.5','2.5 x 2.5'],
    'Product Orientation': ['Horizontal','Vertical'],
    'Stock': ['32PT Uncoated'],
    'Coating' : ['No Coating'],
    'Edge Color': ['Black','Blue','Brown','Metallic Blue','Metallic Gold','Metallic Green','Metallic Hot Pink','Metallic Orange','Metallic Purple','Metallic Yellow','Orange','Pink','Purple','Red','Turquoise','White (Not Painted)','Yellow'],
    'Clear Case':['Insert in a Clear Case','Ship with a Brown Box'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Runsize': [250,500,1000],
}

let input2 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Painted Edge'],
    'Size': ['2.125 x 3.375'],
    'Product Orientation': ['Horizontal','Vertical'],
    'Stock': ['32PT Uncoated'],
    'Coating' : ['No Coating'],
    'Edge Color': ['Black','Blue','Brown','Metallic Blue','Metallic Gold','Metallic Green','Metallic Hot Pink','Metallic Orange','Metallic Purple','Metallic Yellow','Orange','Pink','Purple','Red','Turquoise','White (Not Painted)','Yellow'],
    'Clear Case':['Insert in a Clear Case','Ship with a Brown Box'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Runsize': [250,500],
}





module.exports = router
