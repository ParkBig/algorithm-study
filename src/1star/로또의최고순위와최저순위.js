function 로또의최고순위와최저순위(lottos, win_nums) {
  let prize = [6, 6, 5, 4, 3, 2, 1]
  let got = 0;
  let zero = 0;

  for (let i of lottos) {
    if (win_nums.includes(i)) {
      got++;
    }
    if (i === 0) {
      zero++;
    }
  }

  return [prize[got+zero], prize[got]];
}