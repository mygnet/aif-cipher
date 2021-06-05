/* eslint-disable handle-callback-err */
const fs = require('fs')
const dist = './dist'
fs.readdir(dist, (err, files) => {
  files.forEach(file => {
    console.log(file)
    let data = fs.readFileSync(dist + '/' + file)
    // eslint-disable-next-line quotes
    data = data.toString().replace(/\/\*\*/mg, "\n/**")
    // data = data.toString().replace(/\\*\//mg, "\n/**")
    fs.writeFileSync(dist + '/' + file, data, 'utf8')
  })
})
