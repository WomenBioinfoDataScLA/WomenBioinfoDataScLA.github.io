const upcomingTitle =  document.getElementById('upcoming-title');
const upcomingText = document.getElementById('upcoming-text');
const termsTitle =  document.getElementById('terms-conditions-title');
const termsText =  document.getElementById('terms-conditions-text');


function renderPortugueseCamp() {  
    upcomingTitle.innerHTML = "Próximo Camp";
    termsTitle.innerHTML = "Termos e Condições"
    upcomingText.innerHTML=`
    <p>O <span class="highlighted-text">WBDS LA Camp</span> é um treinamento intensivo gratuito para estudantes de
     graduação e pós-graduação com interesse em aprender Bioinformática e
    Ciência de Dados do zero.</p>
    <a href="#" target="_blank" class="button">Registre-se</a>`
    termsText.innerHTML=`
    <p>Com o objetivo de reduzir a disparidade de gênero nas áreas de Bioinformática e Ciência de Dados, o <a href="#" target="_blank"><span class="highlighted-text">1º WBDS LA Camp</span></a> "Introdução a Bioinformática and Ciência de Dados" está sendo organizado pelo WBDS LA.
    Este evento tem o objetivo de oferecer uma formação que proporcione as ferramentas necessárias para que as pessoas participantes 
    possam dar os primeiros passos nas referidas áreas.
    O WBDS LA Camp será virtual e com aulas assíncronas, mas serão oferecidas reuniões de tutoria pré-agendadas em 
    todas as unidades. Serão concedidas bolsas de 100% para participação no evento.</p>
    <p> Para saber mais sobre os Termos e Condições clique  
        <a href="https://docs.google.com/document/d/1mj_7qkDIGC7dUAHPUG4f0O9uGLwwB147J3njoC83gBE/edit?usp=sharing" target="_blank"><span class="highlighted-text">aqui</span></a>.
    </p>`
}

function renderSpanishCamp() {  
    upcomingTitle.innerHTML = "Próximo Camp";
    termsTitle.innerHTML = "Términos y Condiciones"
    upcomingText.innerHTML=`
    <p>El <span class="highlighted-text">WBDS LA Camp</span> es un curso de formación intensivo gratuito para 
    estudiantes de grado y posgrado que tengan interés ​​en aprender bioinformática y 
    ciencia de datos desde cero.</p >
    <a href="#" target="_blank" class="button">Registrarse</a>`
    termsText.innerHTML=`
    <p>Con el objetivo de reducir la disparidad de género en los campos de la bioinformática y la ciencia de datos, 
    el <a href="#" target="_blank"><span class="highlighted-text">1st WBDS LA Camp</span></a> "Introducción a la 
    bioinformática y la ciencia de datos" está siendo organizado por WBDS LA.
    Este evento tiene como objetivo ofrecer una formación que proporcione las herramientas necesarias para que las 
    personas que participen puedan dar los primeros pasos en las áreas antes mencionadas.
    El WBDS LA Camp será virtual y con clases asincrónicas, pero se ofrecerán reuniones de tutoría programadas
    previamente en todas las unidades. Se otorgarán becas del 100% para la participación en el mismo.</p>
    
    <p>Para conocer más sobre los términos y condiciones haz click 
        <a href="https://docs.google.com/document/d/1K57RxiPqX2LhfBSDZ_ROTMAJzbu4lL3LJw5N4qX9KSE/edit?usp=sharing" target="_blank"><span class="highlighted-text">aquí</span></a>.
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