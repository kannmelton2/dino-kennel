const dinos = [
    {
      id: 'dino1',
      name: 'Rex',
      type: 'T Rex',
      age: 100,
      owner: 'Zoe',
      adventures: [],
      health: 99,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    },
    {
      id: 'dino2',
      name: 'Steve',
      type: 'Velociraptor',
      age: 1,
      owner: 'Mary',
      adventures: [],
      health: 1,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    },
    {
      id: 'dino3',
      name: 'Susan',
      type: 'Stegasaurus',
      age: 55,
      owner: 'Luke',
      adventures: [],
      health: 45,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
    }
  ];

// PRINT TO DOM
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

// VIEW SINGLE DINO
const viewSingleDino = (e) => {
    const dinoId = e.target.closest('.card').id;
    const selectedDino = dinos.find((currentDino) => dinoId === currentDino.id);
    let domString = '';
    domString += '<button id="close-single-view" class="btn btn-outline-dark single-dino"><i class="fas fa-times"></i></button>';
    domString += '<div class="container">';
    domString += '   <div class="row">';
    domString += '       <div class="col-6">';
    domString += `           <img class="img-fluid" src="${selectedDino.imageUrl}" />`;
    domString += '        </div>';
    domString += '       <div class="col-6">';
    domString += `           <h2>${selectedDino.name}</h2>`;
    domString += `           <p>Age: ${selectedDino.age}</p>`;
    domString += `           <p>Type: ${selectedDino.type}</p>`;
    domString += `           <p>Owner: ${selectedDino.owner}</p>`;
    domString += `           <p>Health: ${selectedDino.health}</p>`;
    domString += '       </div>';
    domString += ' </div>';
    domString += '</div>';
    printToDom('kennel', '');
    printToDom('single-view', domString);
    document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent);
};

// CLOSE SINGLE VIEW
const closeSingleViewEvent = () => {
    printToDom('single-view', '');
    printDinos(dinos);
};


// EVENT LISTENER for viewing single dino
const singleDinoAddEvents = () => {
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for (let i = 0; i < dinoViewButtons.length; i++) {
        dinoViewButtons[i].addEventListener('click', viewSingleDino);
    }
};

// PET DINO EVENT
const petEvents = () => {
    const dinoPetButtons = document.getElementsByClassName('dino-photo');
    for (let i = 0; i < dinoPetButtons.length; i++) {
        dinoPetButtons[i].addEventListener('mouseleave', dinoHealth);
    }
};

// DINO HEALTH FUNCTION
const dinoHealth = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((currentDino) => currentDino.id === dinoId)
    if (dinos[dinoPosition].health < 100) {
    dinos[dinoPosition].health += 1;
    printDinos(dinos);
    };
};

// PRINT DINOS FUNC
const printDinos = (dinoArray) => {
    let domString = '';
    for (let i =0; i < dinoArray.length; i++){
      domString += '<div class="col-4">';
      domString += `<div class="card" id="${dinoArray[i].id}">`;
      domString += `<img class="card-img-top dino-photo" src="${dinoArray[i].imageUrl}" alt="Card image cap">`;
      domString += '<div class="card-body">';
      domString += `  <h5 class="card-title">${dinoArray[i].name}</h5>`;
      domString += `  <p class="card-text">Health: ${dinoArray[i].health}</p>`;
      domString += '<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    }
    printToDom('kennel', domString);
    singleDinoAddEvents();
    petEvents();
  };

// CREATE DINO IN ACCORDION FORM
const newDino = (e) => {
    e.preventDefault();
    const brandNewDino =
        {
            id: `dino${dinos.length + 1}`,
            name: document.getElementById('dino-name').value,
            type: document.getElementById('dino-type').value,
            age: document.getElementById('dino-age').value,
            owner: document.getElementById('dino-owner').value,
            adventures: [],
            health: 100,
            imageUrl: document.getElementById('dino-image').value
        }
    dinos.push(brandNewDino);
    document.getElementById('new-dino-form').reset();
    document.getElementById('collapseOne').classList.remove('show');
    printDinos(dinos);
};


const init = () => {
    printDinos(dinos);
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
};

init();