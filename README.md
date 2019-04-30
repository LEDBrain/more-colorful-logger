# More Colorful Logger

An easy to use, more colorful logger.

## Usage

### Installation

```console
npm i more-colorful-logger --save
```

### Using in code

usage

with Timestamp | without Timestamp
-------------- | -----------------
true or by default (no input) | false
1 | 0

Example:

```js
const log = require("more-colorful-logger");

log.error("This is an Error-Log"); // with timestamp
log.warn("This is a Warn-Log", false); // without timestamp
log.info("This is an Info-Log", 0); // without timestamp
log.completed("This is a Completed-Log", 1) // with Timestamp
```

or use this:

```js
const { error, warn, info } = require("more-colorful-logger");

error("This is an Error-Log");
warn("This is a Warn-Log");
info("This is an Info-Log");
```
