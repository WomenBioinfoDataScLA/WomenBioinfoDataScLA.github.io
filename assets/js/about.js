const $weSection = $(document.getElementById('who-we-are'));
const weSection = document.getElementById('who-we-are');

const Coordinators = [
    { "name": "Ana Julia Velez Rueda", 'img': 'ana.jpg', "filiation": "Universidad Nacional de Quilmes - CONICET, Argentina" },
    { "name": "Liliane Conteville", 'img': 'liliane.png', "filiation": "Embrapa Pecuária Sudeste - São Paulo, Brazil" },
    { "name": "Mercedes Didier Garnham", 'img': 'mercedes.jpeg', "filiation": "Genetics and Bioinformatics Lab, IIB-UNSAM, Argentina" }
];

const Advisors = [
    { "name": "Cristina Marino-Buslje", 'img': 'cristina.png', "filiation": "Fundación Instituto Leloir - CONICET, Argentina" },
    { "name": "Ivana Feldfeber", 'img': 'ivana.jpg', "filiation": "Observatorio de Datos con Perspectiva de Género, Argentina" }
];

const Members = [
    { "name": "Lucía Guerrero García", 'img': 'lucia.jpg', "filiation": "GIBBS - UNAL, Colombia" },
    { "name": "Letícia Ferreira Lima", 'img':'leticia.jpg', "filiation":"Fundação Oswaldo Cruz - Rio de Janeiro, Brazil"},
    { "name": "Carolina Kurotusch Canettieri", 'img':'caroline.jpg', "filiation":"Bachelor of Biology - UFG, Brazil"},
    { "name": "Thayana Vieira Tavares", 'img':'Thayana.jpg', "filiation":"Universidade Federal de São Carlos(UFSCar) - São Paulo, Brazil"},
    { "name": "Clara Cerqueira Matos", 'img':'Clara.jpg', "filiation":"Bahia, Brazil"},
    { "name": "Sindy Licette Piñero", 'img':'Sindy.jpg', "filiation":"Oxiteno S. A. Industria e Comércio, Brazil"},
    { "name": "Karla Ruiz", 'img':'karla.jpg', "filiation":"Early Stage Researcher - Mexico"},
    { "name": "Brenda Cabrera Mendoza", 'img':'Brenda_Cabrera.jpg', "filiation":"Yale University, Mexico"}
];

const FormingMembers = [
    { "name": "Celeste Grimolizzi", 'img': 'celeste.jpg', "filiation": "3IA-IIIA CONICET UNSAM, Argentina"},
    { "name": "Lucy Jiménez", "img": 'lucy.jpeg', "filiation": "Pontificia Universidad Javeriana, Colombia" },
    { "name": "Agustina Nardo", "img": 'Agus2.jpg', "filiation": "Universidad Nacional de La Plata, Argentina" }
];


