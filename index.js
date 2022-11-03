

// let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
// arr.filter(num => {
//     if(typeof num === 'number'){
//         console.log('good');
//     } else{console.log('bad')}
// } )    

// let bln = +[[{ a: { price: 20 } }],[{ a: { price: 35 } }],[{ a: { price: 44 } }]]

// console.log(bln[4] + bln[5] )
// let total = log




// // 1
// let cars = [4000, 27000, 16000, 10000, 11000, 17000, 50000,  70000, 60000, 300, 2000, 8000]

// let cheap = []
// if(cars >= cars.splice(35000)){
//     console.log('good');
// } else(console.log('bad'))

//2
let arr = [4,1,2,5,4,46,11,9,27,8,33,0,9]

let even = []
let odd = []

arr.filter(num =>{
    if(num % 2 === 0){
        even.push(num)
    }
     else{
    odd.push(num)
} 
})
// 3
 let students = ['Aziz', 'Saidbek', 'Shaxzod', 'Emil', 'Ozod']
let name = prompt('Кого удалить, напишите имя')
let index = students.indexOf(name)

if(index !== -1){
    console.log(students);
    console.log(students.splice(index, 1));
} else{
    console.log('We have not this name in our array');
}

