'use strict'
const expect = require('chai').expect
const fs = require('fs')
const path = require('path')
const okTestPath = path.resolve(__dirname, 'fixtures', 'ok.txt')
const notOkTestPath = path.resolve(__dirname, 'fixtures', 'not-ok.txt')
import initTapDiff from '../src'
const chalk = require('chalk')

describe('e2e test', () => {
  it('ok test output', done => {
    var testOutStream = fs.createReadStream(okTestPath)
    let actual = ''

    const tapDiff = initTapDiff()
    testOutStream.pipe(tapDiff);
    tapDiff.on('data', data => {
      actual += data.toString();
    })

    testOutStream.on('end', function() {
      expect(normalize(actual, 1)).to.match(/tests passed!/)
      done()
    })
  });

  it('not ok test output', done => {
    var testOutStream = fs.createReadStream(notOkTestPath)
    let actual = ''

    const tapDiff = initTapDiff()
    testOutStream.pipe(tapDiff);
    tapDiff.on('data', data => {
      actual += data.toString();
    })

    testOutStream.on('end', function() {
      const normalizedActual = normalize(actual, 1)
      expect(normalizedActual).to.match(/tests failed/)
      expect(normalizedActual).to.match(/foobarqar/)
      done()
    })
  });
})

// remove empty lines and 'duration ...' line
// durationLinePos is the position of 'duration ...' line counting from the last line.
function normalize(data, durationLinePos) {
  var noEmptyLine = data.split('\n').filter(function(line) { return line.trim().length !== 0; })
  noEmptyLine.splice(noEmptyLine.length - durationLinePos - 1, 1);
  return noEmptyLine.join('\n');
}
