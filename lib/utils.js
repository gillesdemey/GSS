var _ = require('lodash-node');

/**
 * Returns a comment block as a multiline string
 * @link http://ostermiller.org/findcomment.html
 */
exports.getComments = function(fileContents) {
  return fileContents.match(/((\/\*(.|[\r\n])*?\*\/))|(\/\/.*)/g).join('\n');
};

// sanitize an object using the cleanString function
exports.sanitize = function(obj) {

  var clean = [];

  if (!Array.isArray(obj))
    return exports.cleanString(obj);

  obj.forEach(function(string) {
    string = exports.cleanString(string);
    clean.push(string);
  });

  return clean;
};

exports.cleanString = function(string) {
  return string
    .replace(/((\/\/)(\s?))|(\*\s+)|((\/?)\*(\/?)\s?)/gm, '') // remove comments
    .replace(/(@[^\s]+)/g, '') // and @keywords
    .trim(); // and trim spaces
};

/**
 * Splits the content in an array of lines, also sanitizes input
 */
exports.lineSplit = function(contents) {
  var clean = exports.sanitize(contents)[0];
  return clean.split(/\r?\n/);
};

// check os user has supplied multiple lines for a specific keyword
exports.isMultiline = function(contents) {
  return new RegExp('(\n|\r\n)', 'gm').test(contents);
};


exports.parseKeyword = function(comment, keyword, multiline) {

  if (!exports.hasKeyword(comment, keyword)) {
    console.warn('comment block does not contain', keyword);
    return;
  }

  var lines = comment.match(new RegExp("@" + keyword + "(\\s+)([^@]*)", "ig"));

  if (multiline)
    lines = exports.lineSplit(lines);
  else
    lines = exports.sanitize(lines);

  return lines;
};

exports.hasKeyword = function(comment, keyword) {
  return new RegExp("(@" + keyword + ")", "g").test(comment);
};