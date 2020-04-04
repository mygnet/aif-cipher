# aif-cipher

## Implementation of aes-256-cbc and md5

A set of basic AES implementation functions aes-256-cbc for encryption and decryption of data packets that can be used to send information to servers compatible with openssl libraries.

### Installation

Download the library with npm / Yarn, from your local files.

Via NPM:

    $ npm install aif-cipher
    
Via YARN:

    $ yarn add aif-cipher


Or you can export to the browser, using one of these tools: [Browserify] (http://browserify.org/), [Webmake] (https://github.com/medikoo/modules-webmake) o [Webpack] (http://webpack.github.io/)

### Use
The library can be included in your code through imports from CommonJS or ES.

ES2015 (ES6):
```javascript
import * as cipher from "aif-cipher";
```
CommonJS:
```javascript
var cipher = require("aif-cipher");
```
With ES imports it is also possible to use individual components. For example:
```javascript
import { Aes, md5 } from "aif-cipher";
```

#### Configuración

The initialization of the credentials is optional, since if it is not defined from here, the encryption methods can be passed directly to the arguments.

```javascript
var cipher = require("aif-cipher");

var secret = '-secret-';
var token = cipher.md5('-token-');

cipher.Aes.setCredentials(secret, token);
```
if ** Token ** is set, it must be 32 characters.

#### Methods

**md5**(*string*)

**Aes.setCredentials**([*secret*], [*token*])

**Aes.decode**(*string*, [*secret*], [*token*])

**Aes.encode**(*string*, [*secret*], [*token*])

Example using the credential definition:

```javascript
var cipher = require("aif-cipher");

var hash = cipher.md5('-valor-');
console.log('md5:', hash);

var data = cipher.Aes.encode('-valor-','-secret-',cipher.md5('-token-'));
console.log('encode:', data)

data = cipher.Aes.decode(data,'-secret-',cipher.md5('-token-'));
console.log('decode:', data)
```
Example using the credential definition:

```javascript
var cipher = require("aif-cipher");

var secret = '-secret-';
var token = cipher.md5('-token-');
cipher.Aes.setCredentials(secret, token);

var data = cipher.Aes.encode('-valor-');
console.log('encode:', data)

data = cipher.Aes.decode(data);
console.log('decode:', data)
```

## Tests

    $ npm test

O well

    $ yarn test

## build

    $ npm run build

O well

    $ yarn build



## Security contact information

To report security vulnerabilities, use the following link: https://github.com/mygnet/aif-cipher/issues

---
[npm-image]: https://img.shields.io/npm/v/aif-cipher.svg
[npm-url]: https://www.npmjs.com/package/aif-cipher