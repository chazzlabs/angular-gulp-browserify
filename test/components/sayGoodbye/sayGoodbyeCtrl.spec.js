describe('sayGoodbyeCtrl', () => {

    let controller;

    beforeEach(() => {
        angular.mock.module('sayGoodbye');

        angular.mock.inject(($controller) => {
            controller = $controller('sayGoodbyeCtrl');
        });
    });

    describe('$onInit', () => {

        it('should initialize state', () => {
            expect(controller.message).not.toBeDefined();

            controller.$onInit();

            expect(controller.message).toBeDefined();
            expect(controller.message).toBe('Goodbye!');
        });

    });

});
