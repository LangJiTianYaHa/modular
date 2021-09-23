

/*
* 主文件 用于汇总各个模块
* */
//在es6语法中，用哪一种方式引入，取决于何种方式暴露

//引入module1，module1是【分别暴露】的
// import  {data,demo1,test1} from './module1'
//【另外一种写法】：引入module1，module1是【分别暴露】的，此种引入方式会将module1暴露的内容，收集成一个对象
import  * as hahha3 from './module1';


//引入module2,module2是【统一暴露】的
// import  {demo2,test2}  from './module2'
// import  {demo2_1,demo2_2} from "./module2";
//【另外一种写法】，引入module2,module2是【统一暴露】的，此种引入方式会将module2暴露的内容，收集成一个对象
import * as haha2 from './module2'


//【引入module3,module3是默认暴露的】

import module3 from "./module3";
//如果模块是默认暴露的，尽量就不要用如下的写法
// import * as module3_3 from './module3'


//引入module4  多种暴露
import module4,{arr0,bar,foo,str,student,d1} from "./module4";


//引入第三方库uniq
import uniq from 'uniq';



//module1
console.log(hahha3.data)
hahha3.demo1()
hahha3.test1()

//module2
// demo2()
// test2()
// demo2_1()
// demo2_2()

haha2.demo2()
haha2.test2()



//module3
console.log(module3)
// module3_3.speak();

//uniq
console.log(uniq([1, 3, 3, 3, 2, 5, 4, 6, 7, 9, 8,15]));  //去重 排序



//module4
console.log(arr0,str,student,d1)
bar()
foo()
d1.run()
console.log(module4)