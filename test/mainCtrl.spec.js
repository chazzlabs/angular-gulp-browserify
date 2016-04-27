describe('mainCtrl', () => {

    let controller;

    beforeEach(() => {
        angular.mock.module('app');

        angular.mock.inject(($controller) => {
            controller = $controller('mainCtrl');
        });
    });

    describe('$onInit', () => {

        it('should initialize state', () => {
            expect(controller.showHelloMessage).not.toBeDefined();

            controller.$onInit();

            expect(controller.showHelloMessage).toBeDefined();
            expect(controller.showHelloMessage).toBeTruthy();
        });

    });

    describe('#toggleMessage', () => {

        beforeEach(() => {
            controller.$onInit();
        });

        it('should toggle showHelloMessage', () => {
            expect(controller.showHelloMessage).toBeTruthy();

            controller.toggleMessage();

            expect(controller.showHelloMessage).toBeFalsy();
        });

    });

});
