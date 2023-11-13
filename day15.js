// Constructor , Classes

// function Mobile(color="white"){
//     this.width = 20
//     this.height = 30
//     this.color = color
// }

// let m1 = new Mobile("red");
// let m2 = new Mobile("black");
// let m3 = new Mobile("gray");
// let m4 = new Mobile();

// console.log(m1);
// console.log(m2.color);
// console.log(m3.color)
// console.log(m4.color)

// let now = new Date()
// console.log(now.getMonth()+1)
// console.log(now.getTime())

// let arr = [1,2,3,4]

// for (const arr1 of arr) {
//     console.log(arr1)
// }

// for(let mob in m1){
//     console.log(m1[mob])
// }

// Classes

// class Mobile {
    // code goes here
    // w = 212
// }

// let m1 = new Mobile();

class baseMobile {
    constructor() {
        console.log("parent")
    }

    calling = function(){
        console.log("calling...")
    };
}


class Mobile extends baseMobile{
     constructor(color) {
        console.log("child")
        super()
        this.width = 20
        this.height = 30
        this.color = color
    }
}

// let m1 = new Mobile('red');
// let m2 = m1
// let m3 = new Mobile('red');

// console.log(m1 === m2)
// console.log(m1 === m3)