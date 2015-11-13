// In order to use Generators you must include the Babel polyfill.
// function* 宣言 (末尾にアスタリスクが付いた function キーワード)は、ジェネレーター関数を定義します
// Generator Functionの中で処理の中断を指定するキーワード
// Symbol.iteratorオブジェクトに対するデフォルトイテレータを指定します。for...ofによって使われます

var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
