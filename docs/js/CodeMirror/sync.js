// set source and target and then, run
// node sync.js
const fs = require("fs");
const fse = require('fs-extra');
const path = require('path');

const filterFunc = (src, dest) => {
  var stat = fs.statSync(src);
  if (stat.isFile()) {
    if (/\.js$/i.test(src)){
      var basename = path.basename(src, '.js');
      var dirname = path.dirname(src)
      if (dirname.endsWith(basename)) {
        console.log('src:::', src)
        return true;
      }
      return false;
    }
    return false;
  }
  return true
}

fse.copy('/home/suziwen/jobdisk/git/CodeMirror/mode', './mode/', { filter: filterFunc }, err => {
  if (err) return console.error(err)
  console.log('success!')
})
