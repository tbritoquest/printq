/**
 * Brown Kraft Cards
 */

 let questions = new Map()
 let answers = new Map()


function addToAnswers(arr){ 
    for(let i=0;i<arr.length;i++){
        answers.set(arr[i].id, arr[i])
    }
}

function addToQuestion(obj){
    questions.set(obj.id,obj)
}

function printMap(mapObject){
    console.log([...mapObject.entries()])
}

function addAnswersToQuestion(id, answers29){
    let source = questions.get(id)
    source.answers.push(...answers29)
}

let answers1 = [{id:"10",path:null,text:"100"}, {id:"11",path:null,text:"250"}, {id:"12",path:null,text:"500"}, {id:"13",path:null,text:"1000"}]
let q1 = {id:"1",answers:getIds(answers1),text:"Runsize"}

addToAnswers(answers1)
addToQuestion(q1)


let answers2 = [{id:"20",path:"1",text:"4/0 (4 color front)"}, {id:"21",path:"1",text:"4/1"}, {id:"22",path:"1",text:"4/4 (4 color both sides)"}, {id:"23",path:"1",text:"4/0 with White Mask"},{id:"24",path:"1",text:"4/1 with White Mask on Front"},{id:"25",path:"1",text:"4/4 with White Mask on Front"},{id:"26",path:"1",text:"4/4 with White Mask on Back"},{id:"27",path:"1",text:"4/4 with White Mask on Both Sides"}]
let q2 = {id:"2",answers:getIds(answers2),text:"Colorspec"}

addToAnswers(answers2)
addToQuestion(q2)


let answers3 = [{id:"30",path:"2",text:"No Coating"}]
let q3 = {id:"3", answers:getIds(answers3), text: "Coating"}
addToAnswers(answers3)
addToQuestion(q3)

let answers4 = [{id:"40",path:"3",text:"18PT Uncoated Kraft"}]
let q4 = {id:"4",answers: getIds(answers4), text: "Stock"}
addToAnswers(answers4)
addToQuestion(q4)


let answers5 = [{id:"50",path:"4",text:"Square"}]
let q5 = {id:"5",answers:getIds(answers5), text:"Shape"}
addToAnswers(answers5)
addToQuestion(q5)

let answers6 = [{id:"60",path:"4",text:'1.5" x 3.5”'}, {id:"61",path:"4",text:'1.75” x 3.5”'},{id:"62",path:"5",text:'2” x 2”'},{id:"63",path:"4",text:'2” x 3”'},{id:"64",path:"4",text:'2” x 3.5”'},{id:"65",path:"4",text:'2” x 4”'},{id:"66",path:"4",text:'2.125” x 3.375”'},{id:"67",path:"5",text:'2.5” x 2.5”'}]
let q6 = {id:"6",answers:getIds(answers6), text:"Size"}
addToAnswers(answers6)
addToQuestion(q6)

let answers7 = [{id:"70",path:"6",text:"Business Cards"}]
let q7 = {id:"7",answers:getIds(answers7),text:"Product Category"}
addToAnswers(answers7)
// addToQuestion(q7)

////////////////////////////////////////// GREETING CARDS //////////////////////////////////////////////

//Given answer objects, returns an array of ids
function getIds(arr){
    return arr.map((el)=>{
        return el.id
    })
}

let answers8 = [{id:"bkc-gc10",path:null,text:"No Blank Envelopes"}, {id:"bkc-gc11", path:null, text: "Yes 100 Kraft Envelopes A7"}, {id:"bkc-gc12", path:null, text: "Yes 250 Kraft Envelopes A7"},{id:"bkc-gc13", path:null, text: "Yes 500 Kraft Envelopes A7"},{id:"bkc-gc14", path:null, text: "Yes 1000 Kraft Envelopes A7"}]
let q8 = {id:"8",answers:getIds(answers8),text:"Blank Envelopes"}
addToAnswers(answers8)
addToQuestion(q8)


let answers9 = [{id:"bkc-gc20",path:"8",text:"Score in Half"}]
let q9 = {id:"9",answers:getIds(answers9),text:"Scoring Options"}
addToAnswers(answers9)
addToQuestion(q9)

