
/*
* main 文件
* */

(function () {

  //配置模块
  require.config({
    //基本路径
    baseUrl:'js/',
    //映射
    paths:{
      //自定义模块
      "alerter":'modules/alerter',
      "dataService":'modules/dataService',


      //库模块
      "jquery":'libs/jquery-1.10.1',
      'angular':'libs/angular'
    },
    
    //配置 不兼容AMD 的模块
    shim:{
      angular: {
        exports:'angular'
      }
    }


  })


  //引入模块使用
  require(['alerter','angular'],function (alerter,angular) {

    alerter.showMsg()
    console.log(alerter)
    
    console.log(angular)



  })
})()