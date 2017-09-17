
function assignGrade(score) {
    if (score > 90) {
       console.log('A');
    } else if (score > 80) {
        console.log('B');
    } else if (score > 70) {
        console.log('C');
    } else if (score > 65) {
        console.log('D');
    } else {
        console.log('F');
    }
}

assignGrade(87);