let answers10 = [{id:"bkc-gc30",path:"9",text:"100"},{id:"bkc-gc31",path:"9",text:"250"},{id:"bkc-gc32",path:"9",text:"500"},{id:"bkc-gc33",path:"9",text:"1000"}]
let q10 = {id:"10",answers:getIds(answers10),text:"Runsize"}
addToAnswers(answers10)
addToQuestion(q10)

let answers11 = [{id:"bkc-gc40",path:"10",text:"4/0 (4 color front)"},{id:"bkc-gc41",path:"10",text:"4/1"},{id:"bkc-gc42",path:"10",text:"4/4 (4 color both sides)"},{id:"bkc-gc43",path:"10",text:"4/0 with White Mask"},{id:"bkc-gc44",path:"10",text:"4/1 with White Mask on Front"},{id:"bkc-gc45",path:"10",text:"4/4 with White Mask on Front"},{id:"bkc-gc46",path:"10",text:"4/4 with White Mask on Back"},{id:"bkc-gc47",path:"10",text:"4/4 with White Mask Both Sides"}]
let q11 = {id:"11",answers:getIds(answers11),text:"Colorspec"}
addToAnswers(answers11)
addToQuestion(q11)

let answers12 = [{id:"bkc-gc50",path:"11",text:"No Coating"}]
let q12 = {id:"12",answers:getIds(answers12),text:"Coating"}
addToAnswers(answers12)
addToQuestion(q12)

let answers13 = [{id:"bkc-gc60",path:"12",text:"18PT Uncoated Kraft"}]
let q13 = {id:"13",answers:getIds(answers13),text:"Stock"}
addToAnswers(answers13)
addToQuestion(q13)

let answers14 = [{id:"bkc-gc70",path:"13",text:"7” x 10”"}]
let q14 = {id:"14",answers:getIds(answers14),text:"Size"}
addToAnswers(answers14)
addToQuestion(q14)

let answers15 = [{id:"bkc-gc80",path:"14",text:"Greeting Cards"}]
q7.answers.push("bkc-gc80")
addToAnswers(answers15)
// addToQuestion(q7)

////////////////////////////////// MENU ///////////////////////////////////////////

let answers16 = [{id:"bkc-m10",path:null,text:"No Scoring"}, {id:"bkc-m11",path:null,text:"Score in Half"}]
let q16 = {id:"16",answers:getIds(answers16),text:"Scoring Options"}
addToAnswers(answers16)
addToQuestion(q16)

let answers17 = [{id:"bkc-m20",path:"16",text:"100"}, {id:"bkc-m21",path:"16",text:"250"},{id:"bkc-m22",path:"16",text:"500"},{id:"bkc-m23",path:"16",text:"500"},{id:"bkc-m24",path:"16",text:"1000"}]
let q17 = {id:"17",answers:getIds(answers17),text:"Runsize"}
addToAnswers(answers17)
addToQuestion(q17)

let answers18 = [{id:"bkc-m30",path:"17",text:"4/0 (4 color front)"}, {id:"bkc-m31",path:"17",text:"4/1"},{id:"bkc-m32",path:"17",text:"4/4 (4 color both sides)"},{id:"bkc-m33",path:"17",text:"4/0 with White Mask"},{id:"bkc-m34",path:"17",text:"4/1 with White Mask on Front"},{id:"bkc-m35",path:"17",text:"4/4 with White Mask on Front"},{id:"bkc-m36",path:"17",text:"4/4 with White Mask on Back"},{id:"bkc-m37",path:"17",text:"4/4 with White Mask Both Sides"}]
let q18 = {id:"18",answers:getIds(answers18),text:"Colorspec"}
addToAnswers(answers18)
addToQuestion(q18)

let answers19 = [{id:"bkc-m40",path:"18",text:"No Coating"}]
let q19 = {id:"19",answers:getIds(answers19),text:"Coating"}
addToAnswers(answers19)
addToQuestion(q19)

let answers20 = [{id:"bkc-m50",path:"19",text:"18PT Uncoated Kraft"}]
let q20 = {id:"20",answers:getIds(answers20),text:"Stock"}
addToAnswers(answers20)
addToQuestion(q20)

