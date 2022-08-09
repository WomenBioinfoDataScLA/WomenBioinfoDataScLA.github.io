const sectionOneminute= document.getElementById('oneminute-section');
const h2Oneminute = document.getElementById('oneminute-h2');
const pOneminute = document.getElementById('oneminute-description');
const h2OneminuteEpisodes = document.getElementById('oneminute-episodes-h2');

function renderOneMinuteSection(){
    sectionOneminute.innerHTML=`    <section id="workshops" class="conferences">
    <section class="events-section">
        <div class="events-title-div">
            <h2 id="oneminute-h2" class="events-title">Scientists: One story in one minute</h2>
            <span class="underline"></span>
        </div>

        <div class="oneminute-description">
            <p id="oneminute-description">
                "Scientists: One story in one minute" is a collection of short videos in which the story of scientists and 
                women in technology is told in first person. The objective of this space is to tell stories that 
                inspire and spread them to different corners of the world.<br>Captioning in English,
                Spanish and Portuguese will be available for all videos.<br>
                We will post one story every week starting on <span class="highlighted-text">July 24th, 2022!</span> <br><br>
                Don't forget to subscribe to our channel, like the videos and share with your friends!
            </p>
            <div>
                <iframe class="oneminute-description-video" src="https://www.youtube.com/embed/KF5GPFLj_bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>


    </section>

    <section class="events-section">
        <div class="events-title-div">
            <h2 id="oneminute-episodes-h2" class="events-title">Episodes</h2>
            <span class="underline"></span>
        </div>
        <div class="oneminute-div">
            <div>
                <p>
                    <span class="highlighted-text">Liliana López Kleine</span><br> 
                    Liliana is a scientist at GiBBS, at National University of Colombia, where she is also a 
                    professor of the department of Statistics. Her work focuses on the development and application 
                    of statistical methods to understand biological systems.
                </p>
                <a href="https://youtu.be/-ypIwHAq7G8" target="_blank">
                    <img src="assets/img/one-minute/Liliana.png">
                </a>
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Wendy González</span><br> 
                    Wendy is a scientist of CBSM, at University of Talca, where she is also a professor of the 
                    department of Bioinformatics. Her work focuses on developing drugs that bind to more than 
                    one protein.
                </p>
                <a href="https://youtu.be/BvPTlMmc7y8" target="_blank">
                    <img src="assets/img/one-minute/Wendy.png">
                </a>
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Cristina Marino Buslje</span><br> 
                    Cristina is a scientist at the Fundación Instituto Leloir, in Buenos Aires, Argentina. Founder 
                    of the Argentine Association of Bioinformatics and Computational Biology.
                </p>
                <a href="https://youtu.be/MG9_VHCyPYA" target="_blank">
                    <img src="assets/img/one-minute/Cristina.png">
                </a>
            </div>
            <div>
                <p>
                    <span class="highlighted-text"> Carolina Torres</span><br> 
                    Carolina is a CONICET researcher and Professor of Virology at the University of Buenos Aires, 
                    in Argentina. Her work focuses on the study of viral evolution, investigating diversification 
                    patterns and their relationship with biological, clinical, ecological and historical factors.
                </p>
                <img src="assets/img/one-minute/Carolina.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Pilar Cossio</span><br> 
                    Pilar is Doctor in Physics and Chemistry of Biological Systems, with Postdoctorate in the Max Planck Tandem 
                    group and NIH. She is a professor at the Universidad de Antioquia.
                </p>
                <img src="assets/img/one-minute/Pilar.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Marisa Fabiana Nicolás</span><br> 
                    Marisa is a scientist at the National Laboratory of Scientific Computing, Petrópolis, Brazil.
                    Her work involves sequencing bacterial genomes and investigating metabolic and regulatory 
                    networks of resistance-related genes.
                </p>
                <img src="assets/img/one-minute/Marisa.png">
            </div>
        </div>
    </section>

</section>
`
}

