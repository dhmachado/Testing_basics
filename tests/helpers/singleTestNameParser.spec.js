const { parseName } = require('../../src/helpers/nameParser');

describe('Test nameParser when we pass ', () => {
    describe('only the firstName with the value Thor ', () => {
        it('should return the expected full name', () => {
            // ARRANGE
            const firstName = 'Thor';
    
            // ACT
            const result = parseName({ firstName });
    
            // ASSERT
            expect(result).toBe(firstName);
        });
    });
    
    describe('the full data for Tony Stark name ', () => {
        it('should return the expected full name', () => {
            // ARRANGE
            const firstName = 'Anthony';
            const lastName = 'Edward';
            const middleName = 'Stark';
            const prefix = 'Mr.';

            // ACT
            const result = parseName({
                firstName, lastName, middleName, prefix
            });
    
            // ASSERT
            const expectedResult = 
                `${prefix} ${lastName}, ${firstName} ${middleName}`;
            expect(result).toEqual(expectedResult);
        });
    });

});

