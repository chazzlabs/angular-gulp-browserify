'use strict';

module.exports = function() {

    this.$onInit = () => {
        this.showHelloMessage = false;
    };

    this.sayHello = () => {
        this.showHelloMessage = !this.showHelloMessage;
    };

};
