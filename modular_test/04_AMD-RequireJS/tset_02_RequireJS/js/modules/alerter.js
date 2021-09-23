

/*
*
*  定义一个 有依赖的模块
* */

define(['dataService','jquery'],function (dataService,$) {

  let name = 'Tom2'

  function showMsg() {
    $('body').css('background','red')
    alert(dataService.getMsg()+','+name)

  }


  //return 模块
  return {showMsg}

})