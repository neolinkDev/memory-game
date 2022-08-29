import { shuffleCards } from "./helpers";

const d = document;

// let images;

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

    // crear un un indice aleatorio
    const randomIndex = Math.floor(Math.random() * imagesList.length);

    cardList.push(imagesList[ randomIndex ]);

    // borramos el elemento recien agregado al arreglo `cardList` del arreglo `imagesList`
    imagesList.splice( randomIndex, 1 );

  }

  return cardList;
};

// generando el tablero
export function generateDashboard( size = 4 ){

  let randomCardList = randomCards();
  
  // creamos el arreglo con los pares de las cartas
  randomCardList = [...randomCardList, ...randomCardList ];
  
  const shuffle = shuffleCards( randomCardList );
  // console.log(shuffle);
  

  const $dashboard = d.getElementById('dashboard');

  const cardsList = [];

  for (let i = 0; i < size * size; i++) {

    cardsList.push(`
      <div class="container-card" onclick="selectCard(${i})">
        <div class="card" id="card${i}">
          <div class="face front">?</div>
          <div class="face back id="back${i}">
            <img src="/assets/${ shuffle[i].image }" class="image"/>
          </div>
        </div>
      </div>
    `);  
  }

  $dashboard.innerHTML = cardsList.join(' ');

  // Creamos las columnas de la grid de acuerdo al valor de la variable `size`
  $dashboard.style.gridTemplateColumns = `repeat( ${ size }, max-content)`;
  
}

// selecciona la tarjeta que vamos a comparar
export function selectCard( i ){
  
  let card = d.getElementById("card" + i);

  // console.log(card)

  // if($card.style.transform != 'rotateY(180deg)'){
  //   console.log(true)
  // }else {
  //   console.log(false)
    
  // }

}