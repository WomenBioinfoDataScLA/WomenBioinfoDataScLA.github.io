const $weSection = $(document.getElementById('who-we-are'));
const weSection = document.getElementById('who-we-are');


const MembersList = [
    { "name": "Ana Julia Velez Rueda", 'img': 'ana.jpg', "filiation": "Universidad Nacional de Quilmes - CONICET, Argentina" },
    { "name": "Lucy Jiménez", "img": 'lucy.jpeg', "filiation": "Universidad de Los Andes, Colombia" },
    { "name": "Cristina Marino-Buslje", 'img': 'cristina.png', "filiation": "Fundación Instituto Leloir - CONICET, Argentina" },
    { "name": "Liliane Conteville", 'img': 'liliane.png', "filiation": "Embrapa Pecuária Sudeste - São Paulo, Brazil" },
    { "name": "Mercedes Didier Garnham", 'img': 'mercedes.jpeg', "filiation": "Genetics and Bioinformatics Lab, IIB-UNSAM, Argentina" },
    { "name": "Ivana Feldfeber", 'img': 'ivana.jpg', "filiation": "Observatorio de Datos con Perspectiva de Género, Argentina" },
    { "name": "Augustina Nardo", 'img': 'Agus2.jpg', "filiation": "CIDCA -UNLP, Argentina" },
    { "name": "Celeste Grimolizzi", 'img': 'celeste.jpg', "filiation": "3IA-IIIA CONICET UNSAM, Argentina"},
    { "name": "Lucía Guerrero García", 'img': 'lucia.jpg', "filiation": "GIBBS - UNAL, Colombia" },
    { "name": "Letícia Ferreira Lima", 'img':'leticia.jpg', "filiation":"Fundação Oswaldo Cruz - Rio de Janeiro, Brazil"}
];

function renderWeSection(){
    $weSection.empty();
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');

    h2.innerHTML = "Committee";
    h2.id ="commitee-title";

    ul.className = "memberslist";

    MembersList.forEach(element => {
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
        ul.appendChild(li);
    });

    weSection.appendChild(h2);
    weSection.appendChild(ul);
}

window.onload = function() {
    renderWeSection()
}