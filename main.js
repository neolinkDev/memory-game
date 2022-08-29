import './styles/normalize.css';
import './style.css';
import { generateDashboard } from './js';

// Variables o nodos del DOM '$'
const $container    = document.querySelector('.container'),
      $dashboard    = document.querySelector('.dashboard'),
      $startBtn     = document.querySelector('.start-btn'),
      $containerBtn = document.querySelector('.container-btn');


// Eventos
document.addEventListener('click', ({ target }) => {

  if( target.matches( '#start' ) || target.matches(`${'#start'} *`) ){

    $container.classList.remove('hide');
    $dashboard.classList.remove('hide');

    $containerBtn.classList.add('hide');
    $startBtn.classList.add('hide');
    
    generateDashboard();

  }

  // if( target.matches( '.container-card' ) || target.matches(`${'.container-card'} *`) ){

  //   console.log( 'Desde la clase container-card' );
    
  //   // selectCard();

  // }

})
