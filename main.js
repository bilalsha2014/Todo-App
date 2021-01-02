const add=()=>{
let inputdocument= document.getElementById('Inputtodo')
let inputvalue=inputdocument.value
let elementul= document.getElementById('ul')
let elementli=document.createElement('li')
let textli=document.createTextNode(inputvalue)
elementli.appendChild(textli)
elementul.appendChild(elementli)

}