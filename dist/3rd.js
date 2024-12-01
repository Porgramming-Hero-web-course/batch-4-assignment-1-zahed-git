"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        const sentenceLo = sentence.toLocaleLowerCase().split(' ');
        const wordLo = word.toLocaleLowerCase();
        let count = 0;
        for (const sen of sentenceLo) {
            if (sen === wordLo) {
                count++;
            }
        }
        return count;
    };
    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result);
}
