# angular-gulp-browserify
An example AngularJS app built with gulp and browserify.

## Building
Install the gulp-cli with `npm install -g gulp-cli`.  Run `npm install` to install all required dependencies.

`gulp connect` will run lint and browserify tasks and serve the project; app source files are watched while
connected, and the browserify task is run on change.

`gulp test` will execute unit tests using Karma.

## Notes
This project is an exercise in building an AngularJS application using gulp and browserify, complete with linting
and unit tests.

Using browserify-ng-html2js presented some problems when configuring Karma for running unit tests because browserify
requires all HTML template files to be `require`d.  This triggered some errors that I couldn't find solutions for, so
I decided to share this when I'd figured it out for myself (which admittedly should've been pretty apparent from the start).

If you have questions or suggestions for improvement, feel free to post an issue.
