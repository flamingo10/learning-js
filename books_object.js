var books = [
	{'title': 'A Boring Story',
	'author': 'Antoshe Chekhonte',
	'alreadyRead': true
	},
	{ 'title': 'Catch22',
	'author': 'Joseph Heller',
	'alreadyRead': false
	}];

for (var i = 0; i < books.length; i++) {
	var book = books[i];
	console.log(book.title + ' by ' + book.author);
	if (book.alreadyRead) {
		console.log('You already read ' + book.title + ' by ' + book.author);
	}	else   {
console.log('You still need to read ' + book.title + ' by ' + book.author);
	}
}



