# More Colorful Logger
An easy to use, more colorful logger.

## Usage

### Installation
```console
$ npm i more-colorful-logger --save
```

### Using in code

```js
const log = require("more-colorful-logger");

log.error("This is an Error-Log");
log.warn("This is a Warn-Log");
log.info("This is an Info-Log");
```
or use this: 
```js
const { error, warn, info } = require("more-colorful-logger");

error("This is an Error-Log");
warn("This is a Warn-Log");
info("This is an Info-Log");
```