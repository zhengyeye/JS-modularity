/**
  1. 定义暴露模块:
    module.exports = value;
    exports.xxx = value;
  2. 引入模块:
    var module = require(模块名或模块路径);
*/
//引用模块
let module1 = require('./modules1')
let module2 = require('./modules2')
let module3 = require('./modules3')

let uniq = require('uniq');

//使用模块
module1.foo()

console.log(uniq([1, 3, 1, 4, 3]))
