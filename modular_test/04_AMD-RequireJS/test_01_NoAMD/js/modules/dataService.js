

/*
*   没有依赖的模块
*
* */

(function (window){

  let msg = 'atiguigu.com'

  function getMsg(){
    return msg.toUpperCase()
  }

  //向外暴露
  window.dataService = {getMsg};

})(window)