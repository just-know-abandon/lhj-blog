var express = require('express');
var router = express.Router();
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } =  require('../model/resModel')
const loginCheck = require('../middleware/loginCheck')

router.get('/getBlog', function(req, res, next) {
  res.send('this is getBlog')
});


// 获取博客列表
router.get('/list', (req, res, next) => {
  const author = req.query.author || ''
  const keyword = req.query.keyword || ''
  // const listData = getList(author, keyword)
  // return new SuccessModel(listData)
  // 执行 getList 就是返回promise
  const result = getList(author, keyword) // 返回promise
  return result.then(listData => {
    res.json(
      new SuccessModel(listData)
    )
  })
})

// 获取博客详情
router.get('/detail', (req, res, next) => {
  const result = getDetail(req.query.id)
    return result.then(data => {
      res.json(
        new SuccessModel(data)
      )
    })
})

// 新建博客
router.post('/new', loginCheck, (req, res, next) => {
  // loginCheck验证登陆
  req.body.author = req.session.username
  // req.body.author = 'lhj'
  const result = newBlog(req.body)
  return result.then(data => {
    res.json(
      new SuccessModel(data)
    )
  })
})

// 更新博客
router.post('/update', loginCheck, (req, res, next) => {
  const result = updateBlog(req.query.id, req.body)
    return result.then(val => {
      if(val){
        res.json(
          new SuccessModel()
        )
      }else {
        res.json(
          new ErrorModel('更新博客失败')
        )
      }
    })
})

// 删除博客
router.post('/del', loginCheck, (req, res, next) => {
  const author = req.session.username
  // const author = 'qqq'
    const result = delBlog(req.query.id, author)
    return result.then(val => {
      if(val){
        res.json(
          new SuccessModel()
        )
      }else {
        res.json(
          new ErrorModel('删除博客失败')
        )
      }
    })
})


module.exports = router;