let answers21 = [{id:"bkc-m60",path:"20",text:"4” x 10”"}]
let q21 = {id:"21",answers:getIds(answers21),text:"Size"}
addToAnswers(answers21)
addToQuestion(q21)


let answers22 = [{id:"bkc-m70",path:"21",text:"Menu"}]
q7.answers.push("bkc-m70")
addToAnswers(answers22)
// addToQuestion(q7)



let answers23 = [{id:"bkc-m80",path:null,text:"100"}, {id:"bkc-m81",path:null,text:"250"}, {id:"bkc-m82",path:null,text:"500"}, {id:"bkc-m83",path:null,text:"1000"}]
let q23 = {id:"23",answers:getIds(answers23),text:"Runsize"}
addToAnswers(answers23)
addToQuestion(q23)

let answers24 = [{id:"bkc-m90",path:"23",text:"4/0 (4 color front)"}, {id:"bkc-m91",path:"23",text:"4/1"}, {id:"bkc-m93",path:"23",text:"4/4 (4 color both sides)"}]
let q24 = {id:"24",answers:getIds(answers24),text:"Colorspec"}
addToAnswers(answers24)
addToQuestion(q24)

let answers25 = [{id:"bkc-m100",path:"24",text:"No Coating"}]
let q25 = {id:"25",answers:getIds(answers25),text:"Coating"}
addToAnswers(answers25)
addToQuestion(q25)

let answers26 = [{id:"bkc-m200",path:"25",text:"18PT Uncoated Kraft"}]
let q26 = {id:"26",answers:getIds(answers26),text:"Stock"}
addToAnswers(answers26)
addToQuestion(q26)

let answers27 = [{id:"bkc-m300",path:"26",text:"Horizontal"}, {id:"bkc-m301",path:"26",text:"Vertical"}]
let q27 = {id:"27",answers:getIds(answers27),text:"Product Orientation"}
addToAnswers(answers27)
addToQuestion(q27)


let answers28 = [{id:"bkc-m400",path:"27",text:"5.5” x 17”"}, {id:"bkc-m401",path:"27",text:"6” x 18”"}, {id:"bkc-m402",path:"27",text:"8” x 10”"}, {id:"bkc-m403",path:"27",text:"8.5” x 11”"},{id:"bkc-m404",path:"27",text:"9” x 12”"}, {id:"bkc-m405",path:"27",text:"11” x 17”"}]
addToAnswers(answers28)
addAnswersToQuestion("21", getIds(answers28))


let answers29 = [{id:"bkc-pc10",path:"4", text:"2” x 6”"},{id:"bkc-pc11",path:"4", text:"2” x 8”"},{id:"bkc-pc12",path:"5", text:"3.5” x 3.5”"},{id:"bkc-pc13",path:"4", text:"3.5” x 4”"},{id:"bkc-pc14",path:"4", text:"3.5” x 8.5”"},{id:"bkc-pc15",path:"4", text:"3.667” x 8.5”"},{id:"bkc-pc16",path:"5", text:"4” x 4”"},{id:"bkc-pc17",path:"4", text:"4” x 6”"},{id:"bkc-pc18",path:"4", text:"4” x 8.5”"},{id:"bkc-pc19",path:"4", text:"4” x 9”"},{id:"bkc-pc21",path:"4", text:"4.25” x 5.5”"},{id:"bkc-pc22",path:"4", text:"4.25” x 6”"},{id:"bkc-pc23",path:"4", text:"4.25” x 11”"},{id:"bkc-pc24",path:"5", text:"5” x 5”"},{id:"bkc-pc25",path:"4", text:"5” x 7”"},{id:"bkc-pc26",path:"4", text:"5.5” x 8.5”"},{id:"bkc-pc27",path:"4", text:"6” x 8”"},{id:"bkc-pc28",path:"4", text:"6” x 9”"},{id:"bkc-pc29",path:"4", text:"6” x 11”"},{id:"bkc-pc30",path:"4", text:"6.25” x 9”"},{id:"bkc-pc31",path:"4", text:"6.5” x 9”"}]
let q29 = {id:"29",answers:getIds(answers29),text:"Size"}
addToAnswers(answers29)
addToQuestion(q29)

let answers30 = [{id:"bkc-pc100",path:"29",text:"Postcards"}]
q7.answers.push("bkc-pc100")
addToAnswers(answers30)

