function storeUniqueArrays(input) {
    let uniqueArrays = [];
    
    input.forEach(str => {
        let arr = JSON.parse(str);
        
        let sortedArr = arr.slice().sort((a, b) => b - a);
        
        if (!uniqueArrays.some(existingArr => 
            existingArr.slice().sort((a, b) => b - a).toString() === sortedArr.toString())) {
            uniqueArrays.push(arr);
        }
    });

    uniqueArrays.sort((a, b) => a.length - b.length);

    uniqueArrays.forEach(arr => {
        console.log("[" + arr.sort((a, b) => b - a).join(", ") + "]");
    });
}

storeUniqueArrays(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"])