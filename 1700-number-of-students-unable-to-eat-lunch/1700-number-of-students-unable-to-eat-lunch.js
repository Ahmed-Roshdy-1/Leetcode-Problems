/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let i = 0,
        c = 0;
    while (students.length) {
        let x = students.shift();
        if (x === sandwiches[i]) {
            i++;
            c=0;
        } else {
            students.push(x);
            c++;
        }
        if (c >= students.length) {
            return c;
        }
    }

    return 0;
};
