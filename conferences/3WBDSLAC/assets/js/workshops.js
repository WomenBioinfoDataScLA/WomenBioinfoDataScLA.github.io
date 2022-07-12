const dayOneButton = document.getElementById('workshop-registration');
const mlWorkshop = $('#machine-learning');
const bmWorkshop = $('#bacterial-metagenomics');
const ensemblWorkshop = $('#ensembl-workshop');
const workshopTables = $('#workshop-tables');



function renderWorkshopsSection() {
    const workshopSectionContent = $(`
        <a id="mlWorkshopFlyer" href="#" target="_blank" class="workshopsflyer disable">
            <img src="./assets/img/workshops/ml_workshop.png" alt="machine learning workshop flyer">
        </a>

        <a id='bmWorkshopFlyer' href="#" target="_blank" class="workshopsflyer disable">
            <img src="./assets/img/workshops/bm_workshop.png" alt="machine learning workshop flyer">
        </a>

        <a id='ensemblWorkshopFlyer' href="#" target="_blank" class="workshopsflyer disable">
            <img src="./assets/img/workshops/ensembl_workshop.png" alt="ensembl workshop flyer">
        </a>
    `);


    workshopSectionContent.appendTo(workshopTables);

    const mlWorkshopFlyer = $('#mlWorkshopFlyer');
    const bmWorkshopFlyer = $('#bmWorkshopFlyer');
    const ensemblWorkshopFlyer = $('#ensemblWorkshopFlyer');

    mlWorkshop.on('click', () => {
        $(mlWorkshop).addClass('orange-element');
        $(ensemblWorkshop).removeClass('orange-element');
        $(bmWorkshop).removeClass('orange-element');
        mlWorkshopFlyer.removeClass("disable");
        bmWorkshopFlyer.addClass("disable");
        ensemblWorkshopFlyer.addClass("disable");
    });


    bmWorkshop.on('click', () => {
        $(bmWorkshop).addClass('orange-element');
        $(ensemblWorkshop).removeClass('orange-element');
        $(mlWorkshop).removeClass('orange-element');
        mlWorkshopFlyer.addClass("disable");
        ensemblWorkshopFlyer.addClass("disable");
        bmWorkshopFlyer.removeClass("disable");
    });    


    ensemblWorkshop.on('click', () => {
        $(ensemblWorkshop).addClass('orange-element');
        $(bmWorkshop).removeClass('orange-element');
        $(mlWorkshop).removeClass('orange-element');
        mlWorkshopFlyer.addClass("disable");
        bmWorkshopFlyer.addClass("disable");
        ensemblWorkshopFlyer.removeClass("disable");
    });   

}

renderWorkshopsSection()