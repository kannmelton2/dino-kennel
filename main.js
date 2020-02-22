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
    domString += '  <div class="progress">';
    domString += `      <div class="progress-bar bg-success" role="progressbar" style="width: ${selectedDino.health}%" aria-valuenow="${selectedDino.health}" aria-valuemin="0" aria-valuemax="100"></div>`;
    domString += '  </div>';
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

// DINO HEALTH FUNCTION
const dinoHealth = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((currentDino) => currentDino.id === dinoId)
    if (dinos[dinoPosition].health < 100) {
    dinos[dinoPosition].health += 1;
    printDinos(dinos);
    };
};

// PET DINO EVENT
const petEvents = () => {
    const dinoPetButtons = document.getElementsByClassName('dino-photo');
    for (let i = 0; i < dinoPetButtons.length; i++) {
        dinoPetButtons[i].addEventListener('mouseleave', dinoHealth);
    }
};

//DELETE DINO FUNC & EVENT LISTENER
const deleteDinoEvent = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((currentDino) => currentDino.id === dinoId);
    dinos.splice(dinoPosition, 1);
    printDinos(dinos);
};

const deleteEvents = () => {
    const dinoDeleteButtons = document.getElementsByClassName('delete-dino');
    for (let i = 0; i < dinoDeleteButtons.length; i++) {
        dinoDeleteButtons[i].addEventListener('click', deleteDinoEvent);
    }
}

// FEED DINOS
const feedMe = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((currentDino) => currentDino.id === dinoId);
    if (dinos[dinoPosition].health < 90) {
        dinos[dinoPosition].health += 10;
        printDinos(dinos);
    } else if (dinos[dinoPosition].health > 89 && dinos[dinoPosition].health < 100) {
            dinos[dinoPosition].health = 100;
            printDinos(dinos);
    };
};

const feedEvents = () => {
    const dinoFeedButtons = document.getElementsByClassName('feed-dino');
    for (let i = 0; i < dinoFeedButtons.length; i++) {
        dinoFeedButtons[i].addEventListener('click', feedMe);
    }
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
      domString += '<div class="progress">';
      domString += `<div class="progress-bar bg-success" role="progressbar" style="width: ${dinoArray[i].health}%" aria-valuenow="${dinoArray[i].health}" aria-valuemin="0" aria-valuemax="100"></div>`;
      domString += '</div>';
      domString += '<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>';
      domString += '<button class="btn btn-outline-danger delete-dino"><i class="fas fa-trash-alt"></i></button>';
      domString += '<button class="btn btn-outline-success feed-dino"><i class="fas fa-carrot"></i></button>';
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    }
    printToDom('kennel', domString);
    singleDinoAddEvents();
    petEvents();
    deleteEvents();
    feedEvents();
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