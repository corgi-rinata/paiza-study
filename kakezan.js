process.stdin.resume();
process.stdin.setEncoding('utf8');

// 自分の得意な言語で
// Let's チャレンジ！！
var lines = []; // 　入力を入れる用の変数
var reader = require('readline').createInterface({ // 入出力の変数
  input: process.stdin,
  output: process.stdout
});


reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  var a = parseInt(lines[0], 10)
  var b = parseInt(lines[1], 10)
  console.log(a * b);
});