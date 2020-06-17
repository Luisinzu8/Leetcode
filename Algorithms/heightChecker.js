/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    //creat a variable to keep track of the students out of order
    let students = 0;
    //creat a new sorted array using slice so we do not modify original heights array
    let sortedHeight = heights.slice('').sort((a, b) => a - b);
    //iterate through heights array
    for(let i = 0; i < heights.length; i++) {
        //compare our new sorted array to original heights array
        if(sortedHeight[i] !== heights[i]) {
            //add 1 to our students variable for every student that must move to be in non-decreasing order
          students++;
      }
    }
    return students;
};

//[1,1,4,2,1,3]
//[1,1,1,2,3,4]