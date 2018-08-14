## ES6-Babel-Browserify使用教程
1. 定义package.json文件:

    * npm init

    * 直接定义
```
{
    "name":"es6-babel-browserify",
    "version":"1.0.0"
}
```
2. .js文件

    先编写：js/src下的js文件

3. 编译

  * 使用Babel将ES6编译为ES5代码(但包含CommonJS语法) : babel js/src -d js/lib   (lib会自创建文件的)

  * 使用Browserify编译js : browserify js/lib/app.js -o js/lib/bundle.js

4. 页面中引入测试
  ```
  <script type="text/javascript" src="js/lib/bundle.js"></script>
  ```