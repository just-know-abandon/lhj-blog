vue

爱马仕单反

啊个忙考试对面两个面试

的梦就被人

阿基诺该不该

就当看不到可根据单反

‘反俄容共二杠你

# Vue 部分：

`npm install -g @vue/cli`

`vue create lhj-blog`

# Node 部分(express)：

`npm install -g express-generator`

`express back`


# axios:

`npm install axios --save`

```
// 在main.js中引用
import axios from 'axios'
// 把axios绑定到vue的原型上
// 调用方式 this.$axios
Vue.prototype.$axios = axios
```

```
// note.vue
this.$axios.get('http://localhost/users/user')
      .then(function (res) {
        console.log(res)
      })
      .catch(function (error) {
        console.log('接口调用失败' + error)
      })
```

# 跨域问题
Access to XMLHttpRequest at `'http://localhost/users/user'` from origin `'http://localhost:8080'` has been blocked by CORS policy: No `'Access-Control-Allow-Origin'` header is present on the requested resource.

解决方法：

1. 浏览器解决：
打开谷歌浏览器属性->目标，后面追加上 `--args --disable-web-security --user-data-dir`
2. 后端解决：在app.js，加入请求头
```
// app.js
app.all('*', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
```

# 前后端合并
打包前端：
`npm run build`

生成dist文件夹，把里面的内容全部复制到node的public目录下

# 解决合并前后端路由冲突
https://router.vuejs.org/zh/guide/essentials/history-mode.html

基于 Node.js 的 Express 请考虑使用 connect-history-api-fallback 中间件。

https://github.com/bripkens/connect-history-api-fallback

`npm install --save connect-history-api-fallback`

```
// app.js
// 解决跨域后路由刷新history
var history = require('connect-history-api-fallback');

// 解决跨域后路由刷新history
app.use(history({
  // 相当于过滤器，访问note的时候才会调用node路由，其余访问vue的路由
  rewrites: [
    {
      from: /^\/note\/.*$/, // localhost/note
      to: function(context) {
        // return '/bower_components' + context.parsedUrl.pathname;
        // localhost/bower_components/note  不需要/bower_components就删除掉
        return context.parsedUrl.pathname;
      }
    }
  ]
}))
```



# 读取笔记列表
类似于nodemon的插件：supervisor

`npm install -g supervisor`

运行：`supervisor ./bin/www`

`npm install -g nodemon`

运行：`nodemon ./bin/www`


```
// note.js
router.get('/getNoteList', function(req, res, next) {
  let files = findNoteList('./note')
  res.json(files)
});
function findNoteList(path){
  let result = [];
  // readdirSync 读取文件名
  let files = fs.readdirSync(path)
  // 只存.md文件
  files.forEach(val => {
    // 以xx为结尾
    if(val.endsWith('.md')){
      // result.push(val)
      // 去掉后缀.md
      result.push(val.split('.md')[0])
    }
  })
  console.log(result)
  return result;
}

```


# 读取笔记内容
点击列表进入

需要用到
`npm install marked --save`
转换buffer数据
```
// 1.设置路由   index.js
{
    // 传参id
    path: '/article/:id',
    name: 'Article',
    components: {
      header: Header,
      main: Article
    }
}

// 2.router-link跳转，并传参id  Note.vue
<template>
  <div>
    <div>note</div>
    <ul>
      <li v-for="(item, index) in noteList" :key="index">
        <router-link :to="'/article/' + item">
          {{item}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

// 3.详情页面调用接口   Article.vue
created () {
    console.log(this.$route.params.id)
    this.$axios.get('http://localhost/note/getNoteByName/' + this.$route.params.id)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err + '连接失败')
      })
  }

// 4.接口   note.js
router.get('/getNoteByName/:name', function(req, res, next) {
  console.log(req.params.name)
  var fileName = req.params.name
  // res.send(fileName)
  // 获取到的是buffer类型，在调用接口的时候需要安装marked模块解析数据
  fs.readFile('./note/' + fileName + '.md', function(err, data){
    if(err){
      res.send('文件不存在')
    }else{
      var htmlStr = data
      res.json(data)
    }
  })
});

// 5.获取到的是buffer类型，在调用接口的时候需要安装marked模块解析数据
// npm install marked --save
// 导入模块
var marked = require('marked')
// 获取buffer数据后
var htmlStr = marked(data.toString())
res.json(htmlStr)

// 6.回到Article.vue，获取数据
this.$axios.get('http://localhost/note/getNoteByName/' + this.$route.params.id)
      .then(res => {
        console.log(res.data)
        this.article = res.data
      })
      .catch(err => {
        console.log(err + '连接失败')
      })

// 定义数据
data () {
    return {
      article: ''
    }
  },
  
// 输出
<template>
  <div>
    <div v-html="article"></div>
  </div>
</template>
```


# 代码高亮  Highlight.js
`npm install highlight.js --save`
```
// Article.vue
// 高亮代码模块
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

// 在调用接口获取article后
// 高亮显示代码
// 在vue中操作 DOM 需要用到 $nextTick 方法
this.$nextTick(() => {
  const blocks = document.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
```