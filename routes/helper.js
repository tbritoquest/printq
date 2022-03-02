const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/data', (req,res)=>{

    // EDIT THIS LINE ONLY
    let inputs = [input,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,input14,input15,input16,input17,input18,input19,input20,input21]
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

//no coating.rectangle
let input = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['2 x 6','2 x 8','3 x 5','3.5 x 4'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['No Coating'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['n/a'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Drill Hole':['No Drill Hole','Standard Drill Hole 1/4','Standard Drill Hole 1/8'],
    'Runsize': [100,250,500,1000,2500,5000,10000],
}

// 4/0
let input2 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['2 x 6','2 x 8','3 x 5','3.5 x 4'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Drill Hole':['n/a'],
    'Runsize': [500,1000,2500,5000,10000],
}
// 4/1 & 4/4
let input3 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['2 x 6','2 x 8','3 x 5','3.5 x 4'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Drill Hole':['n/a'],
    'Runsize': [500,1000,2500,5000,10000],
}

// SQUARE
//no coating.rectangle
let input4 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['3.5 x 3.5','4 x 4','5 x 5'],
    'Shape':['Square'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['No Coating'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['n/a'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Drill Hole':['No Drill Hole','Standard Drill Hole 1/4','Standard Drill Hole 1/8'],
    'Runsize': [100,250,500,1000,2500,5000,10000],
}

// 4/0
let input5 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['3.5 x 3.5','4 x 4','5 x 5'],
    'Shape':['Square'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Drill Hole':['n/a'],
    'Runsize': [500,1000,2500,5000,10000],
}
// 4/1 & 4/4
let input6 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['3.5 x 3.5','4 x 4','5 x 5'],
    'Shape':['Square'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Drill Hole':['n/a'],
    'Runsize': [500,1000,2500,5000,10000],
}

//------------------size: 3.5 x 8.5--------------------//

//no coating
let input7 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['3.5 x 8.5'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['No Coating'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['n/a'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Drill Hole':['No Drill Hole','Standard Drill Hole 1/4','Standard Drill Hole 1/8'],
    'Runsize': [100,250,500,1000,2500,5000,10000],
}

//spot uv

// 4/0
let input8 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['3.5 x 8.5'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Drill Hole':['No Drill Hole','Standard Drill Hole 1/8'],
    'Runsize': [500,1000,2500,5000,10000],
}

// 4/1 & 4/4
let input9 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['3.5 x 8.5'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Drill Hole':['No Drill Hole','Standard Drill Hole 1/8'],
    'Runsize': [500,1000,2500,5000,10000],
}


//-----------------size: 3.667 x 8.5-----------------------//

//no coating
let input10 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['3.667 x 8.5'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['No Coating'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['n/a'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Drill Hole':['No Drill Hole','Standard Drill Hole 1/4','Standard Drill Hole 1/8'],
    'Runsize': [100,250,500,1000,2500,5000,10000],
}

//spot uv

// 4/0
let input11 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['3.5 x 8.5'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Drill Hole':['Standard Drill Hole 1/8'],
    'Runsize': [500,1000,2500,5000,10000],
}

// 4/1 & 4/4
let input12 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['3.5 x 8.5'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Drill Hole':['Standard Drill Hole 1/8'],
    'Runsize': [500,1000,2500,5000,10000],
}

//----------------size: 4 x 6 ----------------------//

//RECTANGLE 
//no coating
let input13 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['No Coating'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['n/a'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Drill Hole':['No Drill Hole','Standard Drill Hole 1/4','Standard Drill Hole 1/8'],
    'Runsize': [100,250,500,1000,2500,5000,10000],
}

    //spot uv

    // 4/0
let input14 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Drill Hole':['n/a'],
    'Runsize': [500,1000,2500,5000,10000],
}

    // 4/1 & 4/4
let input15 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Drill Hole':['n/a'],
    'Runsize': [500,1000,2500,5000,10000],
}

//ROUNDED 4 CORNERS

//Coating: no coating
let input16 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape':['Rounded 4 Corners'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['Rounded 1/4', 'Rounded 1/8'],
    'Coating' : ['No Coating'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['n/a'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Drill Hole':['n/a'],
    'Runsize': [100,250,500,1000,2500,5000,10000],
}

//spot uv
// 4/0
let input17 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape':['Rounded 4 Corners'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['Rounded 1/4', 'Rounded 1/8'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Drill Hole':['n/a'],
    'Runsize': [500,1000,2500,5000,10000],
}

// 4/1 & 4/4
let input18 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['4 x 6','4.25 x 5.5','4.25 x 6','5 x 7'],
    'Shape':['Rounded 4 Corners'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['Rounded 1/4', 'Rounded 1/8'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Drill Hole':['n/a'],
    'Runsize': [500,1000,2500,5000,10000],
}

//------------------size: 4 x 8.5-------------------//

//Coating: no coating
let input19 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['4 x 8.5','4 x 9','4.25 x 11','5.5 x 8.5','6 x 8','6 x 9','6 x 11','6.25 x 9','6.5 x 9'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['No Coating'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['n/a'],
    'Colorspec': ['4/0 (4 color front)','4/1','4/4 (4 color both sides)'],
    'Drill Hole':['No Drill Hole','Standard Drill Hole 1/4','Standard Drill Hole 1/8'],
    'Runsize': [100,250,500,1000,2500,5000,10000],
}

//spot uv
// 4/0
let input20 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['4 x 8.5','4 x 9','4.25 x 11','5.5 x 8.5','6 x 8','6 x 9','6 x 11','6.25 x 9','6.5 x 9'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front'],
    'Colorspec': ['4/0 (4 color front)'],
    'Drill Hole':['n/a'],
    'Runsize': [500,1000,2500,5000,10000],
}

// 4/1 & 4/4
let input21 = {
    'Product Type': ['Majestic'],
    'Majestic Type': ['Suede'],
    'Size': ['4 x 8.5','4 x 9','4.25 x 11','5.5 x 8.5','6 x 8','6 x 9','6 x 11','6.25 x 9','6.5 x 9'],
    'Shape':['Rectangle'],
    'Stock': ['16PT C2S'],
    'Radius of Corners':['n/a'],
    'Coating' : ['Spot UV'],
    'Lamination': ['Velvet'],
    'Spot UV Sides':['Spot UV Front','Spot UV Back','Spot UV Both Sides'],
    'Colorspec': ['4/1','4/4 (4 color both sides)'],
    'Drill Hole':['n/a'],
    'Runsize': [500,1000,2500,5000,10000],
}


module.exports = router
