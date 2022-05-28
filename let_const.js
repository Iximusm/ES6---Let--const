function multiply(a, b){
    console.log (a * b)
}

function double(a){
    console.log(a * 2)
}

multiply (4, 2)
double (18)

let multiplyFunc = (a,b) => console.log (a * b)

multiplyFunc (4, 6)

let doubleFunc = a => console.log (a * 3)

doubleFunc (10)

setTimeout (() => {
    console.log ('Прошло 4 секунды')
}, 4000)

let obj = {
    name: 'Anna',
    age: 42,
    hello : function(){
        console.log('Привет, меня зовут: ' + this.name + 'мой возраст: ' + this.age)
},
    }

    console.log (obj.name);
    console.log (obj.age);
    obj.hello();