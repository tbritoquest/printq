const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/data', (req,res)=>{

    // EDIT THIS LINE ONLY
    let inputs = [input,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,input14,input15]
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

//COATING: No Coating

//A2
let input = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['4.25 x 11','5.5 x 8.5'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['No Coating'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['n/a'],
    'Colorspec': ['4/0', '4/1','4/4'],
    'Runsize': [25,50,75,100,250,500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['No Blank Envelopes','Yes 25 Envelopes A2','Yes 50 Envelopes A2','Yes 75 Envelopes A2','Yes 100 Envelopes A2','Yes 250 Envelopes A2','Yes 500 Envelopes A2','Yes 1000 Envelopes A2','Yes 2500 Envelopes A2','Yes 5000 Envelopes A2','Yes 10000 Envelopes A2']
}

//A6
let input2 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['6 x 9'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['No Coating'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['n/a'],
    'Colorspec': ['4/0', '4/1','4/4'],
    'Runsize': [25,50,75,100,250,500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['No Blank Envelopes','Yes 25 Envelopes A6','Yes 50 Envelopes A6','Yes 75 Envelopes A6','Yes 100 Envelopes A6','Yes 250 Envelopes A6','Yes 500 Envelopes A6','Yes 1000 Envelopes A6','Yes 2500 Envelopes A6','Yes 5000 Envelopes A6','Yes 10000 Envelopes A6']
}

//6.5X6.5
let input3 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['6 x 12'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['No Coating'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['n/a'],
    'Colorspec': ['4/0', '4/1','4/4'],
    'Runsize': [25,50,75,100,250,500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['No Blank Envelopes','Yes 25 Envelopes 6.5X6.5','Yes 50 Envelopes 6.5X6.5','Yes 75 Envelopes 6.5X6.5','Yes 100 Envelopes 6.5X6.5','Yes 250 Envelopes 6.5X6.5','Yes 500 Envelopes 6.5X6.5','Yes 1000 Envelopes 6.5X6.5','Yes 2500 Envelopes 6.5X6.5','Yes 5000 Envelopes 6.5X6.5','Yes 10000 Envelopes 6.5X6.5']
}
//A7
let input4 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['7 x 10'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['No Coating'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['n/a'],
    'Colorspec': ['4/0', '4/1','4/4'],
    'Runsize': [25,50,75,100,250,500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['No Blank Envelopes','Yes 25 Envelopes A7','Yes 50 Envelopes A7','Yes 75 Envelopes A7','Yes 100 Envelopes A7','Yes 250 Envelopes A7','Yes 500 Envelopes A7','Yes 1000 Envelopes A7','Yes 2500 Envelopes A7','Yes 5000 Envelopes A7','Yes 10000 Envelopes A7']
}


//No slits. A9
let input5 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['8.5 x 11'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['No Coating'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['n/a'],
    'Colorspec': ['4/0', '4/1','4/4'],
    'Runsize': [25,50,75,100,250,500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['n/a'],
    'Blank Envelopes': ['No Blank Envelopes','Yes 25 Envelopes A9','Yes 50 Envelopes A9','Yes 75 Envelopes A9','Yes 100 Envelopes A9','Yes 250 Envelopes A9','Yes 500 Envelopes A9','Yes 1000 Envelopes A9','Yes 2500 Envelopes A9','Yes 5000 Envelopes A9','Yes 10000 Envelopes A9']
}

// COATING: Spot UV
let input6 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['4.25 x 11', '5.5 x 8.5'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['Yes 500 Envelopes A2','Yes 1000 Envelopes A2','Yes 2500 Envelopes A2','Yes 5000 Envelopes A2','Yes 10000 Envelopes A2']
}

//same size as above but colorspec is different
let input7 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['4.25 x 11','5.5 x 8.5'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['Yes 500 Envelopes A2','Yes 1000 Envelopes A2','Yes 2500 Envelopes A2','Yes 5000 Envelopes A2','Yes 10000 Envelopes A2']
}

//-----------size: 6x9 ----------//
let input8 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['6 x 9'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['Yes 500 Envelopes A6','Yes 1000 Envelopes A6','Yes 2500 Envelopes A6','Yes 5000 Envelopes A6','Yes 10000 Envelopes A6']
}

//same size as above but colorspec is different
let input9 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['6 x 9'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['Yes 500 Envelopes A6','Yes 1000 Envelopes A6','Yes 2500 Envelopes A6','Yes 5000 Envelopes A6','Yes 10000 Envelopes A6']
}

//----------size: 6 x 12------------//
let input10 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['6 x 12'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['Yes 500 Envelopes 6.5X6.5','Yes 1000 Envelopes 6.5X6.5','Yes 2500 Envelopes 6.5X6.5','Yes 5000 Envelopes 6.5X6.5','Yes 10000 Envelopes 6.5X6.5']
}

let input11 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['6 x 12'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['Yes 500 Envelopes 6.5X6.5','Yes 1000 Envelopes 6.5X6.5','Yes 2500 Envelopes 6.5X6.5','Yes 5000 Envelopes 6.5X6.5','Yes 10000 Envelopes 6.5X6.5']
}

//------------size: 7 x 10-------------//
let input12 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['7 x 10'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['Yes 500 Envelopes A7','Yes 1000 Envelopes A7','Yes 2500 Envelopes A7','Yes 5000 Envelopes A7','Yes 10000 Envelopes A7']
}

let input13 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['7 x 10'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['Yes 500 Envelopes A7','Yes 1000 Envelopes A7','Yes 2500 Envelopes A7','Yes 5000 Envelopes A7','Yes 10000 Envelopes A7']
}

//------------size: 8.5 x 11----------------//
let input14 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['8.5 x 11'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['Yes 500 Envelopes A9','Yes 1000 Envelopes A9','Yes 2500 Envelopes A9','Yes 5000 Envelopes A9','Yes 10000 Envelopes A9']
}
let input15 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['8.5 x 11'],
    'Product Orientation':['Horizontal','Vertical'],
    'Shape': ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Silk'],
    'Spot UV Sides': ['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options': ['Score in Half'],
    'Slits': ['Moon Slits Bottom Panel','Moon Slits Right Panel','No Gift Cards Slits','Slide Slits Bottom Panel','Slide Slits Right Panel'],
    'Blank Envelopes': ['Yes 500 Envelopes A9','Yes 1000 Envelopes A9','Yes 2500 Envelopes A9','Yes 5000 Envelopes A9','Yes 10000 Envelopes A9']
}



module.exports = router
