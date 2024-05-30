//Check if words are anagram

function doThat (str1, str2) {

    let targetstr1 = str1.trim().replace(/\s/g, "")
        .toLowerCase().split("").sort().join();
    let targetstr2 = str2.trim().replace(/\s/g, "")
        .toLowerCase().split("").sort().join();

    if (targetstr1 === targetstr2) {
         return true
    } else {
        return false
    }

}

console.log(doThat('listen','silent'));//true


function doThat01(str1, str2) {
    let targetstr1 = str1.trim().replace(/\s/g, "").toLowerCase().split("").sort();
    let targetstr2 = str2.trim().replace(/\s/g, "").toLowerCase().split("").sort();

   if (targetstr1.length !== targetstr2.length) {
        return false;
    }

    // Compare sorted arrays element by element
    for (let i = 0; i < targetstr1.length; i++) {
        if (targetstr1[i] !== targetstr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(doThat01('listen', 'silent')); // Should return true