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