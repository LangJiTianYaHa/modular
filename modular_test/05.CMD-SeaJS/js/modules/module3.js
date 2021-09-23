


//module2

define(function (require,exports,module){
  let name = 'module3'

  function fun3(){
    console.log(name)
  }

  //暴露 模块
  module.exports = {fun3}

})