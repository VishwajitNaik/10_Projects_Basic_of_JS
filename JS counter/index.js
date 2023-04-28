//access the value of the number 
function Increment (){
    var number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number + 1
}

function Decrement (){
    var number = Number(document.getElementById('number').innerHTML)
    if(number > 0){
        document.getElementById('number').innerHTML = number - 1
    }
    
}

function Nuetral (){
    var number = Number(document.getElementById('number').innerHTML)
    if(number > 0){
        document.getElementById('number').innerHTML = 0
    }
}