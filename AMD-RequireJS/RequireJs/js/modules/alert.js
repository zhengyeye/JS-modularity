/**
 * 定义有依赖的模块
 */
define(['dataService', 'jquery'], function(dataService, $){
  let name='Bob';
  function showMsg(){
    $('body').css('background','pink');
    console.log(dataService.getMsg()+'=============='+name);
  }
  //暴露模块 用return
	return {showMsg}
})