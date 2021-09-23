"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
* module2  使用的是【统一暴露】
* */

//arr 是私有属性  不去暴露

var arr = [1, 2, 3, 8, 9];

function demo2() {
  console.log("\u6211\u662Fmodule2\u91CC\u7684demo2\u51FD\u6570", arr);
}

function test2() {
  console.log("\u6211\u662Fmodule2\u91CC\u7684test2\u51FD\u6570", arr);
}

//统一暴露(精简版)

exports.demo2 = demo2;
exports.test2 = test2;

//统一暴露（完整版）
/*export {
  demo2 as demo2_1,
  test2 as demo2_2
}*/