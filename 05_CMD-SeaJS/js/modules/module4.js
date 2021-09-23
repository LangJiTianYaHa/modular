/*
* 定义一个有依赖的模块，module4,依赖于module2和module3
* */

define(function (require,exports,module) {


  //引入module2-----同步引入
  let module2 = require('./module2')
  module2.getData()

  //引入module3-----异步引入
  require.async('./module3',function (m3) {
    m3.getData()
  })

  //module4
  let data = '--------module4---------'
  function getData() {
    console.log(data)
  }

  module.exports = {getData}
})

