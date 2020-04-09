
function operation(){
    var x = document.querySelector('#name1').value;
    var y = document.querySelector('#name2').value;
    var operator = document.querySelector('#operators').value;
    // console.log(operator)
    if (operator=="+"){
        resultLambda = eel.add(x,y)
    } 
    else if (operator=="-"){
        resultLambda = eel.sub(x,y)
    }
    else if(operator=="concatenation"){
        resultLambda = eel.concatenation(x,y)
    }
    else if(operator=="*"){
        resultLambda = eel.multiply(x,y)
    }
    resultLambda(result => {
		document.querySelector('#output').innerText = result;
	});
}