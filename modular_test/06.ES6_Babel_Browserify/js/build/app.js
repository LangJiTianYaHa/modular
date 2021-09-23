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