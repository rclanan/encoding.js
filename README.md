# encoding.js

This library is meant to be used with [Require.js](http://requirejs.org) for browser based encoding, should be simple to use.

## Getting started

The project depends on [Bower](https://github.com/bower/bower) and [Gulp.js](http://gulpjs.com). Assuming
you already have **Node.js** installed on your system, run the following command:

```
npm install -g gulp bower
```

Next, clone the repository and install project dependencies:
```bash
# Fetch only the latest commits.
git clone --depth=1 git@github.com:fusionalliance/encoding.js.git

cd encoding.js

bower install
npm install
```

### Usage

```javascript
var encoding = require('encoding');

// HTML
var encodedText = encoding.html.encode('<script> alert("this shouldn\'t run because this is encoded.); </script> "');
var decodedText = encoding.html.decode(encodedText);


// Full URI's
var encodedFullUri = encoding.uri.encode('https://www.reddit.com/r/programming');
var decodedFullUri = encoding.uri.decode(encodedFullUri);

// URI components:
var encodedUriComponent = encoding.uri.encodeComponent('this &component %will will! .be encoded!@#$%^&*');
var decodedUriComponent = encoding.uri.decodeComponent(encodedUriComponent);
```
### Tests

Simply run:

```
gulp karma
```

### Contributing

If you have any suggestions, or found a bug please open a GitHub issue and we will
get to it as soon as we can.

### License

constants.js is distributed under the terms of the MIT license.

See LICENSE for details.
