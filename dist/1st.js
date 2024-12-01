"use strict";
{
    const add = (sumArray) => {
        return sumArray.reduce((acc, num) => acc + num, 0);
    };
    console.log(add([1, 2, 3, 4, 5]));
}
