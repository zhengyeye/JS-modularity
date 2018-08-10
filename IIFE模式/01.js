//匿名函数
(function (window,$) {
    let msg = 'moudle1';

    function foo() {
        console.log('foo()', msg);
    }

    window.moudle1 = foo;
    $('body').css('background',red);
})(window,jquery);