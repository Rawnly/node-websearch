const program = require('commander'),
      chalk = require('chalk'),
      clear = require('clear'),
      fs = require('fs'),
      open = require('open'),
      pkg = require('./package.json'),
      colors = require('colors');

program.version(pkg.version)
.command('encode <query>', 'Encode Url');
program.parse(process.argv);

program.action(function (query) {
  var url = encodeURIComponent(query);
  console.log(url);
});

program.parse(process.argv);
