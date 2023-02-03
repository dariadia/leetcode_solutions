// Task 6. Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// Algo: create "resulting" matrix, immitate zig-zag movement, fill out the matrix, join the parts to form a string.
// 1. The number of rows of the matrix will be equal to  numRows
// 2. We have several sections, each section will have at most  numRows - 1 columns in it
// 3. In each section, we will have 2 * numRow - 2 characters (diagonal)
// 4. We can say we need ceil(n / (2 * numRows - 2)) * (numRows - 1) columns
// 5. Move from top to bottom in a column, currCol will remain the same but currRow will go from 0 to numRows
// 6. Move diagonally up, we move one cell up and one cell right, thus currCol++ and decrease currRow-- till it reaches the top (currRow=0)

// Time complexity: O(numRows⋅n) where "n" is the length of the input string
// Space complexity: O(numRows⋅n)

BUT

function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    const rows = new Array(numRows).fill('');

    let currRow = -1;
    let ascending = true;

    for (let i = 0; i < s.length; i++) {
        currRow += ascending ? 1 : -1;
        rows[currRow] += s[i];

        if (currRow === numRows - 1) {
            ascending = false;
        } else if (currRow === 0) {
            ascending = true;
        }
    }

    return rows.join('');
};
