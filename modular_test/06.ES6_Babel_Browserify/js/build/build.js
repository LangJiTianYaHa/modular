(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var hahha3 = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var haha2 = _interopRequireWildcard(_module2);

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

var _uniq = require('uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//module1

//如果模块是默认暴露的，尽量就不要用如下的写法
// import * as module3_3 from './module3'


//引入module4  多种暴露


//引入module2,module2是【统一暴露】的
// import  {demo2,test2}  from './module2'
// import  {demo2_1,demo2_2} from "./module2";
//【另外一种写法】，引入module2,module2是【统一暴露】的，此种引入方式会将module2暴露的内容，收集成一个对象
console.log(hahha3.data);

//引入第三方库uniq


//【引入module3,module3是默认暴露的】

/*
* 主文件 用于汇总各个模块
* */
//在es6语法中，用哪一种方式引入，取决于何种方式暴露

//引入module1，module1是【分别暴露】的
// import  {data,demo1,test1} from './module1'
//【另外一种写法】：引入module1，module1是【分别暴露】的，此种引入方式会将module1暴露的内容，收集成一个对象

hahha3.demo1();
hahha3.test1();

//module2
// demo2()
// test2()
// demo2_1()
// demo2_2()

haha2.demo2();
haha2.test2();

//module3
console.log(_module4.default);
// module3_3.speak();

//uniq
console.log((0, _uniq2.default)([1, 3, 3, 3, 2, 5, 4, 6, 7, 9, 8, 15])); //去重 排序


//module4
console.log(_module5.arr0, _module5.str, _module5.student, _module5.d1);
(0, _module5.bar)();
(0, _module5.foo)();
_module5.d1.run();
console.log(_module6.default);
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5,"uniq":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demo1 = demo1;
exports.test1 = test1;


/*
* module1  使用了【分别暴露】 的方式
* */

var data = exports.data = 'atguigu';

function demo1() {
  console.log('\u6211\u662Fmodule1 \u91CC\u7684demo \u51FD\u6570', data.toUpperCase());
}

function test1() {
  console.log('\u6211\u662Fmodule1 \u91CC\u7684test1\u51FD\u6570', data.toLowerCase());
}
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
* module3  使用默认暴露 ，只能暴露一次
* */

// export default 2
exports.default = {
  name: 'peiqi',
  age: 18,
  speak: function speak() {
    var _this = this;

    setTimeout(function () {
      console.log('\u6211\u7684\u540D\u5B57\u662F' + _this.name + '\uFF0C\u6211\u7684\u5E74\u9F84\u662F' + _this.age);
    }, 1000);
  }
};
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.bar = bar;
exports.foo = foo;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* 混合暴露

* */

//分别 暴露

var arr0 = exports.arr0 = [1, 5, 9, 2];

function bar() {
  console.log('module4-------bar()');
}

function foo() {
  console.log('module4-------foo()');
}

//统一暴露
var str = 'hello, atguigu';
var student = { name: 'peiqi', age: 18 };

var Dog = function () {
  function Dog(name, age) {
    _classCallCheck(this, Dog);

    this.name = name;
    this.age = age;
  }

  _createClass(Dog, [{
    key: 'run',
    value: function run() {
      console.log('我正在 奔跑');
    }
  }]);

  return Dog;
}();

var d1 = new Dog('wc', 18);
exports.str = str;
exports.student = student;
exports.d1 = d1;

//默认 暴露

exports.default = {
  school: 'atguigu',
  price: '15k'
};
},{}],6:[function(require,module,exports){
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
