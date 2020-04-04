# aif-cipher

## Implementación de aes-256-cbc y md5

Un conjunto de funciones básicas de implementación de AES aes-256-cbc para cifrado y descifrado de paquetes de datos que puede usarse para el envío de información a servidores compatibles con las bibliotecas openssl.

### Instalación

Descargue la biblioteca con npm / Yarn, desde sus archivos locales.

Vía NPM:

    $ npm install aif-cipher
    
Vía YARN:

    $ yarn add aif-cipher


O bien puede exportar al navegador, usando alguna de estas herramientas: [Browserify] (http://browserify.org/), [Webmake] (https://github.com/medikoo/modules-webmake) o [Webpack] (http://webpack.github.io/)

### Uso
La biblioteca se puede incluir en su código a través de importaciones de CommonJS o ES.

ES2015 (ES6):
```javascript
import * as cipher from "aif-cipher";
```
CommonJS:
```javascript
var cipher = require("aif-cipher");
```
Con las importaciones de ES también es posible usar componentes individuales. Por ejemplo:
```javascript
import { Aes, md5 } from "aif-cipher";
```

#### Configuración

Es opcional la inicialización de las credenciales, ya que si no se define desde aqui, se podran pasar como argumentos a los método de cifrado de forma directa.

```javascript
var cipher = require("aif-cipher");

var secret = '-palabra-secreta-';
var token = cipher.md5('-token-');

cipher.Aes.setCredentials(secret, token);
```
si se establece el **Token**, este debe ser de 32 caracteres.

#### Métodos

**md5**(*string*)

**Aes.setCredentials**([*secret*], [*token*])

**Aes.decode**(*string*, [*secret*], [*token*])

**Aes.encode**(*string*, [*secret*], [*token*])

Ejemplo usando la definición de credenciales:

```javascript
var cipher = require("aif-cipher");

var hash = cipher.md5('-valor-');
console.log('md5:', hash);

var data = cipher.Aes.encode('-valor-','-secret-',cipher.md5('-token-'));
console.log('encode:', data)

data = cipher.Aes.decode(data,'-secret-',cipher.md5('-token-'));
console.log('decode:', data)
```
Ejemplo usuando la definición de credenciales:

```javascript
var cipher = require("aif-cipher");

var secret = '-palabra-secreta-';
var token = cipher.md5('-token-');
cipher.Aes.setCredentials(secret, token);

var data = cipher.Aes.encode('-valor-');
console.log('encode:', data)

data = cipher.Aes.decode(data);
console.log('decode:', data)
```

## Tests

    $ npm test

o bien 

    $ yarn test

## build

    $ npm run build

o bien

    $ yarn build



## Información de contacto de seguridad

Para informar vulnerabilidades de seguridad, utilice el siguiente link: https://github.com/mygnet/aif-cipher/issues

---
[npm-image]: https://img.shields.io/npm/v/aif-cipher.svg
[npm-url]: https://www.npmjs.com/package/aif-cipher