'use strict';

const sayGoodbyeCtrl = require('./sayGoodbyeCtrl');
const sayGoodbyeComp = require('./sayGoodbyeComp');

angular.module('sayGoodbye', ['templates'])
    .controller('sayGoodbyeCtrl', sayGoodbyeCtrl)
    .component('sayGoodbye', sayGoodbyeComp);
