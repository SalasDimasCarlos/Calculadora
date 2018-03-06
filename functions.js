

let x = 1;
let y = {
  a: '1'
};

(function (a, b, c) {
  a++;
  b.a = 15;

  console.log(a, b.a, c);
})(x,y);
