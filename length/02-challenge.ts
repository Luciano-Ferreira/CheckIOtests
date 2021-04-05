import assert from "assert";

function easyUnpack(values: any[]): any[] {
    const first = values[0];
    const third = values[2];
    const penultimate = values[values.length - 2]
    // length -> quantidade de propriedades que eu tenho dentro desse array.


    const resp = [ first, third, penultimate ];
    
    return resp;
}

console.log('Example:');
console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]));
console.log([1, 2, 3, 4, 5, 6, 7, 9].length)
// array.length é = a quantidade de elementos dentro do array


// These "asserts" are used for self-checking
assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7]);
assert.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1]);
assert.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
