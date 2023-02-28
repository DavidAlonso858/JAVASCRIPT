function suma(a, b) {
    console.log(a + b)
}

suma(5, 5)
suma(99, 100)

var sayHello = function(name = 'world'){
    return `Hello ${name}`
}

console.log(sayHello())
console.log(sayHello('David'))


var sayBye = (name) => {return `Bye ${name}`}

console.log(sayBye('Juan'))
