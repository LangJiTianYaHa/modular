

//module2

define(function (require,exports,module){
  let name = 'module2'

  function fun2(){
    console.log(name)
  }

  //暴露 模块
  module.exports = {fun2}

})