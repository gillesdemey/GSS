var _           = require('lodash-node');
var utils       = require('./utils');

/**
 * This function will initiate the parsing of the document
 */
exports.parse = function(comment, options, callback) {

  var comments = utils.getComments(comment); // returns all comment lines

  var description = {
    sections: exports.parseSections(comments),
    description: exports.parseDescription(comments),
    states: exports.parseStates(comments),
    markup: _.escape(exports.parseMarkup(comments))
  };

  callback(description);
};

exports.parseSections = function(comment) {
  return utils.parseKeyword(comment, 'section', true);
};

exports.parseDescription = function(comment) {
  return utils.parseKeyword(comment, 'description');
};

exports.parseStates = function(comment) {

  var states = utils.parseKeyword(comment, 'states', true);

  states = _.map(states, function(line) {

    var split     = line.split(/-|—|\||,/),
        name      = split[0].trim(),
        escaped   = name.replace('.', '');


    // TODO: extend escape function for state to escape pseudo-classes
    var state = {
      'name'    : name,
      'escaped' : escaped
    };

    if (split[1])
      state.description = split[1].trim();

    return state;

  });

  return states;
};

exports.parseMarkup = function(comment) {
  return utils.parseKeyword(comment, 'markup');
};
