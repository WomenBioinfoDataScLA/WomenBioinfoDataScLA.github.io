const upcomingTitle =  document.getElementById('upcoming-title');
const upcomingText = document.getElementById('upcoming-text');
const termsTitle =  document.getElementById('terms-conditions-title');
const termsText =  document.getElementById('terms-conditions-text');


function renderPortugueseCamp() {  
    upcomingTitle.innerHTML = "Próximo Camp";
    termsTitle.innerHTML = "Termos e Condições"
    upcomingText.innerHTML=`
    <p>O <span class="highlighted-text">WBDS LA Camp</span> é um treinamento intensivo gratuito para cientistas
    em início de carreira, estudantes de graduação e pós-graduação com interesse em aprender Bioinformática e
    Ciência de Dados do zero.</p>
    <a href="#" target="_blank" class="button">Registre-se</a>`
    termsText.innerHTML=`
    <p>Com o objetivo de reduzir a disparidade de gênero nas áreas de Bioinformática e Ciência de Dados, o <a href="#" target="_blank"><span class="highlighted-text">1º WBDS LA Camp</span></a> "Introdução a Bioinformática and Ciência de Dados" está sendo organizado pelo WBDS LA.
    Este evento visa oferecer uma capacitação que forneça as ferramentas necessárias as pessoas participantes darem os primeiros passos nas áreas mencionadas.
    Para cumprir este objetivo, o WBDS LA Camp não terá custo para quem participar (serão concedidas bolsas de 100% do custo do curso) 
    e será virtual. Todas as aulas serão assíncronas, mas serão oferecidas reuniões de tutoria pré-agendadas em todas as unidades.</p>
    <p> Leia os Termos e Condições completos em 
        <a href="https://docs.google.com/document/d/1K57RxiPqX2LhfBSDZ_ROTMAJzbu4lL3LJw5N4qX9KSE/edit?usp=sharing" target="_blank"><span class="highlighted-text">Espanhol</span></a> ou em 
        <a href="https://docs.google.com/document/d/1mj_7qkDIGC7dUAHPUG4f0O9uGLwwB147J3njoC83gBE/edit?usp=sharing" target="_blank"><span class="highlighted-text">Português</span></a>.
    </p>`
}

function renderSpanishCamp() {  
    upcomingTitle.innerHTML = "Próximo Camp";
    termsTitle.innerHTML = "Términos y Condiciones"
    upcomingText.innerHTML=`
    <p>El <span class="highlighted-text">WBDS LA Camp</span> es un curso de formación intensivo gratuito para 
    investigadores principiantes, estudiantes de pregrado y posgrado interesados ​​en aprender bioinformática y 
    ciencia de datos desde cero.</p >
    <a href="#" target="_blank" class="button">Registrarse</a>`
    termsText.innerHTML=`
    <p>Con el objetivo de reducir la disparidad de género en los campos de la bioinformática y la ciencia de datos, el <a href="#" target="_blank"><span class="highlighted-text">1st WBDS LA Camp</span></a> "Introducción a la bioinformática y la ciencia de datos" está siendo organizado por WBDS LA.
    Este evento tiene como objetivo ofrecer una formación que proporcione las herramientas necesarias para que las personas participantes puedan dar los primeros pasos en las áreas mencionadas.
    Para cumplir con este objetivo, el WBDS LA Camp será gratuito para quienes participen (se otorgarán becas del 100% del costo del curso)
    y será virtual. Todas las clases serán asincrónicas, pero se ofrecerán reuniones de tutoría programadas previamente en todas las unidades.</p>
    <p> Lea los Términos y Condiciones completos en
        <a href="https://docs.google.com/document/d/1K57RxiPqX2LhfBSDZ_ROTMAJzbu4lL3LJw5N4qX9KSE/edit?usp=sharing" target="_blank"><span class="highlighted-text">Español</span></a> o en
        <a href="https://docs.google.com/document/d/1mj_7qkDIGC7dUAHPUG4f0O9uGLwwB147J3njoC83gBE/edit?usp=sharing" target="_blank"><span class="highlighted-text">Portugués</span></a>.
    </p>`
}


portugueseButton.addEventListener('click', () => {
    languageCheck("PT");
    renderPortugueseNavBar();
    renderPortugueseCamp();
});

spanishButton.addEventListener('click', () => {
    languageCheck("ES");
    renderSpanishNavBar();
    renderSpanishCamp();
});