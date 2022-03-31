//function CreateCalculator(num1, sym, num2) {
//    this.a = num1
//    this.b = num2
//    this.symbol = sym
//    this.multiply = function() {
//        return num1 * num2
//    }
//    this.add = function() {
//        return num1 + num2
//    }
//    this.subtract = function() {
//        return num1 - num2
//    }
//    this.division = function() {
//        return num1 / num2
//    }
//    this.calculate = function() {
//        if (this.symbol === '+') return this.add()
//        if (this.symbol === '-') return this.subtract()
//        if (this.symbol === '*') return this.multiply()
//        if (this.symbol === '/') return this.division()
//    }
//}

function MakeCalculator() {
    const that = this;

    this.display = function(click) {
        document.querySelector('.display').textContent += click.target.textContent
    }
    this.output = function(output) {
        document.querySelector('.display').textContent = output
    }
    this.array = function() {
        return document.querySelector('.display').textContent.split(' ')
    }
    this.reset = function() {
        document.querySelector('.display').textContent = ''
    }
    this.methods = {
        "-": function(a, b) {return a - b},
        "+": function(a, b) {return a + b},
        "x": function(a, b) {return a * b},
        "/": function(a, b) {return a / b},
    }
    this.test = function(click) {
        let arr = that.array()
        if (arr.length === 3) {
            that.calculate()
            that.display(click)
        }
        else {
            that.display(click)
        }
    }
    this.calculate = function() {
        let arr = that.array()
        let a = 0, b = 0, op = '+', output = 0
        op = arr[1]
        a = +arr[0]
        b = +arr[2]
        output = that.methods[op](a, b);       
        that.output(that.methods[op](a, b))
    }
}



let calculator = new MakeCalculator()
const equation = document.querySelectorAll('.insert')

Array.from(equation).forEach(element => element.addEventListener('click', calculator.display))

const operators = document.querySelectorAll('.math')
Array.from(operators).forEach(element => element.addEventListener('click', calculator.test))

document.querySelector('.equate').addEventListener('click', calculator.calculate)
document.querySelector('.reset').addEventListener('click', calculator.reset)