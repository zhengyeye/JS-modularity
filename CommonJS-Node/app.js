/**
 1. 定义暴露模块:
 module.exports = value;
 exports.xxx = value;
 2. 引入模块:
 var module = require(模块名或模块路径);
 */
"use strict"
var module1 = require('./modules/modules1');
var module2 = require('./modules/modules2');
var module3 = require('./modules/modules3');

var arr = [1, 1, 2, 2, 3, 5]
 
require("uniq")(arr);
console.log(arr);//[ 1, 2, 3, 5 ]

module1.foo();//this is module1's foo