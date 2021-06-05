const cipher = require('../dist/index');

const secret = 'FB65023A-9D75-4A23-B6B1-AF47C63B43B8'
const token = cipher.md5('05CAE26A-79A1-481B-AD0F-A9CA267E7259')
cipher.aesSetCredentials(secret, token)
console.log('-------------------------------------------------------')
let data = 'Hello Word'
console.log('text:', data)
console.log('md5:', cipher.md5(data))
data = cipher.aesEncode(data)
console.log('encode:', data)
data = cipher.aesDecode(data)
console.log('decode:', data)
console.log('-------------------------------------------------------')