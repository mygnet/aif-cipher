const cipher = require('../dist/index')
console.log('-------------------------------------------------------')
let data = 'Hello Word Test 1'
console.log('text:', data)
console.log('base 64:',cipher.base64Encode(data))
console.log('decode base64:', cipher.base64Decode('SGVsbG8gV29yZCBUZXN0IDE='));
console.log('md5:', cipher.md5(data))
data = cipher.aesEncode(data, 'FB65023A-9D75-4A23-B6B1-AF47C63B43B8')
console.log('encode:', data)
data = cipher.aesDecode(data, 'FB65023A-9D75-4A23-B6B1-AF47C63B43B8')
console.log('decode:', data)
console.log('-------------------------------------------------------')
