(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./modules1":2,"./modules2":3,"./modules3":4,"uniq":5}],2:[function(require,module,exports){
/**
 * 使用module.exports = value向外暴露一个函数
 */
"use strict"
module.exports ={
    foo(){
        console.log("this is module1's foo ");
    }
};
},{}],3:[function(require,module,exports){
/**
 * 使用module.exports = value向外暴露一个函数
 * @type {{foo(): void}}
 */
"use strict"
module.exports ={
    foo(){
        console.log("this is module2's foo ");
    }
};
},{}],4:[function(require,module,exports){
/**
 * 使用exports.xxx = value向外暴露一个对象
 */
"use strict"

exports.foo = function () {
    console.log("this is modules'3 foo");
};
exports.bar = function () {
    console.log("this is modules'3 bar");
};
},{}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
