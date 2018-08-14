// 暴露模块，分别暴露
export function foo() {
  console.log('module1 foo()');
}

export let bar = function () {
  console.log('module1 bar()');
}

export let arr = [1, 3, 5, 1]