function renderPortugueseOneMinute() {  
    sectionOneminute.innerHTML=`    <section id="workshops" class="conferences">
    <section class="events-section">
        <div class="events-title-div">
            <h2 id="oneminute-h2" class="events-title">Cientistxs: Uma história em um minuto</h2>
            <span class="underline"></span>
        </div>

        <div class="oneminute-description">
            <p id="oneminute-description">
                "Cientistxs: Uma história em um minuto" é uma coleção de vídeos curtos em que a história de mulheres cientistas e
                mulheres da tecnologia é contada em primeira pessoa. <br>O objetivo deste espaço é contar histórias que
                inspiram e espalhá-las para diferentes cantos do mundo.<br>Legendas em Inglês,
                Espanhol e Português estarão disponíveis para todos os vídeos.<br>
                Publicaremos uma história toda semana a partir de <span class="highlighted-text">24 de julho de 2022!</span> <br><br>
                Não se esqueça de se inscrever em nosso canal, curtir os vídeos e compartilhar!
            </p>
            <div>
                <iframe class="oneminute-description-video" src="https://www.youtube.com/embed/mzW5AAfuFMU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
        </div>


    </section>

    <section class="events-section">
        <div class="events-title-div">
            <h2 id="oneminute-episodes-h2" class="events-title">Episódios</h2>
            <span class="underline"></span>
        </div>
        <div class="oneminute-div">
            <div>
                <p>
                    <span class="highlighted-text">Liliana López Kleine</span><br> 
                    Liliana é cientista do GiBBS, da Universidade Nacional da Colômbia, onde também é
                    professora do Departamento de Estatística. Seu trabalho se concentra no desenvolvimento e aplicação
                    de métodos estatísticos para compreender sistemas biológicos.
                </p>
                <img src="assets/img/one-minute/Liliana.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Wendy González</span><br> 
                    Wendy é cientista do CBSM, na Universidade de Talca, onde também é professora do
                    Departamento de Bioinformática. Seu trabalho se concentra no desenvolvimento de drogas que se ligam a mais de
                    uma proteína.
                </p>
                <img src="assets/img/one-minute/Wendy.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Cristina Marino Buslje</span><br> 
                    Cristina é cientista da Fundação Instituto Leloir, em Buenos Aires, Argentina. Fundadora
                    da Associação Argentina de Bioinformática e Biologia Computacional.
                </p>
                <img src="assets/img/one-minute/Cristina.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text"> Carolina Torres</span><br> 
                    Carolina é pesquisadora da CONICET e professora de Virologia da Universidade de Buenos Aires,
                    na Argentina. Seu trabalho se concentra no estudo da evolução viral, investigando padrões de diversificação e 
                    sua relação com fatores biológicos, clínicos, ecológicos e históricos.
                </p>
                <img src="assets/img/one-minute/Carolina.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Pilar Cossio</span><br> 
                    Pilar é Doutora em Física e Química de Sistemas Biológicos, com Pós-doutorado no grupo Max Planck Tandem e NIH. 
                    Também é professora da Universidad de Antioquia.
                </p>
                <img src="assets/img/one-minute/Pilar.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Marisa Fabiana Nicolás</span><br> 
                    Marisa é cientista do Laboratório Nacional de Computação Científica, Petrópolis, Brasil. Seu trabalho envolve o 
                    sequenciamento de genomas bacterianos e a investigação de redes metabólicas e regulatórias de genes relacionados à 
                    resistência.
                </p>
                <img src="assets/img/one-minute/Marisa.png">
            </div>
        </div>
    </section>

</section>
`
}

