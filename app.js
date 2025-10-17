let resultElement = document.querySelector("#out-result") 

let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")


let submitBtn = document.querySelector("#submit")
let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let multiple = document.querySelector("#multiple")
let divide = document.querySelector("#divide")


let action = ""
plus.onclick = function(){
  action = "+"
}
minus.onclick = function(){
  action = "-"
}
let actio = ""
divide.onclick = function(){
  action = "/"
}
multiple.onclick = function(){
  action = "*"
}

submitBtn.onclick = function(){
  console.log(resultElement)
   if(action == "+"){
      let sum = Number(input1.value) + Number(input2.value)
      resultElement.innerHTML = sum
      console.log(sum)

   }else if(action == "-"){
     let sum = Number(input1.value) - Number(input2.value)
     resultElement.innerHTML = sum
  }else if(action == "*"){
    let sum = Number(input1.value) * Number(input2.value)
    resultElement.innerHTML = sum 
  }else if(action == "/"){
    let sum = Number(input1.value) / Number(input2.value)
    resultElement.innerHTML = sum
  
}
}