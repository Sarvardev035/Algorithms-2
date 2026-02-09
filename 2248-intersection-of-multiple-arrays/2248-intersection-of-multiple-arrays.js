var intersection = function(nums) {
    let result = [];

    for (let i = 0; i < nums[0].length; i++) {
        let candidate = nums[0][i];
        let foundInAll = true;

        for (let j = 1; j < nums.length; j++) {
            if (!nums[j].includes(candidate)) {
                foundInAll = false;
                break;
            }
        }

        if (foundInAll) {
            result.push(candidate);
        }
    }

    return result.sort((a, b) => a - b);
};
