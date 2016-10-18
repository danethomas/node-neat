var path = require('path');
var bourbon = require('node-bourbon');
var neat = require('bourbon-neat')

function includePaths() {
  return bourbon.with(neat.includePaths);
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    return [].concat.apply(includePaths(), arguments);
  }

};
