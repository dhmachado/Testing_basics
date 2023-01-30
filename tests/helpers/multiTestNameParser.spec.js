const { parseName } = require('../../src/helpers/nameParser');

const testsConfig = [{
    describe: 'only the firstName with the value Thor ',
    arrangeObject: { firstName: 'Thor' },
    expectedFullName: 'Thor',
}, {
    describe: 'only first and last name ',
    arrangeObject: { firstName: 'Steve', lastName: 'Rogers' },
    expectedFullName: 'Rogers, Steve',
}, {
    describe: 'prefix, first and last name ',
    arrangeObject: {
        firstName: 'Bruce',
        lastName: 'Banner',
        prefix: 'Dr.'
    },
    expectedFullName: 'Dr. Banner, Bruce',
}, {
    describe: 'all params ',
    arrangeObject: {
        firstName: 'Stephen',
        lastName: 'Strange',
        middleName: 'Vincent',
        prefix: 'Dr.'
    },
    expectedFullName: 'Dr. Strange, Stephen Vincent',
}];

testsConfig.forEach(t => {
    describe('Test nameParser when we pass ', () => {    
        describe(`${t.describe}`, () => {
            it('should return the expected full name', () => {
                // ACT
                const result = parseName(t.arrangeObject);
        
                // ASSERT
                expect(result).toEqual(t.expectedFullName);
            });
        });
    });
});

