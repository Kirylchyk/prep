//You are given a string s representing an attendance record for a student
// where each character signifies whether the student was absent, late,
// or present on that day. The record only contains the following three characters:
//
// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:
//
// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.



function doThat (str) {

    function absent() {
        let absentList = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'A') {
                absentList++;
            }
            if (absentList < 2) {
                return true
            }
        }
    }


    function late() {
        let late = [];

        for (let i = 0; i < str.length; i++) {
            if (str[i] === "L") {
                late.push(str[i]);
            }
        }
        if (late.length < 3) {

            return true

        }

    }

    if (absent() && late()) {

        return true
    }

    else return false

}

console.log(doThat('PPALLP')); //true
console.log(doThat('PPALLL')); //false



function checkEligibility(attendance) {
    let absences = 0;
    let consecutiveLates = 0;

    for (let i = 0; i < attendance.length; i++) {
        if (attendance[i] === 'A') {
            absences++;
            if (absences >= 2) return false; // More than 1 absence disqualifies the student
        }

        if (attendance[i] === 'L') {
            consecutiveLates++;
            if (consecutiveLates >= 3) return false; // 3 consecutive lates disqualify the student
        } else {
            consecutiveLates = 0; // Reset late count if the current day is not late
        }
    }

    return true; // If the loop completes without returning false, the student is eligible
}

console.log(checkEligibility('PPALLP')); // Should return true
console.log(checkEligibility('PPALLL')); // Should return false