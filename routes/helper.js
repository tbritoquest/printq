const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/data', (req,res)=>{

    // EDIT THIS LINE ONLY
    let inputs = [input,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12]
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


// coating: UV both sides, no coating
let input = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['2.75 x 4.25','3.5 x 8.5'],
    'Shape': ['Rectangle'],
    'Radius of Corners': ['n/a'],
    'Stock': ['16PT C2S'],
    'Coating' : ['UV Both Sides','No Coating'],
    'Spot UV Sides': ['n/a'],
    'Colorspec': ['5/0 (4/0 with Foil on Front)','5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}

//----------------size: 3.5 x 8.5-------------------//

// spot uv > spot uv front
let input2 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['3.5 x 8.5'],
    'Shape': ['Rectangle'],
    'Radius of Corners': ['n/a'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides': ['Spot UV Front'],
    'Colorspec': ['5/0 (4/0 with Foil on Front)','5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}

//-----------------size: 4 x 6-----------------//

// rectangle & rounded 4 corners

let input3 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape': ['Rectangle'],
    'Radius of Corners': ['n/a'],
    'Stock': ['16PT C2S'],
    'Coating' : ['UV Both Sides','No Coating'],
    'Spot UV Sides': ['n/a'],
    'Colorspec': ['5/0 (4/0 with Foil on Front)','5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}

//spot uv > spot uv front > colorspec(5)
let input4 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape': ['Rectangle'],
    'Radius of Corners': ['n/a'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides': ['Spot UV Front'],
    'Colorspec': ['5/0 (4/0 with Foil on Front)','5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}

//spot uv > spot uv back|both sides > colorspec(4)
let input5 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape': ['Rectangle'],
    'Radius of Corners': ['n/a'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides': ['Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}

//rounded 4 corners
let input6 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape': ['Rounded 4 Corners'],
    'Radius of Corners': ['Rounded 1/4','Rounded 1/8'],
    'Stock': ['16PT C2S'],
    'Coating' : ['UV Both Sides','No Coating'],
    'Spot UV Sides': ['n/a'],
    'Colorspec': ['5/0 (4/0 with Foil on Front)','5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}

//spot uv > spot uv front > colorspec(5)
let input7 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape': ['Rounded 4 Corners'],
    'Radius of Corners': ['Rounded 1/4','Rounded 1/8'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides': ['Spot UV Front'],
    'Colorspec': ['5/0 (4/0 with Foil on Front)','5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}

//spot uv > spot uv back|both sides > colorspec(4)
let input8= {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape': ['Rounded 4 Corners'],
    'Radius of Corners': ['Rounded 1/4','Rounded 1/8'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides': ['Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}

//----------------------size: 4 x 9----------------------------//

//coating: no coating, uv both sides, spot uv
let input9 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['4 x 9','4.25 x 11','5.5 x 8.5','6 x 9','6 x 11'],
    'Shape': ['Rectangle'],
    'Radius of Corners': ['n/a'],
    'Stock': ['16PT C2S'],
    'Coating' : ['UV Both Sides','No Coating'],
    'Spot UV Sides': ['n/a'],
    'Colorspec': ['5/0 (4/0 with Foil on Front)','5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}

//spot uv > spot uv front > colorspec(5)
let input10 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['4 x 9','4.25 x 11','5.5 x 8.5','6 x 9','6 x 11'],
    'Shape': ['Rectangle'],
    'Radius of Corners': ['n/a'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides': ['Spot UV Front'],
    'Colorspec': ['5/0 (4/0 with Foil on Front)','5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}

//spot uv > spot uv back|both sides > colorspec(4)
let input11 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['4 x 9','4.25 x 11','5.5 x 8.5','6 x 9','6 x 11'],
    'Shape': ['Rectangle'],
    'Radius of Corners': ['n/a'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides': ['Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}

//-------------------size: 8.5 x 3.5------------------------//

let input12 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Akuafoil'],
    'Size': ['8.5 x 3.5'],
    'Shape': ['Rectangle'],
    'Radius of Corners': ['n/a'],
    'Stock': ['16PT C2S'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides': ['Spot UV Front'],
    'Colorspec': ['5/0 (4/0 with Foil on Front)','5/1 (4/1 with Foil on Front)','5/4 (4/4 with Foil on Front)','4/5 (4/4 with Foil on Back)','5/5 (4/4 with Foil on Both Sides)'],
    'Runsize': [500,1000,2500,5000],
}





module.exports = router