function renderWeSection(){
    $weSection.empty();
    const TitleDivCoordinators = document.createElement('div');
    const CoordinatorsTitle = document.createElement('h2');
    const CoordinatorsList = document.createElement('ul')
    const TitleDivAdvisors = document.createElement('div');
    const AdvisorsTitle = document.createElement('h2');
    const AdvisorsList = document.createElement('ul');
    const TitleDivMembers = document.createElement('div');
    const TitleDivFormingMembers = document.createElement('div');

    const MembersTitle = document.createElement('h2');
    const MembersList = document.createElement('ul');
    const FormingMembersTitle = document.createElement('h2');
    const FormingMembersList = document.createElement('ul');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const span4 = document.createElement('span');


    TitleDivCoordinators.className = "title-div"
    TitleDivMembers.className = "title-div"
    TitleDivAdvisors.className = "title-div"
    TitleDivFormingMembers.className = "title-div"

    span1.className = "underline"
    span2.className = "underline"
    span3.className = "underline"
    span4.className = "underline"

    
    CoordinatorsTitle.innerHTML = "General Coordinators";
    CoordinatorsTitle.id ="coordinators-title";
    CoordinatorsList.className = "memberslist";
    
    Coordinators.forEach(element => {
        const li = document.createElement('li');
        const figure =  document.createElement('figure');
        const img =  document.createElement('img');
        const figcappurple =  document.createElement('figcapture');
        const figcapgray =  document.createElement('figcapture');
        
        figure.className = "member";
        figcappurple.className = "name";
        
        img.src = "assets/img/" + element.img;
        img.alt = element.name + "-img";
        figcappurple.innerHTML = element.name;
        figcapgray.innerHTML = element.filiation;
        
        
        figure.appendChild(img);
        figure.appendChild(figcappurple);
        figure.appendChild(figcapgray);
        
        li.appendChild(figure);
        CoordinatorsList.appendChild(li);
    });

    MembersTitle.innerHTML = "Members";
    MembersTitle.id ="members-title";
    MembersList.className = "memberslist";
    
    Members.forEach(element => {
        const li = document.createElement('li');
        const figure =  document.createElement('figure');
        const img =  document.createElement('img');
        const figcappurple =  document.createElement('figcapture');
        const figcapgray =  document.createElement('figcapture');
        
        figure.className = "member";
        figcappurple.className = "name";
        
        img.src = "assets/img/" + element.img;
        img.alt = element.name + "-img";
        figcappurple.innerHTML = element.name;
        figcapgray.innerHTML = element.filiation;
        
        
        figure.appendChild(img);
        figure.appendChild(figcappurple);
        figure.appendChild(figcapgray);
        
        li.appendChild(figure);
        MembersList.appendChild(li);
    });

    AdvisorsTitle.innerHTML = "Advisory Team";
    AdvisorsTitle.id ="advisors-title";
    AdvisorsList.className = "memberslist";
    
    Advisors.forEach(element => {
        const li = document.createElement('li');
        const figure =  document.createElement('figure');
        const img =  document.createElement('img');
        const figcappurple =  document.createElement('figcapture');
        const figcapgray =  document.createElement('figcapture');
        
        figure.className = "member";
        figcappurple.className = "name";
        
        img.src = "assets/img/" + element.img;
        img.alt = element.name + "-img";
        figcappurple.innerHTML = element.name;
        figcapgray.innerHTML = element.filiation;
        
        
        figure.appendChild(img);
        figure.appendChild(figcappurple);
        figure.appendChild(figcapgray);
        
        li.appendChild(figure);
        AdvisorsList.appendChild(li);
    });

    FormingMembersTitle.innerHTML = "Former Contributors";
    FormingMembersTitle.id ="members-title";
    FormingMembersList.className = "memberslist";
    
    FormingMembers.forEach(element => {
        const li = document.createElement('li');
        const figure =  document.createElement('figure');
        const img =  document.createElement('img');
        const figcappurple =  document.createElement('figcapture');
        const figcapgray =  document.createElement('figcapture');
        
        figure.className = "member";
        figcappurple.className = "name";
        
        img.src = "assets/img/" + element.img;
        img.alt = element.name + "-img";
        figcappurple.innerHTML = element.name;
        figcapgray.innerHTML = element.filiation;
        
        
        figure.appendChild(img);
        figure.appendChild(figcappurple);
        figure.appendChild(figcapgray);
        
        li.appendChild(figure);
        FormingMembersList.appendChild(li);
    });

    TitleDivCoordinators.appendChild(CoordinatorsTitle);
    TitleDivCoordinators.appendChild(span1);

    weSection.appendChild(TitleDivCoordinators);
    weSection.appendChild(CoordinatorsList);

    TitleDivMembers.appendChild(MembersTitle);
    TitleDivMembers.appendChild(span2);

    weSection.appendChild(TitleDivMembers);
    weSection.appendChild(MembersList);

    TitleDivAdvisors.appendChild(AdvisorsTitle);
    TitleDivAdvisors.appendChild(span3);

    weSection.appendChild(TitleDivAdvisors);
    weSection.appendChild(AdvisorsList);


    TitleDivFormingMembers.appendChild(FormingMembersTitle);
    TitleDivFormingMembers.appendChild(span4);

    weSection.appendChild(TitleDivFormingMembers);
    weSection.appendChild(FormingMembersList);
}

function renderPortugueseAbout() {  
    const coordinatorsTitle =  document.getElementById('coordinators-title')
    const membersTitle =  document.getElementById('members-title')

    coordinatorsTitle.innerHTML = "Coordenadoras Gerais";
    membersTitle.innerHTML = "Equipe"
}

function renderSpanishAbout() {  
    const coordinatorsTitle =  document.getElementById('coordinators-title')
    const membersTitle =  document.getElementById('members-title')

    coordinatorsTitle.innerHTML = "Coordinadoras generales";
    membersTitle.innerHTML = "Equipo"
}

window.onload = function() {
    renderWeSection()
    if(localStorage.getItem("Lang") === "ES"){
        renderSpanishNavBar();
        renderSpanishAbout();
    } else if (localStorage.getItem("Lang") === "PT"){
        renderPortugueseNavBar();
        renderPortugueseAbout();        
    }   
}

spanishButton.addEventListener('click', () => {
    languageCheck("ES");
    renderSpanishNavBar();
    renderSpanishAbout();
});

portugueseButton.addEventListener('click', () => {
    languageCheck("PT");
    renderPortugueseNavBar();
    renderPortugueseAbout();
});