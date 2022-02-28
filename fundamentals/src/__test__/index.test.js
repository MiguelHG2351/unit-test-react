const randomString = require('../index');


const reverseString2 = async (str) => {
    return new Promise((resolve, reject) => {
        if(!str) {
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    })
}

describe('Test funcionality in randomString', () => {
    test('Test the functionality :v', () => {
        expect(typeof (randomString())).toBe('string');
    })

    test('Test if exist a city', () => {
        expect(randomString()).toBe('cordoba');
    })
})
