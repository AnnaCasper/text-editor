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
  if(this.lines.length === 0){
    throw "This editor has no lines"
  } else {
    this.lines.pop()
  }
}

Editor.prototype.find = function (word) {
  var result = 0;
  newWord = new RegExp(word, 'i')
  this.lines.forEach(function(line){
    if(line.search(newWord) >= 0){
      result += 1
    }
  })
  return word + " " + result
}

var textEd = new Editor;
textEd.write('Once upon a time at Galvanize...');
textEd.write('I learned to code.');

console.log(textEd.find('once'));
