{
    var removeDuplicates = function (arrayNum) {
        var newArrray = [];
        for (var _i = 0, arrayNum_1 = arrayNum; _i < arrayNum_1.length; _i++) {
            var num = arrayNum_1[_i];
            if (!newArrray.includes(num)) {
                newArrray.push(num);
            }
        }
        return newArrray;
    };
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
