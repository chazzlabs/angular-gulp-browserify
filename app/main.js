'use strict';

require('angular');

require('./components/sayHello/sayHello');
require('./components/sayGoodbye/sayGoodbye');

const mainCtrl = require('./mainCtrl');
const mainComp = require('./mainComp');

angular.module('app', ['sayHello', 'sayGoodbye', 'templates'])
    .controller('mainCtrl', mainCtrl)
    .component('main', mainComp);
