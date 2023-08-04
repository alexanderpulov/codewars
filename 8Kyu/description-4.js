// Напишите функцию calc(), которая принимает в параметры a и b, а также operation. 
// В зависимости от переданной операции (+, -, /, *) возвращаем необходимый результат выражения с числами. 


// SOLUTION:
function calc(a, b, operation) {
    return eval(a + operation + b)
  }

console.log(calc(10, 2, '-')) //8