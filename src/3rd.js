{
    var countWordOccurrences = function (sentence, word) {
        var sentenceLo = sentence.toLocaleLowerCase().split(' ');
        var wordLo = word.toLocaleLowerCase();
        var count = 0;
        console.log(count);
        for (var _i = 0, sentenceLo_1 = sentenceLo; _i < sentenceLo_1.length; _i++) {
            var sen = sentenceLo_1[_i];
            if (sen === wordLo) {
                count++;
            }
        }
        return count;
    };
    var result = countWordOccurrences("I love typescript", "typescript");
    console.log(result);
}
