const dayOneButton = document.getElementById('workshop-registration');
const mlWorkshop = $('#machine-learning');
const bmWorkshop = $('#bacterial-metagenomics');
const ensemblWorkshop = $('#ensembl-workshop');
const pfamWorkshop = $('#pfam-workshop');
const atgWorkshop = $('#atg-workshop');
const workshopTables = $('#workshop-tables');

function renderWorkshopsSection() {
    const workshopSectionContent = $(`
        <a id="mlWorkshopFlyer" href="#" class="workshopsflyer disable">
            <img src="./assets/img/workshops/ml_workshop.png" alt="machine learning workshop flyer">
        </a>

        <a id='bmWorkshopFlyer' href="#" class="workshopsflyer disable">
            <img src="./assets/img/workshops/bm_workshop.png" alt="machine learning workshop flyer">
        </a>

        <a id='ensemblWorkshopFlyer' href="#" class="workshopsflyer disable">
            <img src="./assets/img/workshops/ensembl_workshop.png" alt="ensembl workshop flyer">
        </a>

        <a id='pfamWorkshopFlyer' href="#" class="workshopsflyer disable">
            <img src="./assets/img/workshops/interpro_workshop.png" alt="pfam workshop flyer">
        </a>

        <a id='pfamWorkshopFlyer' href="#" class="workshopsflyer disable">
            <img src="./assets/img/workshops/interpro_workshop.png" alt="pfam workshop flyer">
        </a>

        <a id='atgWorkshopFlyer' href="#" class="workshopsflyer disable">
            <img src="./assets/img/workshops/atg_workshop.png" alt="atg workshop flyer">
        </a>        
    `);


    workshopSectionContent.appendTo(workshopTables);

    const mlWorkshopFlyer = $('#mlWorkshopFlyer');
    const bmWorkshopFlyer = $('#bmWorkshopFlyer');
    const ensemblWorkshopFlyer = $('#ensemblWorkshopFlyer');
    const pfamWorkshopFlyer = $('#pfamWorkshopFlyer');
    const atgWorkshopFlyer = $('#atgWorkshopFlyer');

    mlWorkshop.on('click', () => {
        $(mlWorkshop).addClass('orange-element');
        $(bmWorkshop).removeClass('orange-element');
        $(ensemblWorkshop).removeClass('orange-element');
        $(pfamWorkshop).removeClass('orange-element');
        $(atgWorkshop).removeClass('orange-element');
        mlWorkshopFlyer.removeClass("disable");
        bmWorkshopFlyer.addClass("disable");
        ensemblWorkshopFlyer.addClass("disable");
        pfamWorkshopFlyer.addClass("disable");
        atgWorkshopFlyer.addClass("disable");
    });


    bmWorkshop.on('click', () => {
        $(mlWorkshop).removeClass('orange-element');
        $(bmWorkshop).addClass('orange-element');
        $(ensemblWorkshop).removeClass('orange-element');
        $(pfamWorkshop).removeClass('orange-element');
        $(atgWorkshop).removeClass('orange-element');
        mlWorkshopFlyer.addClass("disable");
        bmWorkshopFlyer.removeClass("disable");
        ensemblWorkshopFlyer.addClass("disable");
        pfamWorkshopFlyer.addClass("disable");
        atgWorkshopFlyer.addClass("disable");
    });    


    ensemblWorkshop.on('click', () => {
        $(mlWorkshop).removeClass('orange-element');
        $(bmWorkshop).removeClass('orange-element');
        $(ensemblWorkshop).addClass('orange-element');
        $(pfamWorkshop).removeClass('orange-element');
        $(atgWorkshop).removeClass('orange-element');
        mlWorkshopFlyer.addClass("disable");
        bmWorkshopFlyer.addClass("disable");
        ensemblWorkshopFlyer.removeClass("disable");
        pfamWorkshopFlyer.addClass("disable");
        atgWorkshopFlyer.addClass("disable");
    });   
    
    pfamWorkshop.on('click', () => {
        $(mlWorkshop).removeClass('orange-element');
        $(bmWorkshop).removeClass('orange-element');
        $(ensemblWorkshop).removeClass('orange-element');
        $(pfamWorkshop).addClass('orange-element');
        $(atgWorkshop).removeClass('orange-element');
        mlWorkshopFlyer.addClass("disable");
        bmWorkshopFlyer.addClass("disable");
        ensemblWorkshopFlyer.addClass("disable");
        pfamWorkshopFlyer.removeClass("disable");
        atgWorkshopFlyer.addClass("disable");
    }); 

    atgWorkshop.on('click', () => {
        $(mlWorkshop).removeClass('orange-element');
        $(bmWorkshop).removeClass('orange-element');
        $(ensemblWorkshop).removeClass('orange-element');
        $(pfamWorkshop).removeClass('orange-element');
        $(atgWorkshop).addClass('orange-element');
        mlWorkshopFlyer.addClass("disable");
        bmWorkshopFlyer.addClass("disable");
        ensemblWorkshopFlyer.addClass("disable");
        pfamWorkshopFlyer.addClass("disable");
        atgWorkshopFlyer.removeClass("disable");
    }); 

}

renderWorkshopsSection()