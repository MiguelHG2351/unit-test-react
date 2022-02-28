const text = "hola mundo"
const fruits = ["apple", "banana", "orange"]

test('should contains some text', () => {
    expect(text).toMatch(/hola/)
});

test('have i a banana?', () => {
    expect(fruits).toContain("banana")
});

test('is older that', () => {
    expect(10).toBeGreaterThan(8)
});

test("it's true", () =>{
    expect(true).toBeTruthy()
});

const reverseString = (str, callback) => {
    callback(str.split('').reverse().join(''))
}

test('test a callback', () => {
    reverseString('hola', (str) => {
        expect(str).toBe('aloh')
    })
})


const reverseString2 = async (str) => {
    return new Promise((resolve, reject) => {
        if(!str) {
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    })
}

test('test a promise', () => {
    return reverseString2('hola')
    .then(string => {
        expect(string).toBe('aloh')
    })
})

test('test async/await', async () => {
    const string = await reverseString2('hola')
    expect(string).toBe('aloh')
})

// afterEach(() => {
//     console.log('after each test')
// })

// afterAll(() => {
//     console.log('after all test')
// })

// beforeEach(() => {
//     console.log('before each test')
// })

// beforeAll(() => {
//     console.log('before all test')
// })
