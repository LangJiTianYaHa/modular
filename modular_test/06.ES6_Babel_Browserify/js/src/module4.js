/*
* 混合暴露

* */

//分别 暴露

export let arr0 = [1,5,9,2]

export function bar() {
  console.log('module4-------bar()')
}

export function  foo() {
  console.log('module4-------foo()')

}

//统一暴露
let str  = 'hello, atguigu'
let student = {name:'peiqi',age:18};

class Dog{
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  run(){
    console.log('我正在 奔跑')
  }
}
let d1 = new Dog('wc',18)
export {str, student, d1}


//默认 暴露
export  default {
  school:'atguigu',
  price:'15k'
}


