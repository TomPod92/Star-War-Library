const option1 = document.querySelector('#film');
const searchGrid = document.querySelector('.search-list');
const searchHeader = document.querySelector('.search-header');
const info = document.querySelector('.info-list');

// ------------Shift search options to the top and hide the header------------
const slideSearchBar = () => {
    searchHeader.classList.add('hide');
    searchGrid.classList.add('topBar');
};

// ---------------Display information for specfic search result---------------
const displayResults = (object) => {


    for (let key in object ) {
        if(key === 'created' ||  key === 'edited' || key === 'url') continue;
        let markup = `<li class="info-list__item">${key}: ${object[key]}</li>`;
        info.insertAdjacentHTML('beforeend', markup);
    }
};




// ---------------------------Get results from SWAPI---------------------------
async function getResults() {
    try {
        slideSearchBar();
        const result = await axios('https://swapi.co/api/people/1/');
        console.log(result.data);
        displayResults(result.data);   
   
    } catch (error) {
        console.log(error);
    }
    
}

// --------------------------Event listiners---------------------------
option1.addEventListener('click', getResults );