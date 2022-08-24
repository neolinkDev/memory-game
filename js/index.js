

const d = document;

let images;

function uploadImages(){

}

// generando el tablero
export function generateDashboard( size = 4 ){

  uploadImages();

  const $dashboard    = d.getElementById('dashboard'),
        $containerBtn = d.querySelector('.container-btn');

  const cardsList = [];

  for (let i = 0; i < size * size; i++) {
    
    cardsList.push(`
      <div class="container-card">
        <div class="card">
          <div class="face front">?</div>
          <div class="face back">
            <img src="/assets/pepinillorick.jpg" class="image"/>
          </div>
        </div>
      </div>
    `);  
  }

  $dashboard.innerHTML = cardsList.join(' ');

  // Creamos las columnas de la grid de acuerdo al valor de la variable `size`
  $dashboard.style.gridTemplateColumns = `repeat( ${ size }, max-content)`;
  // $containerBtn.style.height = '0';
  // $dashboard.style.marginTop = '100px';
  // $dashboard.style.height = 'inherit';

}