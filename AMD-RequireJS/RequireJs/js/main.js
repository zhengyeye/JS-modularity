//requirejs：主页面只需要引入主模块一个js，其他js均不需要引用
(function(){
  require.config({
    baseUrl: "js/",//基本路径，出发点在根目录下
    paths: {//配置路径
      //自定义模块
      "alert": "modules/alert",
      "dataService":"modules/dataService",
      //库模块 jquery支持AMD angular不支持AMD
      "jquery":"libs/jquery-1.10.1",//从jquery源代码中可以看出名字就是小写
      "angular":"libs/angular"
    },
    // shim: 为那些没有使用define()来声明依赖关系、
    //设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置
    shim:{
      angular:{
        exports:"angular"
      }
    }
  });

  //引入模块引用
  require(['alert','angular'],function(alert,angular){
    alert.showMsg();
    console.log(angular);
  })
})();