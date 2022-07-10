"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//型について
//boolean型
let hasVavle0 = false;
let hasVavle1 = false;
//munber型
let count = 12;
let float = 3.14;
let negative = -0.12;
//string型
let single = 'hello';
let double = "hello";
let back = `hello`;
//axiosをctrl + クリックでaxiosのコードを見ることができる．
//因みにjsのファイルからでも同様．
//オブジェクトの書きかた．(敢えて型注釈)
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
//配列型
const fruits = ['Apple', 'Banana', 'Grape'];
//エラーが出る→fruits.push(21);
const fruit = fruits[0];
// 
const book1 = ['bussiness', 1500, false];
// 必ず一つ目にstr,二つ目にnum,三つ目にbooleanのみを入れたい時,tuple型を使う．
// 書きかたは以下の通りで型注釈で書く．
const book2 = ['bussiness', 1500, false];
// あとから足す分にはエラーは出ないがどのみち参照する際にエラーが出る．
book1.push(21);
// enum型(列挙型)について
// sizeが4つの値のみを取るようにしたい
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 21] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
    // SHORTは何も書いてなくてもエラーが出ない．CoffeeSize.SHORTは0が入っている．
    // enumは文字列である必要はない．GRANDE = 21としているのでもしVENTIを初期化しなかったら22が入る．
    // enumは基本的に大文字で書く．
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// 下二つはエラーが出る．
// coffee.size = true;
// coffee.size = 'SHORT';
coffee.size = CoffeeSize.SHORT;
// any型はなんでも入る．
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
let banana = 'banana';
// 以下のコードが許されてしまう．anyが絡むことに関しては全くエラーは出さない．ので出来る限りany型は使わない．
banana = anything;
// union型について
let unionType = 10;
unionType = 'hello';
// unionType.関数で関数を見るとnumberとstringだけの関数のみが出る．その他はエラーが出る．
// リテラル型について
// ↓この変数appleは文字列appleしか入れられなくなる．つまり，その値しか入らない．
const apple = 'apple';
// const で定義するとリテラル型が，letだとstring型として型推論される．
//union型とリテラル型でenumのような扱いができる．
let clothSize = 'large';
// しかし，enumのようにclothSize.〇〇とかできない．
const cloth = {
    color: 'white',
    size: 'medium'
};
// 関数に型を付ける．変数と戻り値
// 型推論は戻り値には付く．しかし関数は長くなりがちなのでなるべく書くべき！
function add(num1, num2) {
    return num1 + num2;
}
// 戻り値が何もないとき
// undiifned型はreturn がないと使えない．
// voidはどちらも使える．基本的にはvoidを使う．
function sayHello() {
    console.log('Hello!');
}
// 関数を保持する変数に付ける型についての書きかた
// 型推論は
const anotherAdd = add;
// arrow関数に型付け
// arrow関数部分：number => number * 2
// 定義部分：const doubleNumber: (num: number) => number 
const doubleNumber = number => number * 2;
// コールバック関数
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
// unknown型
let unknownInput;
let aynInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput;←エラーが出る．
// 代入する際はtypeofで保障してあげる必要がある．
if (typeof unknownInput == 'string') {
    text = unknownInput;
}
// never型 必ず何も返さない
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
