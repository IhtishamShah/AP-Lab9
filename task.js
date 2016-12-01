let expression  = '0 = x^2 + 5'
expression = expression.split(' ') 
console.log("Equation: ",expression)


let operations = ['+','-','*','/','^']

function evaluateRight(exp){
	let state = false
	let rightSide = exp.filter(function(element){
		if(element == '='){
			state = true
		}
		if(state && element != '='){
			return element
		}
	})
	return rightSide
}

function evaluateLeft(exp){
	let state = false
	let leftSide = exp.filter(function(element){
		if(element != '=' && !state){
			return element
		}
		if(element == '='){
			state = true
		}
	})
	return leftSide
}

function evaluateConstants(exp){
	let constants = exp.filter(function(element){
		if(!isNaN(parseInt(element))){
			return element
		}
	})
	.map(function(element){
		return parseInt(element)
	})
	return constants
}

function evaluateVariables(exp, opr){
	let variables = {}
	exp.forEach(function(element){
		if(!opr.includes(element) && isNaN(parseInt(element)) && element!='='){
			element.split('')
				.filter(function(el){
					if(!isNaN(parseInt(el))){return el}
				})
				.forEach(function(el){
					variables[el] = parseInt(el)
				})
		}
	})
	return variables
}

function evaluateOperators(exp, oper){
}


// equation split into two arrays
let parseRight = evaluateRight(expression)
let parseLeft = evaluateLeft(expression)
// find all costants on each side of the equation
let constantsRight = evaluateConstants(parseRight)
let constantsLeft = evaluateConstants(parseLeft)
console.log("Right side of the equation: ",parseRight)
console.log("Left side of the equation: ",parseLeft)
console.log("Constants on the right side of the equation: ",constantsRight)
console.log("Constants on the left side of the equation: ",constantsLeft)

// find variables on each side of the equation into a map
let variablesRight = evaluateVariables(parseRight, operations)
let variablesLeft =  evaluateVariables(parseLeft, operations)
console.log("Variables on the right side of the equation: ",variablesRight) 
console.log("Variables on the left side of the equation: ",variablesLeft)



