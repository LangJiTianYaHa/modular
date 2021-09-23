/*
*
* main  ： 主（入口） 模块
*
* */

define (function (require){
  let m1 = require('./module1')
  let m4 = require('./module4')
  m1.fun1()
  m4.fun4()

})