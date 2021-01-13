function equationAdd(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
    document.getElementById("answer").innerHTML = num1 + num2
}
function equationSub(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
    document.getElementById("answer").innerHTML = num1 - num2
}
function equationMul(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    console.log(`${num1} * ${num2} = ${num1 * num2}`)
    document.getElementById("answer").innerHTML = num1 * num2
}
function equationDiv(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
    document.getElementById("answer").innerHTML = num1 / num2
}




function button(){
    let score = document.getElementById('answer').innerHTML
score++
document.getElementById('answer').innerHTML = score
}