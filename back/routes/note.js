var express = require('express');
var router = express.Router();
var fs = require('fs')

router.get('/getNote', function(req, res, next) {
  res.send('this is getNote')
});

router.get('/getNoteList', function(req, res, next){
  let files = findNoteList('./note' )
  res.json(files)
})

function findNoteList (path) {
  let result = []
  // 读取文件名
  let files = fs.readdirSync(path)
  files.forEach(val => {
    if(val.endsWith('.md')){
      result.push(val.split('.md')[0])
    }
  })
  console.log(result)
  return result
}

module.exports = router;
