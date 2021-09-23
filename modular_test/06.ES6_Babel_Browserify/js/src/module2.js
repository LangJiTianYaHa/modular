
/*
* module2  使用的是【统一暴露】
* */

//arr 是私有属性  不去暴露

let arr  =  [1,2,3,8,9]

function demo2() {
  console.log(`我是module2里的demo2函数`,arr)

}

function test2() {
  console.log(`我是module2里的test2函数`,arr)
}


//统一暴露(精简版)

export {demo2,test2}

//统一暴露（完整版）
/*export {
  demo2 as demo2_1,
  test2 as demo2_2
}*/
