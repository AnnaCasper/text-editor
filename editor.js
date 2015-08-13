var Editor = function () {
  this.lines = ''
}

Editor.prototype.write = function (string){
  this.lines += ' ' + string
}

var textEd = new Editor;
textEd.write('Once upon a time at Galvanize...');

console.log(textEd);

textEd.write('I learned to code.');

console.log(textEd);
