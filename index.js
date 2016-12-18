#!/usr/bin/env node

const program = require('commander'),
      chalk = require('chalk'),
      clear = require('clear'),
      fs = require('fs'),
      open = require('open'),
      pkg = require('./package.json'),
      ora = require('ora'),
      colors = require('colors');

program.version(pkg.version)
.option('-g, --google [query]', 'Search on google')
.option('-w, --wikipedia [query]', 'Search on wikipedia');
program.parse(process.argv);

if ( program.google ) {
  const spinner = ora('Searching on google').start();

  spinner.color = 'yellow';
  spinner.text = 'Searching on Google...';


  var gUrl = 'https://www.google.it/#q=';
  open( gUrl + encodeURIComponent(program.google), function (err) {
    if ( err ) {
      spinner.fail()
      console.log( chalk.red(err) );
    } else {
      clear();
      spinner.succeed()
    }
  });
} else if ( program.wikipedia && program.wikipedia != '' ) {

  const spinner = ora('Searching').start();
  spinner.text = 'Searching on Wikipedia...'
  spinner.color = 'white'

  var wUrl = 'https://en.wikipedia.org/wiki/index.php?search=';
  open( wUrl + encodeURIComponent(program.wikipedia), function (err) {
    if ( err ) {
      spinner.fail();
      console.log( chalk.red(err) );
    } else {
      clear();
      spinner.succeed();
    }
  });
} else {
  console.log('Usage: '.yellow + ' searching ' + '[--flag]' + ' "' + 'string to search'.bold + '"');
};
