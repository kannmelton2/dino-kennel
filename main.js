const dinos = [
    {
      id: 'dino1',
      name: 'Rex',
      type: 'T Rex',
      age: 100,
      owner: 'Zoe',
      adventures: [],
      health: 92,
      imageUrl: 'https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png'
    },
    {
      id: 'dino2',
      name: 'Steve',
      type: 'Velociraptor',
      age: 1,
      owner: 'Mary',
      adventures: [],
      health: 1,
      imageUrl: 'https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png'
    },
    {
      id: 'dino3',
      name: 'Susan',
      type: 'stegosaurus',
      age: 55,
      owner: 'Luke',
      adventures: [],
      health: 0,
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg'
    },
    {
      id: 'dino4',
      name: 'Barry',
      type: 'Brontosaurus',
      age: 100,
      owner: 'Zoe',
      adventures: [],
      health: 100,
      imageUrl: 'https://images.unsplash.com/photo-1517923368558-70ca9ac84b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80'
    },
    {
      id: 'dino5',
      name: 'Steph',
      type: 'Spinosaurus',
      age: 100,
      owner: 'Zoe',
      adventures: [],
      health: 75,
      imageUrl: 'https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2'
    },
    {
      id: 'dino6',
      name: 'Tim',
      type: 'Talarurus',
      age: 100,
      owner: 'Zoe',
      adventures: [],
      health: 55,
      imageUrl: 'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226'
    },
    {
      id: 'dino7',
      name: 'Tracy',
      type: 'Triceratops',
      age: 100,
      owner: 'Zoe',
      adventures: [],
      health: 0,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg'
    },
    {
      id: 'dino8',
      name: 'Percy',
      type: 'Pterodactyl',
      age: 10,
      owner: 'Mary',
      adventures: [],
      health: 10,
      imageUrl: 'https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg'
    },
    {
      id: 'dino9',
      name: 'Betty',
      type: 'brontosaurus',
      age: 22,
      owner: 'Zoe',
      adventures: [],
      health: 22,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD'
    }
  ];

// PRINT TO DOM
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// CLOSE SINGLE VIEW
const closeSingleViewEvent = () => {
    printToDom('single-view', '');
    buildAllDinos();
};

// ADVENTURE TABLE BUILDER
// const adventureTableBuilder = (advArray) => {

// };

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
    printToDom('hospital', '');
    printToDom('single-view', domString);
    document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent);
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
    buildAllDinos();
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
    buildAllDinos();
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
        buildAllDinos(dinos);
    } else if (dinos[dinoPosition].health > 89 && dinos[dinoPosition].health < 100) {
            dinos[dinoPosition].health = 100;
            buildAllDinos();
    };
};

// FEED DINOS EVENT
const feedEvents = () => {
    const dinoFeedButtons = document.getElementsByClassName('feed-dino');
    for (let i = 0; i < dinoFeedButtons.length; i++) {
        dinoFeedButtons[i].addEventListener('click', feedMe);
    }
};

// PRINT BUTTONS
printButtons = (divId) => {
    let domString = '';
    domString += '<div class="row">';
    domString += `<div class="col-6"><button class="col-12 btn btn-outline-success feed-button ${divId === 'graveyard' ? 'disabled' : ''}"><i class="fas fa-drumstick-bite"></i></button></div>`;
    domString += `<div class="col-6"><button class="col-12 btn btn-outline-warning adv-button ${divId === 'graveyard' ? 'disabled' : ''}"><i class="fas fa-hiking"></i></button></div>`;
    domString += '</div>';
    domString += '<div class="row">';
    domString += `<div class="col-6"><button class="col-12 btn btn-outline-dark single-dino"><i class="far fa-eye"></i></button></div>`;
    domString += `<div class="col-6"><button class="col-12 btn btn-outline-danger delete-dino ${divId === 'graveyard' ? 'disabled' : ''}"><i class="far fa-trash-alt"></i></button></div>`;
    domString += '</div>';
  
    return domString;
}


// PRINT DINOS FUNC
const printDinos = (dinoArray, divId) => {
    let domString = '';
    for (let i =0; i < dinoArray.length; i++){
      domString += '<div class="col-4">';
      domString += `<div id="${dinoArray[i].id}" class="card">`;
      domString += `<img class="card-img-top ${divId !== 'graveyard' ? 'dino-photo' : ''}" src="${dinoArray[i].imageUrl}" alt="Card image cap">`;
      domString += '<div class="card-body">';
      domString += `  <h5 class="card-title">${dinoArray[i].name}</h5>`;
      domString += '<div class="progress">';
      domString += `<div class="progress-bar bg-success" role="progressbar" style="width: ${dinoArray[i].health}%" aria-valuenow="${dinoArray[i].health}" aria-valuemin="0" aria-valuemax="100"></div>`;
      domString += '</div>';
      domString += printButtons(divId);
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    }
    printToDom(divId, domString);
  };

  // ADD EVENTS
  const addEvents = () => {
      singleDinoAddEvents();
      petEvents();
      deleteEvents();
      feedEvents();
  }

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
    buildAllDinos(dinos);
};

// FIND HOSPITAL DINOS
const findHospitalDinos = () => {
    const hospitalDinos = dinos.filter((x) => x.health > 0 && x.health < 40);
    printDinos(hospitalDinos, 'hospital');
};

// FIND DEAD DINOS
const findDeadDinos = () => {
    const deadDinos = dinos.filter((x) => x.health < 1);
    printDinos(deadDinos, 'graveyard');
};

// FIND LIVE HEALTHY DINOS
const findLiveHealthyDinos = () => {
    const liveHealthyDinos = dinos.filter((x) => x.health > 39);
    printDinos(liveHealthyDinos, 'kennel');
};

const buildAllDinos = () => {
    findHospitalDinos();
    findDeadDinos();
    findLiveHealthyDinos();
    addEvents();
}


const init = () => {
    buildAllDinos();
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
};

init();