const posterSection = $('#poster-section');

const genesgenomics =[
    {"number": 8901, 
    "authors": "Esmeralda Escobar Muciño, José Rivera Chávez and Jesús Israel Morales Jiménez", 
    "tittle": "Bioinformatic search and in silico study of the Diels alderase and transcription activators related to the synthesis of cuautepestalorin in the genome assembly of Pestalotiopsis sp. IQ-011", 
    "keywords": "Cuatepestalorin, Diels alderase, Genome assembly, Molecular docking, Pestalotiopsis sp. IQ-011.",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const rnas =[
    {"number": 0274, 
    "authors": "Francisca Rodríguez-Cabello, Bárbara Arévalo Ramos and Basilio Carrasco", 
    "tittle": "Analysis of differential expression in the phaseolin gene in samples of Chilean and foreign Phaseolus vulgaris L. species", 
    "keywords": "Bioinformatics, Phaseolin, Gene, Expression",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const phylogenyevolution =[
    {"number": 1, 
    "authors": "", 
    "tittle": "", 
    "keywords": "",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const proteins =[
    {"number": 2, 
    "authors": "", 
    "tittle": "", 
    "keywords": "",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const simulationsstructural =[
    {"number": 3, 
    "authors": "", 
    "tittle": "", 
    "keywords": "",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const bioinfoDiseases =[
    {"number": 4, 
    "authors": "", 
    "tittle": "", 
    "keywords": "",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const machinelearning =[
    {"number": 5, 
    "authors": "", 
    "tittle": "", 
    "keywords": "",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const miningBigData =[
    {"number": 6, 
    "authors": "", 
    "tittle": "", 
    "keywords": "",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const artInt =[
    {"number": 7, 
    "authors": "", 
    "tittle": "", 
    "keywords": "",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const systemsBiology =[
    {"number": 8, 
    "authors": "", 
    "tittle": "", 
    "keywords": "",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const databaseSoftware =[
    {"number": 9, 
    "authors": "", 
    "tittle": "", 
    "keywords": "",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const education =[
    {"number": 10, 
    "authors": "", 
    "tittle": "", 
    "keywords": "",
    "poster": "poster.png",
    "video": "https://www.youtube.com/embed/mzW5AAfuFMU"}
];

const searchDiv = createSearchSection();

const posterSessionContent = $(`
    <div class="tracks">
        <div>
            <button class="track-header collapsible">
                <h3>Genes and Genomics</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class="content track" id="GenesGenomics"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>RNA and Transcriptomics</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="RNATranscriptomics"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Phylogeny and Evolution</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="PhylogenyEvolution"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Proteins and Proteomics</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="ProteinsProteomics"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Biomolecular Simulations and Structural  Bioinformatics</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="SimulationsStructural"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Bioinformatics and Diseases </h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="BioinformaticsDiseases"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Machine Learning</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="MachineLearning"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Data mining and Big Data Analysis</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="MiningBigData"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Artificial Intelligence in Health</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="ArtInt"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Systems Biology</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="SystemsBiology"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Database and Software Development</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="DatabaseSoftware"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Education</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="Education"></div> 
        </div>
    </div>
`);

//Generate Search section content
searchDiv.appendTo(posterSection);

document.getElementById('search-input').addEventListener('keyup', function(e) {
    const input = searchInput();
    const posterIds = keywordSearch(input).map(it => String(it.number));
    const $tracks = $(".track-header");

    if (input.length !== 0) {
        $tracks.addClass("active");
    } else {
        $tracks.removeClass("active");
    }

    $tracks.each((index, track) => {
        const $track = $(track);
        let hasResults = false;
        $track.parent().find(".titleposters").each((index, element) => {
            const $element = $(element);
            if (posterIds.includes(element.id)) {
                hasResults = true;
                $element.removeClass("hidden");
            } else {
                $element.addClass("hidden");
            }
        })
        if (hasResults) {
            $track.removeClass("hidden");
        } else {
            $track.addClass("hidden");
        }
    })

});


//put the tracks div in the poster section
posterSessionContent.appendTo(posterSection);

//Create the content in each track
let divPosters = document.getElementsByClassName("track");
//Create array with the tracks dictionaries
const dicts = [genesgenomics,rnas,phylogenyevolution,proteins,simulationsstructural,bioinfoDiseases,
    machinelearning,miningBigData,artInt,systemsBiology,databaseSoftware,education]
posterButtonCreat(dicts, divPosters);

// Click in the tracks to toggle between showing and hiding the collapsible content
let tracks = document.getElementsByClassName("track-header");
makeCollapsibleElements(tracks);
let posters = document.getElementsByClassName("titleposters");
savePosterNumber(posters);

//put the posters number and name in each track
function posterButtonCreat(listPosters, divPosters) {
    for (let j = 0; j < listPosters.length; j++) {
        listPosters[j].forEach(element => {
            let title = $(`
            <div>
                <button id="${element.number}" class="titleposters collapsible"> 
                    <h4>#${element.number} ${element.tittle}</h4>
                </button>
            </div>
            `);
            title.appendTo($(divPosters[j]));
        });
    }
}

//show posters information when click on the posters title
function renderPosterInfo(element, collapsible) {
    if ($(collapsible).children().length === 1) {
        const posterDiv = $(
            `<div class="content">
                <div class="poster-video">
                    <div class="authors-video">
                        <figcaption class="authors-list">${element.authors}</figcaption>
                        <iframe class="video-frame" src="${element.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <a href="./assets/img/posters/${element.poster}" target="_blank">
                        <img alt="" src="./assets/img/posters/${element.poster}">
                    </a>
                </div>
            </div>`
        );
        posterDiv.insertAfter(collapsible);
    }
}

function savePosterNumber(elementLists) {
    for (let i = 0; i < elementLists.length; i++) {
        elementLists[i].addEventListener("click", function() {
            const collapsible = $(`#${this.id}`);
            localStorage.setItem("posterNumber", this.id);
            renderPosterInfo(searchPosterByNumber(Number(this.id)), collapsible);
        });
    }
    makeCollapsibleElements(elementLists);

}

function makeCollapsibleElements(elementLists) {
    for (let i = 0; i < elementLists.length; i++) {
        elementLists[i].addEventListener("click", function() {
            this.classList.toggle("active");
        });
    }
}

function createSearchSection() {
    const mainSearcherSectionDiv = $(`
        <section class="buscador-section active" id="buscador-section">
        <h2 class="title">3rd WBDS LA Posters</h2>
        <div class="buscador" id="buscador">
            <input type="text" placeholder=" Search a poster by keywords.." name="search" class="search-input" id="search-input">
        </div>
        </section>`);
    return mainSearcherSectionDiv
}

function keywordSearch(searchquery) {
    let posters = [];

    for (let element of dicts) {
        for (let poster of element) {
            if(poster.keywords.toLowerCase().includes(searchquery.toLowerCase().trim())){
                posters.push(poster);
            }
        }
    }

    return posters;
}


function renderSuggestions(element, parentDiv){
    const li = document.createElement('li');
    const anchor = document.createElement('a');

    anchor.href = '#';
    anchor.innerHTML =  'POSTER #' + element.number +' '+ element.tittle;

    li.appendChild(anchor);
    parentDiv.appendChild(li);
}

function searchInput() {
    const input = document.getElementById('search-input');

    return input.value
}


function searchPosterByNumber(id) {
    for (let element of dicts) {
        for (let poster of element) {
            if(poster.number === id){
                return poster;
            }
        }
    }
}
