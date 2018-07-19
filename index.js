/*
    Highest Scoring Word

    Given a string of words, you need to find the highest scoring word.
    Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
    You need to return the highest scoring word as a string.
    If two words score the same, return the word that appears earliest in the original string.
    All letters will be lowercase and all inputs will be valid.
*/

'use strict';

const assert = require('assert');

assert.equal(highest_scoring_word('today is thursday and yesterday was wednesday'), 'yesterday');
assert.equal(highest_scoring_word('developing in javascript is super easy'), 'javascript');
assert.equal(highest_scoring_word('e il mio cavallo di battaglia'), 'battaglia');
assert.equal(highest_scoring_word('tacos are delicious'), 'delicious');
assert.equal(highest_scoring_word('qu pv ba fo bi ba'), 'qu');

process.stdout.write("If this line runs, you've solved the kata!");
process.exit(0);

function highest_scoring_word (words) {
  const letters = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
    f : 6,
    g : 7,
    h : 8,
    i : 9,
    j : 10,
    k : 11,
    l : 12,
    m : 13,
    n : 14,
    o : 15,
    p : 16,
    q : 17,
    r : 18,
    s : 19,
    t : 20,
    u : 21,
    v : 22,
    w : 23,
    x : 24,
    y : 25,
    z : 26
  };

  let sentence = words.split(' ');
  let score = 0;
  let highest_score_word = '';
  
  for (let i = 0; i < sentence.length; i++) {
    let count = 0;
    for (let j = 0; j < sentence[i].length; j++) {
      count += letters[sentence[i].charAt(j)];
    }

    if (count > score) {
      score = count;
      highest_score_word = sentence[i];
    }
  }
  return highest_score_word;
}



