{
    var add = function (sumArray) {
        return sumArray.reduce(function (acc, num) { return acc + num; }, 0);
    };
    console.log(add([1, 2, 3, 4, 5]));
}
