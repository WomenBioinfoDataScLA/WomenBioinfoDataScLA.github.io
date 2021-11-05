const $weSection = $(document.getElementById('who-we-are'));
const weSection = document.getElementById('who-we-are');

const Coordinators = [
    { "name": "Ana Julia Velez Rueda", 'img': 'ana.jpg', "filiation": "Universidad Nacional de Quilmes - CONICET, Argentina" },
    { "name": "Liliane Conteville", 'img': 'liliane.png', "filiation": "Embrapa Pecuária Sudeste - São Paulo, Brazil" },
    { "name": "Mercedes Didier Garnham", 'img': 'mercedes.jpeg', "filiation": "Genetics and Bioinformatics Lab, IIB-UNSAM, Argentina" },
    { "name": "Lucy Jiménez", "img": 'lucy.jpeg', "filiation": "Universidad de Los Andes, Colombia" }
]

const Members = [
    { "name": "Cristina Marino-Buslje", 'img': 'cristina.png', "filiation": "Fundación Instituto Leloir - CONICET, Argentina" },
    { "name": "Ivana Feldfeber", 'img': 'ivana.jpg', "filiation": "Observatorio de Datos con Perspectiva de Género, Argentina" },
    { "name": "Augustina Nardo", 'img': 'Agus2.jpg', "filiation": "CIDCA -UNLP, Argentina" },
    { "name": "Celeste Grimolizzi", 'img': 'celeste.jpg', "filiation": "3IA-IIIA CONICET UNSAM, Argentina"},
    { "name": "Lucía Guerrero García", 'img': 'lucia.jpg', "filiation": "GIBBS - UNAL, Colombia" },
    { "name": "Letícia Ferreira Lima", 'img':'leticia.jpg', "filiation":"Fundação Oswaldo Cruz - Rio de Janeiro, Brazil"},
    { "name": "Thayana Vieira Tavares", 'img':'Thayana.jpg', "filiation":"Universidade Federal de São Carlos(UFSCar) - São Paulo, Brazil"},
    { "name": "Clara Cerqueira Matos", 'img':'Clara.jpg', "filiation":"Bahia, Brazil"},
    { "name": "Sindy Licette Piñero", 'img':'Sindy.jpg', "filiation":"A. C. Camargo Cancer Center - São Paulo, Brazil"}
];

function renderWeSection(){
    $weSection.empty();
    const TitleDivCoordinators = document.createElement('div');
    const CoordinatorsTitle = document.createElement('h2');
    const CoordinatorsList = document.createElement('ul')
    const TitleDivMembers = document.createElement('div');
    const MembersTitle = document.createElement('h2');
    const MembersList = document.createElement('ul');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');

    TitleDivCoordinators.className = "title-div"
    TitleDivMembers.className = "title-div"

    span1.className = "underline"
    span2.className = "underline"
    
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

    TitleDivCoordinators.appendChild(CoordinatorsTitle);
    TitleDivCoordinators.appendChild(span1);

    weSection.appendChild(TitleDivCoordinators);
    weSection.appendChild(CoordinatorsList);

    TitleDivMembers.appendChild(MembersTitle);
    TitleDivMembers.appendChild(span2);

    weSection.appendChild(TitleDivMembers);
    weSection.appendChild(MembersList);  
}

window.onload = function() {
    renderWeSection()
}