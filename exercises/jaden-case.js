'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string) {
    let tab = [];
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        tab.push(words[i][0].toUpperCase() + words[i].substr(1).toLowerCase());
    }
    return tab.join(' ');
}

//* Begin of tests

const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('How can mirrors be real'), 'How Can Mirrors Be Real')


// End of tests */
