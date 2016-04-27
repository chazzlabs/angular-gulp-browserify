'use strict';

module.exports = function() {

    this.$onInit = () => {
        this.showHelloMessage = true;
    };

    this.toggleMessage = () => {
        this.showHelloMessage = !this.showHelloMessage;
    };

};
