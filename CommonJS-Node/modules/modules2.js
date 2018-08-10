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