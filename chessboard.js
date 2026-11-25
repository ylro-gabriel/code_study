let board = "";
let size = 8;

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }

  board += "\n";
}

//stripes
let stripes = "";
let stripesCount = 8;

for (let y = 0; y < stripesCount; y++) {
  for (let x = 0; x < stripesCount; x++) {
    if (y % 2 === 0) {
      stripes += " ";
    } else {
      stripes += "#";
    }
  }
  stripes += "\n";
}

//custom size and characters
/*
Wrap your checkerboard in a variable size and make it work for any size (try 3, 5, 10). Then use two characters of your choice, like "X" and "O", instead of space and #.
*/

/*
Level 3: Border Box
Print a size x size square where the outer edge is # and the inside is spaces:

#####
#   #
#   #
#   #
#####

Hint: a square is on the border when x or y is 0 or size - 1.
*/

/*
Level 4: Staircase Triangle
Print a right triangle where row 1 has 1 #, row 2 has 2, and so on up to size:

#
##
###
####

Hint: the inner loop no longer runs to size. What should its limit depend on?
*/

/*
Level 5: Diamond
Print a centered diamond for a given odd size, like 7 (or 5):

   #
  ###
 #####
#######
 #####
  ###
   #

Hint: for each row, work out how many spaces come first and how many # follow. Both change by a fixed amount per row, and the middle row is the turning point.
*/
