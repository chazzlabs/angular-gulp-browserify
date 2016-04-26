describe('sayHelloCtrl', () => {

    let controller;

    beforeEach(() => {
        angular.mock.module('sayHello');

        angular.mock.inject(($controller) => {
            controller = $controller('sayHelloCtrl');
        });
    });

    describe('$onInit', () => {

        it('should initialize state', () => {
            expect(controller.message).not.toBeDefined();

            controller.$onInit();

            expect(controller.message).toBeDefined();
            expect(controller.message).toBe('Hello!');
        });

    });

});
