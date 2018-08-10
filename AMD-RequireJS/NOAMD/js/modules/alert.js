(function(window,dataService){
    let name='Tom';
    function showMsg(){
        console.log(dataService.getMsg()+'=============='+name);
    }
    window.alert={showMsg}
})(window,dataService);