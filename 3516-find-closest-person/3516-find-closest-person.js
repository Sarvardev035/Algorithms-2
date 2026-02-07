/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let res_x = Math.abs(x-z);
    let res_y = Math.abs(y-z);

    if(res_x <res_y){
        return 1;
    }
    else if(res_y <res_x){
        return 2
    }else {
    return 0;

    }
};