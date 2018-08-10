(function(window){
let msg ='Hello World!';
function getMsg(){
    return msg.toLocaleUpperCase();
}
window.dataService={getMsg};
})(window);