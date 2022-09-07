import './styles/normalize.css';
import './style.css';

import { start } from './js/helpers';

// Eventos
document.addEventListener('click', ({ target }) => {

  if( target.matches( '#start' ) || target.matches(`${'#start'} *`) || target.matches( '#back' )){

    start();

  }

})