var Editor = function () {
  this.lines = []
}

Editor.prototype.write = function (string){
  this.lines.push(string)
}

Editor.prototype.toString = function () {
  return this.lines.join('\n')
}

Editor.prototype.undo = function(){
  this.lines.splice(this.lines.length -1, 1)
}

var textEd = new Editor;
textEd.write('Once upon a time at Galvanize...');
textEd.write('I learned to code.');

console.log(textEd.toString());

textEd.undo();

console.log(textEd);