function renderSpanishOneMinute() {  
    sectionOneminute.innerHTML=`    <section id="workshops" class="conferences">
    <section class="events-section">
        <div class="events-title-div">
            <h2 id="oneminute-h2" class="events-title">Cientificxs: Una historia en un minuto</h2>
            <span class="underline"></span>
        </div>

        <div class="oneminute-description">
            <p id="oneminute-description">
            "Cientificxs: Una historia en un minuto" Una historia en un minuto es una serie de videos cortos, en los que se cuenta en primera persona la historia de científicxs.<br> Los videos cuentan con traducciones al Inglés, Español y Portugués.<br>
            Publicaremos una historia todas las semanas a partir del Youtube desde el <span class="highlighted-text">24 de Julio de 2022!</span> <br><br>
            ¡No te olvides de suscribirte a nuestro canal, darle like a los videos si te gustaron y compartir con tus amigxs!
            </p>
            <div>
                <iframe class="oneminute-description-video" src="https://www.youtube.com/embed/KF5GPFLj_bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>


    </section>

    <section class="events-section">
        <div class="events-title-div">
            <h2 id="oneminute-episodes-h2" class="events-title">Episodios</h2>
            <span class="underline"></span>
        </div>
        <div class="oneminute-div">
            <div>
                <p>
                    <span class="highlighted-text">Liliana López Kleine</span><br> 
                    Liliana es científica en GiBBS, en la Universidad Nacional de Colombia, donde también es profesora del 
                    departamento de Estadística. Su trabajo se centra en el desarrollo y la aplicación de métodos estadísticos 
                    para comprender los sistemas biológicos.
                </p>
                <img src="assets/img/one-minute/Liliana.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Wendy González</span><br> 
                    Wendy es científica del CBSM, en la Universidad de Talca, donde también es profesora del
                    Departamento de Bioinformática. Su trabajo se centra en el desarrollo de fármacos que se unen a más de
                    una proteína.
                </p>
                <img src="assets/img/one-minute/Wendy.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Cristina Marino Buslje</span><br> 
                    Cristina es científica de la Fundación Instituto Leloir, en Buenos Aires, Argentina. Fundador
                    de la Asociación Argentina de Bioinformática y Biología Computacional.
                </p>
                <img src="assets/img/one-minute/Cristina.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text"> Carolina Torres</span><br> 
                    Carolina es investigadora del CONICET y profesora de Virología de la Universidad de Buenos Aires,
                    en Argentina. Su trabajo se centra en el estudio de la evolución viral, investigando la diversificación de
                    patrones y su relación con factores biológicos, clínicos, ecológicos e históricos.
                </p>
                <img src="assets/img/one-minute/Carolina.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Pilar Cossio</span><br> 
                    Pilar es Doctora en Física y Química de Sistemas Biológicos, con Postdoctorados en el grupo Max Planck Tandem y NIH. 
                    Es profesora de la Universidad de Antioquia.
                </p>
                <img src="assets/img/one-minute/Pilar.png">
            </div>
            <div>
                <p>
                    <span class="highlighted-text">Marisa Fabiana Nicolás</span><br> 
                    Marisa es científica del Laboratorio Nacional de Computación Científica, en Petrópolis, Brasil.
                    Su trabajo implica la secuenciación de los genomas bacterianos y la investigación del metabolismo y regulación de
                    redes de genes relacionados con la resistencia a antibioticos.
                </p>
                <img src="assets/img/one-minute/Marisa.png">
            </div>
        </div>
    </section>

</section>`
}

window.onload = function() {
    renderOneMinuteSection()
    if(localStorage.getItem("Lang") === "ES"){
        renderSpanishNavBar();
        renderSpanishOneMinute();
    } else if (localStorage.getItem("Lang") === "PT"){
        renderPortugueseNavBar();
        renderPortugueseOneMinute();        
    }   
}

portugueseButton.addEventListener('click', () => {
    languageCheck("PT");
    renderPortugueseNavBar();
    renderPortugueseOneMinute();
});

spanishButton.addEventListener('click', () => {
    languageCheck("ES");
    renderSpanishNavBar();
    renderSpanishOneMinute();
});