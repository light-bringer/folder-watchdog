'use strict';

const path = require('path');
const chokidar = require('chokidar');
const directory_to_watch = path.join('C:/\Users/\yodeb/\Documents/\GitHub', 'folder-watchdog');
console.log(directory_to_watch);

var watcher = chokidar.watch(directory_to_watch, {
    ignored: /^\./,
    awaitWriteFinish: true,
    persistent: true
});

watcher
  .on('add', (path) => {
      console.log('File', path, 'has been added');
    })
  .on('change', (path) => {
      console.log('File', path, 'has been changed');
    })
  .on('unlink', (path) => {
      console.log('File', path, 'has been removed');
    })
  .on('error', (error) => {
      console.error('Error happened', error);
    });