/**
 * @param {number[]} heights
 * @return {number}
 *Return the minimum number of students
 *that must move in order for all students 
 *to be standing in non-decreasing order of height.
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

// diff solution

var heightChecker = function(heights) {
    //create a new sorted heights array
    let sortedArray = Array.from(heights);
    //use .sort() to sort array from smallest to biggest
    sortedArray.sort((a,b) => a-b);
    //create moves variable to keep track of the moves that need to be made
    let moves = 0;
    //use a for loop to compare original heights array to our new sorted array
    for(let i = 0; i < heights.length; ++i) {
        //if sorted array index does not equal height index
        if(sortedArray[i] !== heights[i])
            //+1 to moves
            ++moves;
    }
    // return total amount of moves
    return moves;
};


