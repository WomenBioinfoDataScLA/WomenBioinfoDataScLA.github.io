const homeButton  = document.getElementById('home-button');
const aboutButton  = document.getElementById('about-button');
const weButton = document.getElementById('about-button');
const conductButton = document.getElementById('conduct-button');
const whoweareButton = document.getElementById('whoweare-button'); 


const projectsButton = document.getElementById('projects-button');
const supportButton = document.getElementById('support-button');
const contactButton = document.getElementById('contact-button');
const globeIcon = document.getElementById('globe-icon');
const spanishButton  = document.getElementById('spanish-button');
const portugueseButton  = document.getElementById('portuguese-button');

const h1About = document.getElementById('about-h1');
const pAbout = document.getElementById('about-p');
const h2Goals = document.getElementById('goals-h2');
const li1Goals = document.getElementById('goals-li1');
const li2Goals = document.getElementById('goals-li2');
const li3Goals = document.getElementById('goals-li3');
const li4Goals = document.getElementById('goals-li4');
const li5Goals = document.getElementById('goals-li5');
const h2Events = document.getElementById('events-h2');
const h4Events1 = document.getElementById('events-h4-1');
const h4Events2 = document.getElementById('events-h4-2');
const h4Events3 = document.getElementById('events-h4-3');
const h4Events4 = document.getElementById('events-h4-4');
const pEvents = document.getElementById('events-p');
const h2Projects = document.getElementById('projects-h2');
const h2Conference = document.getElementById('conference-h2');
const h3Conference = document.getElementById('conference-h3');
const h2Workshops = document.getElementById('workshops-h2');
const h3Workshops = document.getElementById('workshops-h3');
const h2Articles = document.getElementById('articles-h2');
const h3Articles = document.getElementById('articles-h3');
const h2Voluntteer = document.getElementById('volunteer-h2');
const h2Propose = document.getElementById('propose-h2');
const h2Database = document.getElementById('database-h2');
const h2Support = document.getElementById('support-h2');
const p1Support = document.getElementById('support-p1');
const p2Support = document.getElementById('support-p2');
const h5Contact = document.getElementById('contact-h5');
const h5Media = document.getElementById('socialmedia-h5');


function languageCheck(language){
    localStorage.setItem("Lang", language);
}

function indexLangSetting(){
    if(localStorage.getItem("Lang") === "ES"){
        renderSpanishNavBar();
        renderSpanishIndexPage();
    } else if (localStorage.getItem("Lang") === "PT"){
        renderPortugueseNavBar();
        renderPortugueseIndexPage();        
    }    
}

function renderPortugueseNavBar(){
    homeButton.innerHTML = "Início"
    whoweareButton.innerHTML = "Sobre"
    projectsButton.innerHTML = "Projetos"
    conductButton.innerHTML = "Código de Conduta"
    supportButton.innerHTML = "Nos Apoie"
    contactButton.innerHTML = "Contato"
}


function renderPortugueseIndexPage() {
    weButton.innerHTML = "Sobre"
    h1About.innerHTML = "Mulheres na Bioinformática e Ciência de Dados LA";
    pAbout.innerHTML = "Somos uma comunidade de mulheres que atuam nas áreas de Bioinformática e Ciência de Dados criada em 2019 com o objetivo de divulgar e dar visibilidade à pesquisa realizada por mulheres nessas áreas. Também buscamos criar redes e colaboração dentro da comunidade de mulheres cientistas dos setores público e privado. Nossos projetos visam reunir pesquisadoras da América Latina que atuam nas áreas de biologia de sistemas, tecnologias ômicas, inteligência artificial, aprendizado de máquina, ciência de dados, mineração de dados e computação de alto desempenho com aplicações em biologia dos setores público e privado.";
    aboutButton.innerHTML = "Quem somos nós";
    h2Goals.innerHTML = "Nossa visão e missão";
    li1Goals.innerHTML = "Ciência e tecnologia são ambientes masculinizados nos quais as disparidades de gênero permanecem parte de sua estrutura. Por isso, criamos um espaço com uma perspectiva ampla para que todas as mulheres se sintam seguras e empoderadas.";
    li2Goals.innerHTML = "Queremos contribuir com espaços nos quais toda a comunidade possa desenvolver suas carreiras sem barreiras, que promova todos os aspectos que são importantes para a construção de uma sociedade e comunidade científica mais igualitária e diversa.";
    li3Goals.innerHTML = "Promovendo e visibilizando a pesquisa feminina nas áreas de Bioinformática e Ciência de Dados";
    li4Goals.innerHTML = "Incentivando as mulheres a estabelecer redes colaborativas de pesquisa";
    li5Goals.innerHTML = "Capacitando jovens cientistas a terem confiança em seu trabalho e capacidades";
    h2Events.innerHTML = "Nossos Eventos";
    h4Events1.innerHTML = "Participantes";
    h4Events2.innerHTML = "Resumos";
    h4Events3.innerHTML = "Palestrantes";
    h4Events4.innerHTML = "Países";
    pEvents.innerHTML = "Você pode verificar como foram nossos eventos anteriores em nosso canal do youtube.";
    h2Projects.innerHTML = "Nossos Projetos";
    h2Conference.innerHTML = "Congresso 2° WBDS";
    h3Conference.innerHTML = "22-24 Set 21";
    h2Workshops.innerHTML = "Cursos";
    h2Articles.innerHTML = "Artigos";
    h3Articles.innerHTML = "Novo artigo!";
    h2Voluntteer.innerHTML = "Junte-se à equipe";
    h2Propose.innerHTML = "Proponha um Projeto";
    h2Database.innerHTML = "Base de Dados Mulheres e LGBTQIA+";
    h2Support.innerHTML = "Nos Apoie";
    p1Support.innerHTML = "Se você gostou da nossa comunidade e gostaria de nos apoiar, verifique os links abaixo.Somos uma comunidade sem fins lucrativos, portanto, qualquer ajuda será muito apreciada.";
    p2Support.innerHTML = "Também oferecemos uma variedade de oportunidades de patrocínio, incluindo espaço para anúncios em nosso programa de conferências e website. É uma oportunidade única para promover o seu negócio. Para saber mais, faça o download do folheto de patrocínio abaixo.";
    h5Contact.innerHTML = "Contate-nos por e-mail:";
    h5Media.innerHTML = "Nos siga nas redes sociais:";
}

