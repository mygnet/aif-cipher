const cipher = require('../dist/index');
console.log('-------------------------------------------------------')
let data = 'Hello Word'
console.log('text:', data)
console.log('md5:', cipher.md5(data))
data = cipher.Aes.encode(data, 'FB65023A-9D75-4A23-B6B1-AF47C63B43B8')
console.log('encode:', data)
data = cipher.Aes.decode(data, 'FB65023A-9D75-4A23-B6B1-AF47C63B43B8')
console.log('decode:', data)
console.log('-------------------------------------------------------')