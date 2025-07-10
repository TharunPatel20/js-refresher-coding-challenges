export default function countVowels(str){ 
    const vowels = 'aeiouAEIOU';
    // let count = 0;

    // for (let char of str) {
    //     if (vowels.includes(char)) {
    //         count++;
    //     }
    // }

    // return count;

    return str.split('').reduce((count, char) => {
        return count + (vowels.includes(char) ? 1 : 0);
    }, 0);
}