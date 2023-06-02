function 콜라문제(a, b, n) {
  let getCoke = Math.floor(n/a)*b;
  let empty = n%a + getCoke;

  while (empty>=a) {
    getCoke += Math.floor(empty/a)*b;
    empty = empty%a + Math.floor(empty/a)*b;
  }

  return getCoke;
}
