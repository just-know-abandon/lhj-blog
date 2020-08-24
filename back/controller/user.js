const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = (username, password) => {
  username = escape(username)

  // 生成加密密码
  password = genPassword(password)
  password = escape(password)

  const sql =`
    select username, realname from users where username=${username} and password=${password}
  `
  console.log('sql is', sql)
  return exec(sql).then(rows => {
    return rows[0] || {}  // 不能undefined 所以给一个{}空对象
  })
}

module.exports = {
  login
}