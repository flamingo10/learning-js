function assignGrade(g) {
    if (g > 90) {
       console.log('A');
    } else if (g > 80) {
        console.log('B');
    } else if (g > 70) {
        console.log('C');
    } else if (g > 65) {
        console.log('D');
    } else {
        console.log('F');
    }
}

for (g = 60; g <= 100; g = g + 1) {
    console.log('For' + g + ' you got a ' + assignGrade(g));
 } 
