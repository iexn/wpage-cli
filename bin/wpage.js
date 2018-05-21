#!/usr/bin/env node

var created = require('../lib/created.js')
var program = require('commander');

program.version('v' + require('../package.json').version)
  .description('create wpage project')
  .arguments('<project_name>')
  .description('create wpage project')
  .action(function(project_name) {
    created.go(project_name)
  })
program.parse(process.argv)

if (program.args.length === 0) {
  program.help()
}