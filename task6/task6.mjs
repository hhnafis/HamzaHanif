//Stripping whitespaces

//before stripping white spaces
var personName = ' \tMuhammad Ali   \t';
console.log(`This includes some white spaces at both ends: ${personName}`)

//after stripping white spaces by trim() method
console.log(`White spaces are trimmed here: ${personName.trim()}`);
