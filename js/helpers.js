import { generateDashboard } from '.';

/* VARIABLES */
const d = document;

let movesCount;

export let fnInterval;

let s = 0,
    m = 0;

// Variables o nodos del DOM '$'
export const $container = d.querySelector('.container'),
             $dashboard = d.querySelector('.dashboard'),
             $startBtn  = d.querySelector('.start-btn');

const $containerBtn = d.querySelector('.container-btn'),
      $chronometer  = d.getElementById('chronometer'),
      $moves        = d.getElementById('moves');


/* FUNCIONES */    
// fn que inicia el juego
export function start(){

  movesCount = 0;
  s = 0;
  m = 0;

  $container.classList.remove('hide');
  $dashboard.classList.remove('hide');

  $containerBtn.classList.add('hide');
  $startBtn.classList.add('hide');
  
  $moves.innerHTML = `<span>Movimientos:</span> ${ movesCount }`;

  fnInterval = setInterval( chronometer, 1000 );

  generateDashboard();

}

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

// fn que muestra el tiempo que dura la partida
export const chronometer = () => {
  
  s++;

  // lógica para cambiar de segundos a minutos 
  if( s >= 60 ){
    m ++;
    s = 0;
  }

  // lógica para mostrar los minutos y segundos
  let $seconds = s < 10 ? `0${ s }` : s;
  let $minutes = m < 10 ? `0${ m }` : m;

  $chronometer.innerHTML = `${ $minutes }:${ $seconds }`;

  let $time = $chronometer.innerHTML = `${ $minutes }:${ $seconds }`;

  return {
    'time': $time, 
    'seconds': $seconds, 
    'minutes': $minutes
  };

}