function renderSpanishNavBar(){
    homeButton.innerHTML = "Inicio";
    whoweareButton.innerHTML = "Acerca de"
    projectsButton.innerHTML = "Proyectos";
    conductButton.innerHTML = "Código de conducta";
    supportButton.innerHTML = "Apóyanos";
    contactButton.innerHTML = "Contacto";
}

function renderSpanishIndexPage() {
    weButton.innerHTML = "Acerca de";
    h1About.innerHTML = "Mujeres en Bioinformática y Ciencia de Datos LA";
    pAbout.innerHTML = "Somos una comunidad de mujeres que trabajan en las áreas de Bioinformática y Ciencia de Datos creada en 2019 con el objetivo de difundir y dar visibilidad a la investigación que realizan las mujeres en estas áreas. También buscamos crear redes y colaboración dentro de la comunidad de mujeres científicas del sector público y privado, nuestros proyectos tienen como objetivo reunir a investigadores de América Latina que trabajan en las áreas de biología de sistemas, tecnologías ómicas, inteligencia artificial, aprendizaje automático, ciencia de datos, minería de datos y computación de alto rendimiento con aplicaciones en biología del sector público y privado. ";
    aboutButton.innerHTML = "Quiénes somos";
    h2Goals.innerHTML = "Nuestra visión y misión";
    li1Goals.innerHTML = "La ciencia y la tecnología son entornos masculinos en los que las disparidades de género siguen siendo parte de su estructura. Por ello, hemos creado un espacio con una perspectiva amplia para que todas las mujeres se sientan seguras y empoderadas.";
    li2Goals.innerHTML = "Queremos contribuir con espacios en los que toda la comunidad pueda desarrollar sus carreras sin barreras, que promueva todos los aspectos que son importantes para la construcción de una sociedad y comunidad científica más igualitaria y diversa.";
    li3Goals.innerHTML = "Promover y visibilizar la investigación femenina en las áreas de Bioinformática y Ciencia de Datos";
    li4Goals.innerHTML = "Alentar a las mujeres a establecer redes de investigación colaborativas";
    li5Goals.innerHTML = "Empoderar a jóvenes profesionales para que tengan confianza en su trabajo y sus capacidades";
    h2Events.innerHTML = "Nuestros eventos";
    h4Events1.innerHTML = "Participantes";
    h4Events2.innerHTML = "Resúmenes";
    h4Events3.innerHTML = "Oradoras";
    h4Events4.innerHTML = "Países";
    pEvents.innerHTML = "Puedes ver nuestros eventos anteriores en nuestro canal de youtube.";
    h2Projects.innerHTML = "Nuestros proyectos";
    h2Conference.innerHTML = "2do Congreso WBDS";
    h3Conference.innerHTML = "22-24 Sep 21";
    h2Workshops.innerHTML = "Cursos";
    h2Articles.innerHTML = "Artículos";
    h3Articles.innerHTML = "¡Nuevo paper!";
    h2Voluntteer.innerHTML = "¡Sumate a el equipo!";
    h2Propose.innerHTML = "Proponer un proyecto";
    h2Database.innerHTML = "Base de Datos Mujeres y LGBTQIA+";
    h2Support.innerHTML = "Apóyanos";
    p1Support.innerHTML = "Si le gusta nuestra comunidad y desea apoyarnos, consulte los enlaces a continuación.Somos una comunidad sin fines de lucro, por lo que cualquier ayuda será muy apreciada.";
    p2Support.innerHTML = "También ofrecemos una variedad de oportunidades de patrocinio, incluido un espacio para anuncios en nuestro programa de conferencias y sitio web. Es una oportunidad única para promover su negocio. Para obtener más información, descargue el folleto de patrocinio a continuación.";
    h5Contact.innerHTML = "Contáctenos por correo electrónico:";
    h5Media.innerHTML = "Síganos en las redes sociales:";
}


globeIcon.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

