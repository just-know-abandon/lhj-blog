# 导入vue.js

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>  
或

<script src="../Day1/js/vue.js"></script>
![1578412940887](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578412940887.png)

# Hello Vue

![1578412974044](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578412974044.png)

效果图：

![1578395529520](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578395529520.png)



# 列表显示：v-for

![1578413005857](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578413005857.png)

console中添加数组

app.movies.push('蜘蛛侠')

效果图：

![1578395593364](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578395593364.png)

# v-on:click

v-on:click=""=@click=""

![1578413036188](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578413036188.png)

效果图：

![1578395660669](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578395660669.png)

# {{}}Mustache语法

![1578413076562](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578413076562.png)

效果图：

![1578395696852](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578395696852.png)

# v-once

v-once后不需要跟表达式

该元素只渲染一次，不会随数据的改变而改变

![1578413104290](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578413104290.png)

效果图：

![1578395752622](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578395752622.png)

# v-html

按照html格式进行解析，并且显示对应内容

v-html的使用：后面跟上一个string类型

![1578413120497](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578413120497.png)

效果图：

![1578396312748](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578396312748.png)

# v-text

与{{}}相似，用于数据显示，通常情况下接受一个string类型

![1578413141616](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578413141616.png)

效果图：

![1578396406254](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578396406254.png)

# v-pre

直接输出{{}}的内容

![1578413168615](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578413168615.png)

效果图：

![1578396499778](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578396499778.png)

# v-cloak

用于js执行完毕后才显示div

![1578413200125](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578413200125.png)

效果图：

![1578396652766](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578396652766.png)

![1578396658372](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578396658372.png)

# v-bind

动态绑定：

a元素的href、img元素的src等

