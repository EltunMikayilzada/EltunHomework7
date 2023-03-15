function Exercise(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
    count++;
    }
    }
    return count;
    }
    
    console.log(Exercise([1, 5, 8, 5, 3, 9], 5)); 