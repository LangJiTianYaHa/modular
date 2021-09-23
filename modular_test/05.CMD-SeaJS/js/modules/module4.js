

//module4 依赖于 module2 module3
define(function (require,exports,module) {

  //同步引入 module2
  let module2 = require('./module2')
  module2.fun2()

  //异步引入module3
  require.async('./module3',function (m3) {
    m3.fun3()
  })


  let name = 'module4'
  function fun4() {
    console.log(name)

  }
  //暴露module4
  module.exports = {fun4}



})