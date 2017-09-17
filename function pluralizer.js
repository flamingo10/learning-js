function pluralize(noun, number) {
    if (number > 1) {
        console.log (number + ' ' + noun + 's');
    } else {
        console.log (number + ' ' + noun);
    } 
    }

pluralize('dog', 17);