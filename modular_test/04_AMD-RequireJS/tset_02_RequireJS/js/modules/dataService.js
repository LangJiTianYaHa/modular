/*
*  定义一个 没有依赖的模块
*
* */

define(function () {

  let msg = 'atguigu.com'

  function getMsg(){
    return msg.toUpperCase()
  }

  //return 模块
  return {getMsg}

})