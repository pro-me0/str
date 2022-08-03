str = `This code logs each character of
the given Strings in .02 seconds

`;
require('colors')
const fs = require('fs');
const read = fs.readFileSync('./str.js', 'utf-8')
/* for (x in str){
	setTimeout(()=>{}, 1000)
	process.stdout.write(str[x])
 }
 */
 /*
for (let x = 0; x<str.length;x++){
	setTimeout(()=>{process.stdout.write(str[x])}, 1000)
}console.log() */
var x, i;
//jkh
x = 0;

let title = () => {
	setTimeout(() => {
		process.title += "  \\";
		
		setTimeout(() => {process.title += "  /";
		title();}, 299.9);
	}, 299.9);
};


function print(x) {
	i = x;
		process.stdout.write(read[x].random);
		process.title = "Logged " + i + " character(s)";
	if (x < read.length - 1){
		x+=1;
		setTimeout(()=>{
			print(x);
		},20);
	}
}
console.log(`>There are ${read.length} Characters in this piece of code (Inclusing WhiteSpace Chrs)\n\n`);

print(x); title();
