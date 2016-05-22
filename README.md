<!--@'# ' + package.name-->
# @zkochan/tap-diff
<!--/@-->

<!--@shields.flatSquare('npm')-->
[![NPM version](https://img.shields.io/npm/v/@zkochan/tap-diff.svg?style=flat-square)](https://www.npmjs.com/package/@zkochan/tap-diff)
<!--/@-->

The most human-friendly [TAP reporter](https://github.com/substack/tape#pretty-reporters).

![Screenshot](screenshot1.png)

![Screenshot](screenshot2.png)

<!--@installation()-->
## Installation

This module is installed via npm:

```sh
npm install @zkochan/tap-diff --global
```
<!--/@-->

## How to use

You can use tap-notify in the same way as other [TAP reporters](https://github.com/substack/tape#pretty-reporters).

```sh
tape ./*.test.js | tap-diff
```

Or use with `createStream()`:

```javascript
'use strict'

const test = require('tape')
const tapDiff = require('tap-diff')

test.createStream()
  .pipe(tapDiff())
  .pipe(process.stdout)

test('timing test', (t) => {
  t.plan(2)
  t.equal(typeof Date.now, 'function')
  var start = Date.now()

  setTimeout(() => {
    t.equal(Date.now() - start, 100)
  }, 100)
})
```

<!--@license()-->
## License

[MIT](./LICENSE) © [axross](http://axross.me/)
<!--/@-->

* * *

<!--@dependencies({ shield: 'flat-square' })-->
## <a name="dependencies">Dependencies</a> [![Dependency status for master](https://img.shields.io/david/zkochan/tap-diff/master.svg?style=flat-square)](https://david-dm.org/zkochan/tap-diff/master)

- [babel-runtime](https://github.com/babel/babel/blob/master/packages): babel selfContained runtime
- [chalk](https://github.com/chalk/chalk): Terminal string styling done right. Much color.
- [core-js](https://github.com/zloirock/core-js): Standard library
- [diff](https://github.com/kpdecker/jsdiff): A javascript text diff implementation.
- [duplexer](https://github.com/Raynos/duplexer): Creates a duplex stream
- [figures](https://github.com/sindresorhus/figures): Unicode symbols with Windows CMD fallbacks
- [jsondiffpatch](https://github.com/benjamine/jsondiffpatch): Diff & Patch for Javascript objects
- [pretty-ms](https://github.com/sindresorhus/pretty-ms): Convert milliseconds to a human readable string: 1337000000 → 15d 11h 23m 20s
- [tap-parser](https://github.com/substack/tap-parser): parse the test anything protocol
- [through2](https://github.com/rvagg/through2): A tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise

<!--/@-->

<!--@devDependencies({ shield: 'flat-square' })-->
## <a name="dev-dependencies">Dev Dependencies</a> [![devDependency status for master](https://img.shields.io/david/dev/zkochan/tap-diff/master.svg?style=flat-square)](https://david-dm.org/zkochan/tap-diff/master#info=devDependencies)

- [babel-cli](https://github.com/babel/babel/blob/master/packages): Babel command line.
- [babel-plugin-add-module-exports](https://github.com/59naga/babel-plugin-add-module-exports): Fix babel/babel#2212
- [babel-plugin-transform-runtime](https://github.com/babel/babel/blob/master/packages): Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals
- [babel-preset-es2015](https://github.com/babel/babel/blob/master/packages): Babel preset for all es2015 plugins.
- [babel-register](https://github.com/babel/babel/blob/master/packages): babel require hook
- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [mos](https://github.com/zkochan/mos): A pluggable module that injects content into your markdown files via hidden JavaScript snippets

<!--/@-->
