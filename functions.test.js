
const functions = require('./functions'); 

// **** testing basics ************************

// toBe (primitives only)
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// NOT
test('Adds 2 + 2 to NOT equal 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// isNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// toBeFalsy ( falsy values = null, undefined, 0 )
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

// toBeTruthy
test('Should be truthy', () => {
    expect(functions.checkValue(2)).toBeTruthy();
})

// toEqual => test object/array
test('User should be Bojack Horseman object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Bojack',
        lastName: 'Horseman'
    });
});

// toBeLess - Greater - Than / ToBeLess - Greater - ThanOrEqual / 
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// toMatch [regex]
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

// toContain (arrays)
test('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})


// **** testing async data ************************

// promise (then)
test('Api request should return Leanne Graham', done => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham');
        done();
    })
})

// ! without 'expect.assertions()' and 'return', the test will always pass

//  + 'done' as argument : Jest will wait until the done callback 
// is called before finishing the test (https://jestjs.io/docs/en/asynchronous.html)
// otherwise, 'Expected one assertion to be called but received zero assertion calls' error 
// and test fails


// async await
test('Api request should return Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
})

// ************************************************