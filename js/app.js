const option1 = document.querySelector('#film');
const searchGrid = document.querySelector('.search-list');
const searchHeader = document.querySelector('.search-header');
//const infoGrid = document.querySelector('.info-grid-container');

// ------------Shift search options to the top and hide the header------------
const slideSearchBar = () => {
    searchHeader.classList.add('hide');
    searchGrid.classList.add('topBar');
};

// ---------------Display information for specfic search result---------------
const displayResults = () => {

};

option1.addEventListener('click', getResults );


// ---------------------------Get results from SWAPI---------------------------
async function getResults() {
    try {
        console.log('it works1');
        slideSearchBar();
        console.log('it works2');
        const result = await axios('https://swapi.co/api/people/1/');
        console.log('it works3');
        console.log(result.data);
        const arrayKeys = Object.keys(result.data);
        console.log(arrayKeys);
        console.log(arrayKeys[0]);

        for (let i = 0 ; i < arrayKeys.length ; i++) {
            let key = arrayKeys[i];

            console.log(result.data.key);
            console.log(arrayKeys[i]);
        }
        
    } catch (error) {
        console.log(error);
    }
    
}