
// module1

define(function (require,exports,module){
  let name = 'module1'

  function fun1(){
    console.log(name)
  }

  //暴露 模块
  module.exports = {fun1}

})