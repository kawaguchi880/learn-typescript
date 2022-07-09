//型について
//boolean型
let hasVavle0: boolean = false;
let hasVavle1= false;
//munber型
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

//string型
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

//型がほんとに正しいのか？？
//変数へホバーすると，表示される．
//この表示はvscode内に搭載されているtsc(typescriptコンパイラ)が認識しているので正しい．
// 「: string」→ 型注釈という
// ↑がなくても型推論で勝手に推論してくれる．
// 基本的には型推論を使っていく．初期化しないときなどは，型注釈を使う．

import axios from 'axios';
//axiosをctrl + クリックでaxiosのコードを見ることができる．
//因みにjsのファイルからでも同様．

//オブジェクトの書きかた．(敢えて型注釈)
const person = {
  name:{
    first:'Jack',
    last:'Smith'
  },
  age:21
}
//配列型
const fruits = ['Apple','Banana','Grape']
//エラーが出る→fruits.push(21);
const fruit = fruits[0];
// 

const book1 = ['bussiness',1500,false];
// 必ず一つ目にstr,二つ目にnum,三つ目にbooleanのみを入れたい時,tuple型を使う．
// 書きかたは以下の通りで型注釈で書く．
const book2:[string,number,boolean] = ['bussiness',1500,false];
// あとから足す分にはエラーは出ないがどのみち参照する際にエラーが出る．
book1.push(21)

// enum型(列挙型)について
// sizeが4つの値のみを取るようにしたい

enum CoffeeSize{
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot:true,
  size:CoffeeSize.TALL
}

// 下二つはエラーが出る．
// coffee.size = true;
// coffee.size = 'SHORT';
coffee.size = CoffeeSize.SHORT;
