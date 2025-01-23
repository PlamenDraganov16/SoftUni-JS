function condenseArray(nums) {
    while (nums.length > 1) {
        let condensed = [];
        for (let i = 0; i < nums.length - 1; i++) {
            condensed.push(nums[i] + nums[i + 1]);
        }
        nums = condensed;
    }
    return nums[0];
}

condenseArray([5, 0, 4, 1, 2]);