import { shuffleCards } from "./helpers";

const d           = document;
let cardIdList    = [];

// regresa en un nuevo arreglo las imagenes del juego
const uploadImages = () => {

  // arreglo con las imagenes
  const imagesList = [
    { name: "abradolf", image: "abradolf.jpg" },
    { name: "beth", image: "beth.jpg" },
    { name: "birdperson", image: "birdperson.jpg" },
    { name: "evilmorty", image: "evilmorty.jpg" },
    { name: "jerry", image: "jerry.jpg" },
    { name: "morty", image: "morty.jpg" },
    { name: "pepinillorick", image: "pepinillorick.jpg" },
    { name: "poopy", image: "poopy.jpg" },
    { name: "rick", image: "rick.jpg" },
    { name: "squanchy", image: "squanchy.jpg" },
    { name: "summer", image: "summer.jpg" },
    { name: "tinyrick", image: "tinyrick.jpg" },
  ];

  return [ ...imagesList ];
};

// regresa el número de cartas que se mostraran en el tablero
const randomCards = ( size = 4 ) => {

  const imagesList = uploadImages();

  const cardList = [];

  // número de cartas por par en el tablero de juego
  size = (size * size) / 2;

  // un ciclo for para generar las 8 cartas pares de manera aleatoria
  for (let i = 0; i < size; i++) {

    // crear un indice aleatorio
    const randomIndex = Math.floor(Math.random() * imagesList.length);

    cardList.push(imagesList[ randomIndex ]);

    // borramos el elemento recien agregado al arreglo `cardList` del arreglo `imagesList`
    imagesList.splice( randomIndex, 1 );

  }

  return cardList;
};

// generando el tablero
export function generateDashboard( size = 4 ){

  cardIdList  = [];
  
  let randomCardList = randomCards();

  const $dashboard = d.getElementById('dashboard');
  
  // creamos el arreglo con los pares de las cartas
  randomCardList = [...randomCardList, ...randomCardList ];
  
  // barajamos las cards
  const shuffle = shuffleCards( randomCardList );
  // console.log(shuffle);
  
  const cardsList = [];

  for (let i = 0; i < size * size; i++) {

    cardsList.push(`
      <div class="container-card">
        <div class="card" id="card${i}" >
          <div class="face front">?</div>
          <div class="face back" id="back${i}">
            <img src="/assets/${ shuffle[i].image }" class="image"/>
          </div>
        </div>
      </div>
    `);  
  }

  $dashboard.innerHTML = cardsList.join(' ');

  // Creamos las columnas de la grid de acuerdo al valor de la variable `size`
  $dashboard.style.gridTemplateColumns = `repeat( ${ size }, max-content)`;

  const $cards = d.querySelectorAll('.container-card');
  
  selectCard( $cards );
}

// selecciona la tarjetas que vamos a comparar
function selectCard( $cards ){
  
  $cards.forEach( ( $card ) => {

    $card.addEventListener('click', () => {

      // extraemos el primer elemento del `div` con la clase `container-card`
      let card = $card.firstElementChild;

      // extraemos el id de la $card y de la cara posterior de la $card
      let cardId = card.id;
      
      // si la carta seleccionada no tiene el efecto se lo agregamos para que rote
      if (card.style.transform != "rotateY(180deg)") {
        card.style.transform = "rotateY(180deg)"
        cardIdList.push( cardId );
      }
      
      // necesita tener un par de elementos en el arreglo para hacer la logica de la comparación del par de cartas
      if (cardIdList.length === 2) {
        deselectCard( cardIdList );
        cardIdList = [];
      }
      
    })
  })  
}

// se encarga de la logica de comparacion de cada par de cartas a las que se le haga click
function deselectCard( cardIdList ){

  setTimeout(() => {

    // cara trasera de la card
    const back1 = d.getElementById( 'back' + cardIdList[ 0 ].slice( 4 ) );
    const back2 = d.getElementById( 'back' + cardIdList[ 1 ].slice( 4 ) );

    // comparamos si las cards son iguales
    if(back1.firstElementChild.src != back2.firstElementChild.src){

      // si no son iguales vuelven a mostrar la cara frontal de la card
      const card1 = d.getElementById( cardIdList[0]);
      const card2 = d.getElementById( cardIdList[1]);
      card1.style.transform = "rotateY(0deg)";
      card2.style.transform = "rotateY(0deg)";

    }else{

      // al ser iguales el par de cartas le agregamos opacidad 
      back1.style.opacity = 0.4;
      back2.style.opacity = 0.4;
    }
  }, 1000);

}


