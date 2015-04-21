/*
 * grunt-init-jquery
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a new sails.js project with requirejs, foundation, and SASS.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Follow the prompts below to create a new sails.js project.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'Project installed! Please run _bower install_ and _npm install_' +
  'to set up project dependencies. Bower dependencies will be installed to' +
  'assets/js/vendor by default. For more information on the sails framework,' +
  'visit _sailsjs.org_.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function (grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description', 'A sails.js application.'),
    init.prompt('author_name'),
    init.prompt('author_email')
  ], function (err, props) {
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
