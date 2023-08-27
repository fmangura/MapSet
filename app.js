const question1 = new Set([1,1,2,2,3,4]);
// resturns [1,2,3,4]

const question2 = [...new Set("referee")].join("");
// "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// [1,2,3], true
// [1,2,3], false

const hasDuplicate = (arr) => (arr.length !== [...new Set(arr)].length) ? true : false;

function vowelCount(str) {
    const vowels = new Map();
    for(let letter of str) {
        let char = letter.toLowerCase()
        if ('aeiou'.indexOf(char) !== -1){
            if(vowels.has(char)) {
                vowels.set(char, vowels.get(char) + 1);
            } else {
                vowels.set(char, 1);
            };
        };
    };
    return vowels;
};