let answers31 = [{id:"bkc-ss10",path:"4", text:"6” x 18”"},{id:"bkc-ss11",path:"4", text:"8” x 10”"},{id:"bkc-ss12",path:"4", text:"8.5” x 11”"},{id:"bkc-ss13",path:"4", text:"9” x 12”"},{id:"bkc-ss14",path:"4", text:"11” x 17”"}]
let q31 ={id:"31", answers:getIds(answers31),text:"Size"}
addToAnswers(answers31)
addToQuestion(q31)

let answers32 = [{id:"bkc-ss100",path:"31",text:"Sell Sheets"}]
q7.answers.push("bkc-ss100")
addToAnswers(answers32)

let answers33 = [{id:"bkc-tc10",path:"4",text:"2.5” x 3.5”"}]
let q33 ={id:"33", answers:getIds(answers33),text:"Size"}
addToAnswers(answers33)
addToQuestion(q33)

let answers34 = [{id:"bkc-tc100",path:"33",text:"Trading Cards"}]
q7.answers.push("bkc-tc100")
addToAnswers(answers34)

let stack = [] // consists of question ids
stack.push(7)

function addToStack(id){
    stack.push(id)

}

function next(){
    //0. check if we've reached the end of form
    let fields = document.querySelectorAll("select")
    let node = fields[fields.length-1]
    let answerObj = answers.get(node.value)

    if(answerObj.path=== null){
        console.log("END sort of")
        document.querySelector(".field.sample-date").classList.remove("hide")
        document.querySelector(".field.notes").classList.remove("hide")
        return
    }else{
        // 1a. disable current input field 
        node.setAttribute("disabled",true)
        // 1b. add next question to stack
        stack.push(answerObj.path)
         // 1c. render latest question in stack
         renderNextQuestion()
         // 1d. render prev button if doesnt exist
        document.querySelector('#back-button').style.display="block"
    }

}

function prev(){
    //remove current question from stack
   stack.pop()
    //remove from DOM
    let parent = document.getElementById("form-fields");
    parent.removeChild(parent.lastElementChild);
    //
    //hide prev
    if(stack.length===1){
        document.querySelector('#back-button').style.display="none"
    }

    parent.lastElementChild.querySelector("select").removeAttribute("disabled")

    if(document.querySelector('.field.notes')){
        document.querySelector(".field.sample-date").classList.add("hide")
        document.querySelector(".field.notes").classList.add("hide")
    }
}

function getQuestion(answerID){
    let answerObj = answers.get(answerID)
    return questions.get(answerObj.path)
}

function renderNextQuestion(){

    let parentNode = document.querySelector("#form-fields")
    let node= document.querySelector(".field")
    let cloneNode = node.cloneNode(true)
    cloneNode.querySelector("select").textContent = ""

    // 0. Get latest question
    let question = questions.get(stack[stack.length-1])
    console.log(question)
    //1. change label
    let label = cloneNode.querySelector("label")
    label.innerText = question.text

    //2. add options and values
    let selectorEl =  cloneNode.querySelector("select")
    selectorEl.removeAttribute("disabled")
    let defaultEl = document.createElement("option")
    defaultEl.setAttribute("value", "")
    defaultEl.selected = true
    defaultEl.innerText = `Select ${question.text}`
    defaultEl.setAttribute("disabled",true)
    selectorEl.append(defaultEl)

    for(let i=0;i<question.answers.length;i++){
       
        let answer = answers.get(question.answers[i])
        let optionEl = document.createElement("option")
        optionEl.setAttribute("value", answer.id)
        optionEl.innerText = answer.text
        selectorEl.append(optionEl)
    }
    //3. add element to DOM
    parentNode.append(cloneNode)
}

function getTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // even 32 is acceptable
    let monthStr = tomorrow.getMonth() + 1 +""
    let dayStr = tomorrow.getDate()+""
    return `${tomorrow.getFullYear()}-${monthStr.padStart(2,'0')}-${dayStr.padStart(2,'0')}`;
}

//current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

document.getElementById("currDate").innerHTML = today

document.getElementById("sampleDate").value = getTomorrow()
document.getElementById("sampleDate").min = getTomorrow()



