
// fn que baraja las cartas que se mostraran en el HTML
export const shuffleCards = ( arr ) => {

  for (let i = arr.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    const temp = arr[i];

    arr[i] = arr[j];

    arr[j] = temp;
  }

  return arr;
};
