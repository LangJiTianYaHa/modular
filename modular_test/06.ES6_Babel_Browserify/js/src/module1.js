

/*
* module1  使用了【分别暴露】 的方式
* */

export let data  = 'atguigu';

export function demo1(){
  console.log(`我是module1 里的demo 函数`,data.toUpperCase())
}

export function test1(){
  console.log(`我是module1 里的test1函数`,data.toLowerCase())
}