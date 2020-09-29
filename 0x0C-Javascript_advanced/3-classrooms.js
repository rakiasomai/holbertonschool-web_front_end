function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
	return function() { return seat };
    }
    let students = [];
    for (let y = 0; y < numbersOfStudents; y++) {
	students.push(studentSeat(y + 1));
    }
    return students;
}
let classRoom = createClassRoom(10);