v-bind用于绑定一个或多个属性值，或向另一个组件传递props值

  <!-- v-bind:src=""  简写  :src""" -->

![1578412902050](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578412902050.png)

效果图：

![1578397038287](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578397038287.png)

## v-bind动态绑定class(对象语法)

动态控制class

可以用{}绑定多个类，通过判断传入多个值，可与普通类同时存在

:class="{active:isActive,...:...}"

:class="{对象名:boolean}"

核心代码：

  <!-- <h2 class="title" :class="{active:isActive,line:isLine}">{{message}}</h2> -->

 <!-- <h2 class="title" :class="getClasses()">{{message}}</h2> -->

![1578412818089](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578412818089.png)

效果图：

![1578413317273](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578413317273.png)

![1578413325490](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578413325490.png)

## v-bind动态绑定class(数组语法)

![1578415098605](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578415098605.png)

效果图：

![1578415110293](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578415110293.png)

![1578415117428](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578415117428.png)

## v-bind动态绑定style(对象语法)

属性值数字要加单引号，Vue不加单引号会变成变量，就报错

变量直接解析data对应的变量

![1578417892677](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578417892677.png)

效果图：

![1578417716556](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578417716556.png)

## v-bind动态绑定style(数组语法)

![1578418215806](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578418215806.png)

![1578418224676](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578418224676.png)



# 计算属性的基本使用

合并输出

![1578469928727](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578469928727.png)

效果图：

![1578469938997](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578469938997.png)

# 计算属性的复杂操作

通常computed只是计算一下data中的数据

![1578470840601](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578470840601.png)

效果图：

![1578470851384](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578470851384.png)

# 计算属性的setter和getter

set基本不写，一般只写get，所以直接用fullName2一样

![1578474919581](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578474919581.png)

效果图：

![1578475019926](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578475019926.png)

![1578475060484](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578475060484.png)

# 计算属性和methods的对比

使用计算属性，可以加快页面渲染速度，提高性能

 <!-- 1.直接拼接:语法过于繁琐 -->

 <h2>{{firstName}} {{lastName}}</h2>
 <!-- 2.通过定义methods：调用n次，打印n次 -->

 <h2>{{getFullName()}}</h2>
 <!-- 3.通过计算属性：调用n次，也只打印1次(性能高) -->

 <h2>{{fullName}}</h2>
![1578588485065](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578588485065.png)

# ES6补充

## let/var

![1578588547053](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578588547053.png)

![1578588568069](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578588568069.png)

![1578588586139](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578588586139.png)



使用const修饰的标识符为常量，不可再次赋值，确保数据的安全性

建议：在ES6开发中，优先使用const，只有需要改变某一个标识符的时候才使用let

## const的使用

1.用const定义的变量不可再修改

2.用const定义的变量必须赋值

3.对于对象来说，用const定义之后，指向不可再更改，但可以改内部属性

![1578649329801](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578649329801.png)

![1578649353515](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578649353515.png)

## ES6简写

![1578661345530](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578661345530.png)

![1578661373380](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578661373380.png)

# 事件监听v-on

监听用户发生的时间，比如点击，拖拽，键盘时间等

v-on作用：绑定时间监听器

缩写：@

传参：event

![1578672710419](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578672710419.png)

![1578672726394](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578672726394.png)

三种传参情况：

![1578672775830](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578672775830.png)

# v-on修饰符

![1578756702752](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578756702752.png)

# v-if、v-else-if、v-else

v-if后面条件为false时，对应的元素及其子元素不会渲染

也就是根本没有不会有对应的标签出现在DOM中

## v-if

![1578757949424](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578757949424.png)

## v-else

![1578757977329](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578757977329.png)

## v-else-if

推荐用下面的

![1578758018789](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578758018789.png)

## 登录切换小案例

![1578759145584](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578759145584.png)

![1578759168417](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578759168417.png)

![1578759174949](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578759174949.png)

使用上面代码回有bug，input的内容在切换后依然在

原因：因为vue在进行DOM渲染时，处于性能考虑，会尽可能复用已存在的元素，而不是船舰新的元素，Vue内部会发现原来的input元素不再使用，直接作为else中的input来使用

解决：如果不希望VUE出现类似重复利用的问题，可以给对应的input添加key，并保证key的不同

![1578843560060](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578843560060.png)



# v-show

v-show与v-if相似，也是决定一个元素是否渲染

对比：

v-if条件为false时，不会有对应的元素出现在DOM

v-show条件为false时，仅仅是将元素的display属性设置为none

选择：

需要在显示与隐藏之间切换频繁时，用v-show

只需要一次切换，用v-if

![1578844361283](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578844361283.png)

![1578844387515](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578844387515.png)



![1578844398774](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578844398774.png)



# v-for

## v-for遍历数组

![1578844850004](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578844850004.png)

![1578844856509](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578844856509.png)

过程中插入数据：

![1578847583715](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578847583715.png)

![1578847774517](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578847774517.png)







## v-for遍历对象

![1578845316209](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578845316209.png)

![1578845326223](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578845326223.png)

## 哪些数组的方法是响应式

使用key，之前的虚拟dom会保留下来，再次渲染时，会重新生成一个新dom，两个dom一层层对比，首先对比key值，如果相同，就认为可以复用，就不生成新的dom，性能更高

以下方法都可以响应式执行：

![1578933663909](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578933663909.png)

![1578933695766](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578933695766.png)



不能响应式改变：

![1578933707382](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578933707382.png)

![1578931301992](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578931301992.png)

# 点击高亮

![1578934686462](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578934686462.png)

![1578934671286](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1578934671286.png)

# 购物车案例

html部分：

# ![1579097688074](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579097688074.png)

css部分

![1579097708366](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579097708366.png)

js部分：

![1579097729260](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579097729260.png)

![1579097816007](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579097816007.png)

for循环的几个写法：

![1579111217257](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579111217257.png)

效果：

![1579097858997](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579097858997.png)



# 过滤器filter,map,reduce

![1579111358671](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579111358671.png)

![1579111402750](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579111402750.png)

## 过滤器filter

![1582383751703](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582383751703.png)

# Vue.set

![1582448586991](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582448586991.png)

![1582448623963](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582448623963.png)



# v-model

Vue中使用v-model实现元素和数据的双向绑定

v-model其实是一个语法糖，背后包含两个操作：

1.v-bind绑定一个value属性

2.v-on指令给当前元素绑定input事件

![1579163286027](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579163286027.png)

![1579163301883](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579163301883.png)

## v-model.number/.trim/.lazy

number：转为数值

trim：去掉头尾空格

lazy:将input事件切换为change事件(就是不同时改变数据，在文本输入完切出才更改)

![1582306748473](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582306748473.png)







## v-model+radio

label：通过旁边的字也能选选项 for的内容=id

已经有v-model绑定同一个sex，不需要再添加name属性

![1579165133022](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579165133022.png)

![1579165148193](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579165148193.png)

## v-model+checkbox

![1579354326166](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579354326166.png)

![1579354369783](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579354369783.png)

## v-model+select

多选事要按着ctrl

![1579364264433](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579364264433.png)

![1579364299433](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579364299433.png)

## 值绑定

动态绑定值

![1579366703058](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579366703058.png)

![1579366715404](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579366715404.png)

## v-model修饰符：lazy

![1579367332481](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579367332481.png)

![1579367994634](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579367994634.png)



# 自定义指令directive

用directive自己定义v-focus一进入页面，光标就聚焦在文本框

![1582307242468](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582307242468.png)

![1582307583520](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582307583520.png)

## 带参数的自定义

![1582307776251](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582307776251.png)

## 局部指令

![1582307957241](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582307957241.png)









# 组件化

将页面拆分成多个小的功能块，每个功能块完成属于这部分的独立功能，再组合到一起成一个完整的页面，对于页面的管理和维护更加简单

组件使用的三个步骤：

1.创建组件构造器：Vue.extend()

2.注册组件：Vue.component()

3.使用组件：<my-cpn></my-cpn>

1.Vue.extend()

​	调用Vue.extend()创建的是一个组件构造器

​	通常在创建组件构造器时，传入template代表我们自定义组件的模板

​	该模板就是在使用到组件的地方，要显示的HTML代码

​	事实上，这种写法在Vue2.x的文档中几乎看不到了，会直接使用新的语法糖，是后面学习的基础

2.Vue.component()

​	调用Vue.component()是将刚才的组件构造器注册为一个组件，并且给它起一个组件的标签名称

​	两个参数：1.注册组件的标签名	2.组件构造器

3.组件必须挂载在某个Vue实例下，否则不生效：	el:''

![1579447051530](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579447051530.png)

 ![1579447059090](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579447059090.png)

## 全局组件和局部组件

![1579448160967](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579448160967.png)

![1579448170143](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579448170143.png)

## 父组件和子组件

![1579448904647](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579448904647.png)

![1579448913123](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579448913123.png)

## 组件的语法糖注册方式

省去了调用Vue.extend()的步骤

![1579450589454](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579450589454.png)

![1579450617592](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579450617592.png)

## 组件模板分离写法

使用<script>标签

使用<template>标签

![1579588081149](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579588081149.png)

![1579588095048](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579588095048.png)



## 组件中数据存放问题

组件是一个单独功能模块的封装，这个模块有属于自己的HTML模板，也应该有属性自己的数据data

组件不可以直接访问Vue实例的数据data，既使能访问，也不推荐，会变得很臃肿

Vue组件应该有自己保存数据的地方

组件对象也有一个data属性（也可以有methods属性）

这个data属性必须是一个函数，并返回一个对象，对象内容保存着数据

![1579590067587](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579590067587.png)

## 为什么data必须是个函数

![1579591694563](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1579591694563.png)





## 父组件向子组件传递数据

![1580363918106](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580363918106.png)

![1580363939365](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580363939365.png)





## props数据验证

![1580365581067](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580365581067.png)

![1580365593653](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580365593653.png)

![1580370567902](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580370567902.png)



## props驼峰

![1580797389928](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580797389928.png)





## 子组件向父组件传递

![1580801913449](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580801913449.png)

![1580801944158](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580801944158.png)

![1580801990934](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580801990934.png)

总结：

![1580802230975](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580802230975.png)

![1580802278933](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580802278933.png)

![1580802289719](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580802289719.png)

![1580802296756](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580802296756.png)

![1580802339161](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1580802339161.png)





## 父子组件通信

![1581354217765](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581354217765.png)

![1581354251370](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581354251370.png)

![1581354268173](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581354268173.png)

-------------------------------------------------

![1581354292456](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581354292456.png)

![1581355529921](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581355529921.png)





## watch方法实现

监听某个数据一旦发生改变，就执行

![1581407409540](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581407409540.png)

![1581407391200](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581407391200.png)



## 父子组件的访问方式：  $children

![1581407974877](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581407974877.png)

$children--子组件

$refs--子组件（指定）

$parent--父组件

$root--实例



## 插槽slot

![1581426780232](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581426780232.png)

![1581663968066](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581663968066.png)

![1581663988525](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581663988525.png)





## 具名插槽slot

![1581664011049](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581664011049.png)

![1581664015722](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581664015722.png)



## 插槽编译作用域

![1581664086966](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581664086966.png)

![1581664094611](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581664094611.png)









## 作用域插槽的案例

![1581864928155](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581864928155.png)

![1581864941139](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581864941139.png)

![1585148727060](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585148727060.png)











# 为什么组件化

![1581869377439](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581869377439.png)

![1581870002856](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581870002856.png)

![1581870056754](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581870056754.png)

<img src="C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581870010611.png" alt="1581870010611" style="zoom:150%;" />



## CommonJS

![1581870710934](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581870710934.png)

<img src="C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581870738506.png" alt="1581870738506" style="zoom:150%;" />

<img src="C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581870661505.png" alt="1581870661505" style="zoom:150%;" />



## ES6模块化

![1581872105666](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581872105666.png)

导出

![1581872297141](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581872297141.png)

![1581872497879](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581872497879.png)

![1581872551860](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581872551860.png)

​	default只能有一个，所以导入名称可以随便写

![1581873309677](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581873309677.png)![1581873324694](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581873324694.png)



导入

![1581872125267](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581872125267.png)



![1581874665344](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581874665344.png)

![1581874820823](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581874820823.png)





# Webpack

![1581921152360](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581921152360.png)

![1581921168074](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581921168074.png)

![1581921182610](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581921182610.png)

![1581922279314](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581922279314.png)

 

## webpack安装

![1581927084728](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1581927084728.png)



## webpack先跳过



# Vue CLI

创建

vue create vuecli-demo

![1582011269105](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582011269105.png)

![1582011293600](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582011293600.png)

运行

npm run serve

![1582011330619](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582011330619.png)

关闭

ctrl+c

![1582011363980](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582011363980.png)



## 全局注册

任何地方都可以使用这个组件

![1582034400578](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582034400578.png)



## 局部注册

![1582034472359](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582034472359.png)







## 基本结构

![1585234827816](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585234827816.png)

![1582034505348](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582034505348.png)







## 脚手架的遍历注意

必须加上key或者id

![1582034541206](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582034541206.png)

![1585239749935](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585239749935.png)





## 脚手架样式问题

加上scoped，组件之间互不影响

![1582092968369](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582092968369.png)

![1582094524353](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582094524353.png)



## 属性传值（父传子）

![1585243118875](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585243118875.png)

父

![1582095607486](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582095607486.png)

子

![1585243067766](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585243067766.png)

![1582095643638](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582095643638.png)







## 注册事件(子改父值)

子组件修改父组件属性值，必须通过事件的形式

子

![1582097259635](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582097259635.png)

![1582097239238](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582097239238.png)

父

![1582097427083](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582097427083.png)

![1582097338979](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582097338979.png)







## Vue生命周期

 ![Vue 实例生命周期](https://cn.vuejs.org/images/lifecycle.png) 

![1582103884567](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582103884567.png)





## slot插槽

样式可以写在父也可以写在子，通常写在父

传递的属性只能写在父

![1582183958367](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582183958367.png)

子用name接受插槽

![1582184028841](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582184028841.png)





## keep-alive缓存和component动态组件的使用

keep-alive可以用在切换页面，返回的时候，之前的数据还在

component动态组件可以动态选择展示页面

![1582190750502](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582190750502.png)		

slot模板

![1582190793566](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582190793566.png)

表1

![1582190821769](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582190821769.png)

表2

![1582190845795](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582190845795.png)



添加ui库

![1582265792418](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582265792418.png)

添加axios插件

![1582265812036](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582265812036.png)









# 前后端的交互模式

![1585290411788](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585290411788.png)

![1585292252573](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585292252573.png)

![1582529290163](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582529290163.png)





# Promise用法

![1585297125512](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585297125512.png)

![1585297251286](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585297251286.png)

![1585297562490](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585297562490.png)

![1585297505460](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585297505460.png)

![1585297516736](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585297516736.png)



## Promise处理Ajax请求

![1585297681882](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585297681882.png)

![1585298232053](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585298232053.png)

![1585298260118](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585298260118.png)

![1585298311422](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585298311422.png)

![1585298525611](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585298525611.png)

![1585298531119](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585298531119.png)









## then参数中的函数返回值

![1585320107692](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585320107692.png)

![1585320235137](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585320235137.png)

![1585320241992](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585320241992.png)

![1585320298769](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585320298769.png)

![1585320303072](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585320303072.png)

 



## Promise常用API1

![1585322407920](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585322407920.png)

![1585322540087](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585322540087.png)

![1585322548432](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585322548432.png)

![1585322668610](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585322668610.png)





## Promise常用API2

![1585323376641](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585323376641.png)

![1585324001168](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585324001168.png)

![1585323983858](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585323983858.png)

all()  (路由图有修改)        ![1585324014219](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585324014219.png)

race()       ![1585324020544](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585324020544.png)

![1585324066500](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585324066500.png)







# fetch基本用法

![1585324196037](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585324196037.png)

![1585324377612](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585324377612.png)

![1585324534560](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585324534560.png)

![1585324471425](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585324471425.png)

![1585324483179](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585324483179.png)





## fetch请求参数

![1585326176448](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326176448.png)

![1585326284426](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326284426.png)

![1585326510590](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326510590.png)

![1585326363386](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326363386.png)

![1585326376094](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326376094.png)

![1585326538651](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326538651.png)

![1585326529106](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326529106.png)

![1585326545915](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326545915.png)



![1585326574635](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326574635.png)

![1585326594464](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326594464.png)

![1585326625610](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326625610.png)

![1585326630509](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326630509.png)



![1585326731672](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326731672.png)

![1585326987291](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326987291.png)

![1585326939089](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326939089.png)

![1585326977053](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326977053.png)

![1585326995621](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585326995621.png)



![1585327928387](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585327928387.png)

![1585327963636](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585327963636.png)

![1585328223650](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585328223650.png)

![1585327977102](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585327977102.png)

![1585328001367](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585328001367.png)



![1585328239742](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585328239742.png)

![1585328305612](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585328305612.png)

![1585328353000](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585328353000.png)

![1585328362939](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585328362939.png)



## fetch响应结果

json（）返回的是对象

text（）返回的是字符串

![1585329566967](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585329566967.png)

![1585329758011](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585329758011.png)

![1585329691462](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585329691462.png)

![1585329771664](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585329771664.png)

使用text（）需要转格式才能用点.

![1585329872188](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585329872188.png)





# axios基本用法

![1585464754123](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585464754123.png)

![1585464830541](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585464830541.png)

![1585467229433](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467229433.png)

![1585467127480](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467127480.png)

![1585467131900](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467131900.png)









## axios常用API

![1585467342540](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467342540.png)

![1585467640048](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467640048.png)

![1585467491549](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467491549.png)

![1585467459362](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467459362.png)

![1585467497438](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467497438.png)



![1585467573768](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467573768.png)

![1585467595162](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467595162.png)

![1585467579581](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467579581.png)



这个比较方便![1585467798633](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467798633.png)

![1585467807797](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467807797.png)

![1585467812077](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467812077.png)



![1585467766510](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585467766510.png)

![1585468127771](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585468127771.png)

![1585468142615](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585468142615.png)

![1585468167944](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585468167944.png)



![1585468346791](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585468346791.png)

![1585469547940](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469547940.png)

![1585469580754](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469580754.png)

![1585469587597](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469587597.png)

json格式![1585469603874](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469603874.png)



![1585469622925](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469622925.png)

![1585469709308](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469709308.png)

![1585469580754](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469580754.png)

![1585469746587](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469746587.png)

![1585469733737](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469733737.png)



![1585469774443](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469774443.png)

![1585469815199](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469815199.png)

![1585469841930](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469841930.png)

![1585469849033](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585469849033.png)







## axios响应结果

![1585473029488](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585473029488.png)

![1585473183308](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585473183308.png)

![1585473158946](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585473158946.png)

![1585473190933](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585473190933.png)



![1585490761006](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585490761006.png)

![1585490944150](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585490944150.png)





## axios拦截器

通过拦截器控制所有请求

![1585498067367](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585498067367.png)

![1585498347614](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585498347614.png)

![1585498363899](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585498363899.png)

![1585498371720](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585498371720.png)



![1585498407148](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585498407148.png)

![1585498458666](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585498458666.png)

res和data的数据一样

![1585498535724](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585498535724.png)

提前做处理

![1585498604315](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585498604315.png)

![1585498633401](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585498633401.png)





# async/await的基本用法

![1585498877095](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585498877095.png)

![1585551005385](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585551005385.png)

![1585551096276](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585551096276.png)

![1585551071378](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585551071378.png)

![1585551109233](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585551109233.png)





## async/await处理多个异步请求

![1585551303119](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585551303119.png)

![1585553960347](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585553960347.png)

![1585553925606](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585553925606.png)

![1585553975582](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585553975582.png)





# 图书管理案例

![1585555292400](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585555292400.png)

![1585555284706](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585555284706.png)





# 路由的基本概念与原理

![1585558375647](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585558375647.png)

![1585560561707](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585560561707.png)

![1585560636175](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585560636175.png)

![1585561290634](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585561290634.png)





## 简易前端路由

![1585561550478](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585561550478.png)

![1585575633231](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585575633231.png)

![1585575647417](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585575647417.png)

![1585575662719](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585575662719.png)

![1585575674869](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585575674869.png)





## Vue Router

![1585575788866](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585575788866.png)

![1585575867265](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585575867265.png)

先引入vue再引入router

![1585576250331](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585576250331.png)

![1585576511235](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585576511235.png)



![1585576498776](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585576498776.png)

![1585577033258](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585577033258.png)

![1585576578218](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585576578218.png)



![1585577063751](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585577063751.png)

![1585577083436](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585577083436.png)



![1585577192562](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585577192562.png)

![1585577230641](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585577230641.png)



![1585578572295](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585578572295.png)

![1585578593096](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585578593096.png)





## 路由重定向

![1585579621645](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585579621645.png)

![1585579774153](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585579774153.png)



## vue-router嵌套路由

![1585579957992](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585579957992.png)

![1585579981001](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585579981001.png)

![1585580667715](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585580667715.png)

![1585580705137](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585580705137.png)

![1585580735057](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585580735057.png)







## vue-router动态路由匹配

![1585583476054](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585583476054.png)

![1585584506297](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585584506297.png)

![1585584532799](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585584532799.png)

![1585584670446](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585584670446.png)





## 路由组件传参

![1585633042288](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585633042288.png)

布尔类型，可以传id

![1585633596462](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585633596462.png)

![1585633611869](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585633611869.png)



![1585633820133](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585633820133.png)

数组类型，只能传数组的内容，不能动态加id

![1585633912506](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585633912506.png)

![1585633925587](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585633925587.png)



![1585634017709](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585634017709.png)

函数类型，可以传动态id和数组内容

![1585634094609](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585634094609.png)

![1585634102876](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585634102876.png)





## vue-router命名路由

![1585642565506](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585642565506.png)

![1585642791802](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585642791802.png)

![1585642894814](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585642894814.png)







## vue-router编程式导航

![1585664070319](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585664070319.png)

![1585664108357](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585664108357.png)

![1585667730679](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585667730679.png)

![1585667778618](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585667778618.png)

![1585667767019](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585667767019.png)

![1585667785781](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585667785781.png)

![1585667826718](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585667826718.png)







# vue-router后台管理路由案例

![1585669232237](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585669232237.png)

![1585669248055](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585669248055.png)







# Element-UI的基本使用

![1585725064210](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585725064210.png)





# 电商后台管理系统

![1585727133348](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585727133348.png)

![1585727048674](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585727048674.png)

![1585727192027](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585727192027.png)

![1585727288403](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585727288403.png)

![1585727683390](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585727683390.png)











# 码云

## ssh公钥生成

![1585729229516](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585729229516.png)

![1585729240762](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585729240762.png)

![1585729250659](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585729250659.png)

![1585729362730](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585729362730.png)

![1585729484442](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1585729484442.png)

 https://gitee.com/help/articles/4181#article-header0 





























































创建

![1582274257105](C:\Users\751609117\AppData\Roaming\Typora\typora-user-images\1582274257105.png)













