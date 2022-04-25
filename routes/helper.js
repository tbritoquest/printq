const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/data', (req,res)=>{

    // EDIT THIS LINE ONLY
    let inputs = [input,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,input14,input15,input16]
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

// Rectangle , No coating
let input = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['1.5 x 3.5','1.75 x 3.5','2 x 3','2 x 3.5','2 x 7','2.125 x 3.375'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners': ['n/a'],
    'Coating' : ['No Coating'],
    'Spot UV Sides' : ['n/a'],
    'Lamination':['Silk'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Runsize': [25,50,75,100,250,500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

// rectangle, spot uv , 4/1 & 4/4
let input2 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['1.5 x 3.5','1.75 x 3.5','2 x 3','2 x 3.5','2 x 7','2.125 x 3.375'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners': ['n/a'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides' : ['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Lamination':['Silk'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

// rectangle, spot uv , 4/0
let input3 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['1.5 x 3.5','1.75 x 3.5','2 x 3','2 x 3.5','2 x 7','2.125 x 3.375'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners': ['n/a'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides' : ['Spot UV Front'],
    'Lamination':['Silk'],
    'Colorspec': ['4/0 (4 color front)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}


// Rounded 2 || 4 Corners , No coating
let input4 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['1.5 x 3.5','1.75 x 3.5','2 x 3.5','2.125 x 3.375'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rounded 2 Corners','Rounded 4 Corners'],
    'Stock': ['16PT C2S'],
    'Radius of Corners' : ['Rounded 1/4 inch','Rounded 1/8 inch'],
    'Coating' : ['No Coating'],
    'Spot UV Sides' : ['n/a'],
    'Lamination':['Silk'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Runsize': [25,50,75,100,250,500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

// Rounded 2 || 4 Corners, spot uv , 4/1 & 4/4
let input5 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['1.5 x 3.5','1.75 x 3.5','2 x 3.5','2.125 x 3.375'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rounded 2 Corners','Rounded 4 Corners'],
    'Stock': ['16PT C2S'],
    'Radius of Corners' : ['Rounded 1/4 inch','Rounded 1/8 inch'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides' : ['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Lamination':['Silk'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

// Rounded 2 || 4 Corners, spot uv , 4/0
let input6 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['1.5 x 3.5','1.75 x 3.5','2 x 3.5','2.125 x 3.375'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rounded 2 Corners','Rounded 4 Corners'],
    'Stock': ['16PT C2S'],
    'Radius of Corners' : ['Rounded 1/4 inch','Rounded 1/8 inch'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides' : ['Spot UV Front'],
    'Lamination':['Silk'],
    'Colorspec': ['4/0 (4 color front)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

// Square. no coating
let input7 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['2 x 2','2.5 x 2.5'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Square'],
    'Stock': ['16PT C2S'],
    'Radius of Corners' : ['n/a'],
    'Coating' : ['No Coating'],
    'Spot UV Sides' : ['n/a'],
    'Lamination':['Silk'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Runsize': [25,50,75,100,250,500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

// Square, spot uv , 4/1 & 4/4
let input8 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['2 x 2','2.5 x 2.5'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Square'],
    'Stock': ['16PT C2S'],
    'Radius of Corners': ['n/a'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides' : ['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Lamination':['Silk'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

// Square, spot uv , 4/0
let input9 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['2 x 2','2.5 x 2.5'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Square'],
    'Stock': ['16PT C2S'],
    'Radius of Corners': ['n/a'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides' : ['Spot UV Front'],
    'Lamination':['Silk'],
    'Colorspec': ['4/0 (4 color front)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

//-----------------size: 2 x 3.5---------------------//

// Oval, No coating
let input10 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['2 x 3.5'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Oval'],
    'Stock': ['16PT C2S'],
    'Radius of Corners': ['n/a'],
    'Coating' : ['No Coating'],
    'Spot UV Sides' : ['n/a'],
    'Lamination':['Silk'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Runsize': [25,50,75,100,250,500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

//-----------------size: 2.5 x 2.5---------------------//

// Rounded 4 Corners , No coating
let input11 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['2.5 x 2.5'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rounded 4 Corners'],
    'Stock': ['16PT C2S'],
    'Radius of Corners' : ['Rounded 1/4 inch','Rounded 1/8 inch'],
    'Coating' : ['No Coating'],
    'Spot UV Sides' : ['n/a'],
    'Lamination':['Silk'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Runsize': [25,50,75,100,250,500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

// Rounded 4 Corners, spot uv , 4/1 & 4/4
let input12 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['2.5 x 2.5'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rounded 4 Corners'],
    'Stock': ['16PT C2S'],
    'Radius of Corners' : ['Rounded 1/4 inch','Rounded 1/8 inch'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides' : ['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Lamination':['Silk'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

// Rounded 4 Corners, spot uv , 4/0
let input13 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['2.5 x 2.5'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rounded 4 Corners'],
    'Stock': ['16PT C2S'],
    'Radius of Corners' : ['Rounded 1/4 inch','Rounded 1/8 inch'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides' : ['Spot UV Front'],
    'Lamination':['Silk'],
    'Colorspec': ['4/0 (4 color front)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options' : ['n/a']
}

//-------------------size: 3.5 x 4------------------//
// Rectangle , No coating
let input14 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['3.5 x 4'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners': ['n/a'],
    'Coating' : ['No Coating'],
    'Spot UV Sides' : ['n/a'],
    'Lamination':['Silk'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Runsize': [25,50,75,100,250,500,1000,2500,5000,10000],
    'Scoring Options' : ['Score in Half']
}

// rectangle, spot uv , 4/1 & 4/4
let input15 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['3.5 x 4'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners': ['n/a'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides' : ['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Lamination':['Silk'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options' : ['Score in Half']
}

// rectangle, spot uv , 4/0
let input16 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Silk'],
    'Size': ['3.5 x 4'],
    'Product Orientation' : ['Horizontal','Vertical'],
    'Shape' : ['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners': ['n/a'],
    'Coating' : ['Spot UV'],
    'Spot UV Sides' : ['Spot UV Front'],
    'Lamination':['Silk'],
    'Colorspec': ['4/0 (4 color front)'],
    'Runsize': [500,1000,2500,5000,10000],
    'Scoring Options' : ['Score in Half']
}

module.exports = router
