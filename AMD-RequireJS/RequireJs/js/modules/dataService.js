/**
 * 定义没有依赖的模块
 */
define(function(){
  let msg ='Hello World!';
  function getMsg(){
      return msg.toLocaleUpperCase();
  }
  //暴露模块 用return
	return {getMsg}
})