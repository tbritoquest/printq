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



let answers1 = [{id:10,path:null,text:"100"}, {id:11,path:null,text:"250"}, {id:12,path:null,text:"500"}, {id:13,path:null,text:"1000"}]
let q1 = {id:1,answers:[10,11,12,13],text:"Runsize"}

addToAnswers(answers1)
addToQuestion(q1)


let answers2 = [{id:20,path:1,text:"4/0 (4 color front)"}, {id:21,path:1,text:"4/1"}, {id:22,path:1,text:"4/4 (4 color both sides)"}, {id:23,path:1,text:"4/0 with White Mask"},{id:24,path:1,text:"4/1 with White Mask on Front"},{id:25,path:1,text:"4/4 with White Mask on Front"},{id:26,path:1,text:"4/4 with White Mask on Back"},{id:27,path:1,text:"4/4 with White Mask on Both Sides"}]
let q2 = {id:2,answers:[20,21,22,23,24,25,26,27],text:"Colorspec"}

addToAnswers(answers2)
addToQuestion(q2)


let answers3 = [{id:30,path:2,text:"No Coating"}]
let q3 = {id:3, answers:[30], text: "Coating"}
addToAnswers(answers3)
addToQuestion(q3)

let answers4 = [{id:40,path:3,text:"18PT Uncoated Kraft"}]
let q4 = {id:4, answers:[40], text: "Stock"}
addToAnswers(answers4)
addToQuestion(q4)


let answers5 = [{id:50,path:4,text:"Square"}]
let q5 = {id:5,answers:[50], text:"Shape"}
addToAnswers(answers5)
addToQuestion(q5)

let answers6 = [{id:60,path:4,text:'1.5" x 3.5”'}, {id:61,path:4,text:'1.75” x 3.5”'},{id:62,path:5,text:'2” x 2”'},{id:63,path:4,text:'2” x 3”'},{id:64,path:4,text:'2” x 3.5”'},{id:65,path:4,text:'2” x 4”'},{id:66,path:4,text:'2.125” x 3.375”'},{id:67,path:5,text:'2.5” x 2.5”'}]
let q6 = {id:6,answers:[60,61,62,63,64,65,66,67], text:"Size"}
addToAnswers(answers6)
addToQuestion(q6)

let answers7 = [{id:70,path:6,text:"Business Cards"}]
let q7 = {id:7,answers:[70,],text:"Product Category"}


addToAnswers(answers7)
addToQuestion(q7)




let stack = [] // consists of question ids
stack.push(7)

function addToStack(id){
    stack.push(id)

}

function next(){
    //0. check if we've reached the end of form
    let fields = document.querySelectorAll("select")
    let node = fields[fields.length-1]
    let answerObj = answers.get(parseInt(node.value))

    if(answerObj.path=== null){
        console.log("END")
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
}

function getQuestion(answerID){
    let answerObj = answers.get(parseInt(answerID))
    return questions.get(answerObj.path)
}

function renderNextQuestion(){

    let parentNode = document.querySelector("#form-fields")
    let node= document.querySelector(".field")
    let cloneNode = node.cloneNode(true)
    cloneNode.querySelector("select").textContent = ""

    // 0. Get latest question
    let question = questions.get(stack[stack.length-1])

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



