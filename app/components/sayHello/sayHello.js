'use strict';

const sayHelloCtrl = require('./sayHelloCtrl');
const sayHelloComp = require('./sayHelloComp');

angular.module('sayHello', ['templates'])
    .controller('sayHelloCtrl', sayHelloCtrl)
    .component('sayHello', sayHelloComp);
