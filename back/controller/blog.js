const { exec } = require('../db/mysql')
const xss = require('xss')

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if(author){
    sql += `and author like '%${author}%' `
  }
  if(keyword){
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  // 返回promise  
  return exec(sql)
}

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`
  // 将数据改成对象的形式 只要第一条数据
  return exec(sql).then(rows => {
    return rows[0]
  })
}

const newBlog = (blogData = {}) => {
  // blogData是一个博客对象，包含title content author属性
  const title = xss(blogData.title)
  const content = xss(blogData.content)
  const author = blogData.author
  const createTime = Date.now()

  const sql = `
    insert into blogs (title, content, createtime, author) values ('${title}', '${content}', '${createTime}', '${author}');
  `
  return exec(sql).then(inserData => {
    console.log('insertData is', inserData)
    return {
      id: inserData.insertId
    }
  })
}

const updateBlog = (id, blogData = {}) => {
  // id 就是要更新博客的id
  // blogData是一个博客对象，包含title content属性
  const title = xss(blogData.title)
  const content = xss(blogData.content)
  const sql = `
    update blogs set title='${title}', content='${content}' where id='${id}'
  `
  return exec(sql).then(updateData => {
    console.log('updateDate is', updateData)
    if(updateData.affectedRows > 0){
      return true
    }
    return false
  })
}

const delBlog = (id, author) => {
  // id 就是要删除博客的id
  const sql=`delete from blogs where id='${id}' and author='${author}'`
  return exec(sql).then(delData => {
    console.log('deleteData is', delData)
    if(delData.affectedRows > 0){
      return true
    }
    return false
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}