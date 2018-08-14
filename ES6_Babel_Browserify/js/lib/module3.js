// 常规暴露 默认暴露
// export default value
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'Tom',
    setName: function setName(name) {
        this.name = name;
    }
};

// export default {
//     msg:"默认暴露",
//     foo(){
//         console.log(this.msg);
//     }
// }+-