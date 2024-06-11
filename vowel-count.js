//vowel counts from https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript?filter=me&sort=best_practice&invalids=false

//First code
function getCount1(str) {
    const splitted = str.split("");
    const vowels = ["a", "i", "o", "u", "e"];
    let count = 0;

    for (let i = 0; i < splitted.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (splitted[i] == vowels[j]) {
                count += 1;
            }
        }
    }
    return count;
}

//imporove
function getCount2(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    return str.split("").filter((char) => vowels.includes(char)).length;
}
