{
  const removeDuplicates = (arrayNum: number[]): number[] => {
    const newArrray: number[] = [];
    for (const num of arrayNum) {
      if (!newArrray.includes(num)) {
        newArrray.push(num)

      }
    }
    return newArrray
  };
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}   
