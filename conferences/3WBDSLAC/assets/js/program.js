const dayOneButton = document.getElementById('dayone');
const dayTwoButton = $('#daytwo');
const dayThreeButton = $('#daythree');
const dayFourButton = $('#dayfour');
const programTables = $('#program-tables');


function renderProgramSection() {
    const programSectionContent = $(`
    <table id="table-dayone" class="table_program">
        <col style="width: 20vw">
        <col style="width: 10vw">
        <col style="width: 70vw">
        <thead>
        </thead>
        <tbody>
            <tr class="prog-tracks">
            <td colspan="3"><strong>20th September: </strong> Rosalind Franklin's Day - Nucleic Acids
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"><strong>Time Zone: GMT-3 </strong>
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"> 
            </td>
            </tr>
            <tr>
                <td>11:00 - 11:30</td>
                <td>Keynote Speaker</td>
                <td>Transcriptomic immune cell states and how they influence genetic cis regulatory effects<br><br><b class="speakers-names">Maria Gutierrez-Arcelus (MX)</b></td>
            </tr>
            <tr>
                <td rowspan="3">11:30 - 12:30</td>
                <td rowspan="3">Lightning talks</td>
                <td>Genomic differentiation of two Carménère clones cultivated in Chile<br><br><b class="speakers-names">Daniela Araya-Ortega (CL)</b></td>
            </tr>
            <tr>
                <td>Study of the variation of the acetylation levels of H3K27 and transcriptional changes associated with CRE elements in the R 6/2 murine model of Huntington’s disease<br><br><b class="speakers-names">Sandra Arancibia-Opazo (CL)</b></td>
            </tr>
            <tr>
                <td>Integrated Meta-Analysis of transcriptome identifies potential therapeutic targets in patients with Brain Metastasis from Lung Adenocarcinoma<br><br><b class="speakers-names">Vanessa Souza (BR)</b></td>
            </tr>
            <tr>
                <td>12:30 - 13:20</td>
                <td colspan="2">LUNCH</td>
            </tr>
            <tr>
                <td rowspan="3">13:20 - 14:20</td>
                <td rowspan="3">Lightning talks</td>
                <td>Metagenomics of sedimentary prokaryotes through a salinity gradient in the Colombian Pacific<br><br><b class="speakers-names">Alejandra Gil-Ordóñez (CO)</b></td>
            </tr>
            <tr>
                <td>Detection of mutations associated with bedaquiline resistance in Mycobacterium tuberculosis in Latin American countries<br><br><b class="speakers-names">Andrea Ross Orozco (MX)</b></td>
            </tr>
            <tr>
                <td>Evolutive Islands: the comparative genomics of yeast for ethanol production in Brazil<br><br><b class="speakers-names">Natalia Coutuouné (BR)</b></td>
            </tr>
            <tr>
                <td>14:20 - 14:50</td>
                <td>Keynote Speaker</td>
                <td> In-silico methods for non-coding RNA analysis<br><br><b class="speakers-names">Maria Emilia Walter (BR)</b></td>
            </tr>
            <tr >
                <td colspan="3">
                <strong>Workshops</strong>
                </td>
            </tr>
            <tr >
                <td colspan="3">
                <a href="https://atgenomics.com/" target="_blank"><img src="assets/img/logos/atg.png" alt="Atg" id="atg"></a>
                <a href="https://www.ensembl.org/index.html" target="_blank"><img src="assets/img/logos/ensembl.png" alt="Ensembl" id="atg"></a>
                </td>
            </tr>
        </tbody>
    </table>

    <table id="table-daytwo" class="disable table_program">
        <col style="width: 15vw">
        <col style="width: 10vw">
        <col style="width: 75vw">
        <thead>
        </thead>
        <tbody>
            <tr class="prog-tracks">
            <td colspan="3"><strong>21st September: </strong>Margaret Dayhoff's Day - Proteins</td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"><strong>Time Zone: GMT-3 </strong>
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"> 
            </td>
            </tr>
            <tr>
            <td>11:00 - 11:30</td>
            <td>Keynote Speaker</td>
            <td>Hybrid methods for  Atomic level modeling of macromolecular complexes based on  Cryo-Electron Microscopy, and determination of their conformational dynamics and stability<br><br><b class="speakers-names">Ana Lígia Scott (BR)</b></td>
            </tr>
            <tr>
                <td rowspan="3">11:30 - 12:30</td>
                <td rowspan="3">Lightning talks</td>
                <td>Molecular simulations and virtual screening to investigate the structure and binding sites of the Influenza A virus Nuclear Export Protein<br><br><b class="speakers-names">Hershna Patel (UK)</b></td>
            </tr>
            <tr>
                <td>In Silico analysis of the impact of pathogenic variants in the interaction of a natural substrate and a synthetic substrate with the human alfa-L-iduronidase<br><br><b class="speakers-names">Darinka Gutiérrez (MX)</b></td>
            </tr>
            <tr>
                <td>Design of inhibitory peptides based on molecular modeling of the TRPM4-KCTD5 interaction<br><br><b class="speakers-names">Javiera Baeza (CL)</b></td>
            </tr>
            <tr>
                <td>12:30 - 13:20 </td>
                <td colspan="2">LUNCH</td>
            </tr>
            <tr>
                <td rowspan="3">13:20 - 14:20</td>
                <td rowspan="3">Lightning talks</td>
                <td>Lipid fingerprint in chronic viral infections: learning from simulations of the viroporin protein of Hepatitis C Virus (HCV)<br><br><b class="speakers-names"> Viviana Monje-Galvan (US)</b></td>
            </tr>
            <tr>
                <td>CaviDB: a database of proteins cavities features for structure-based drug design<br><br><b class="speakers-names">Ana Julia Velez Rueda (AR)</b></td>
            </tr>
            <tr>
                <td>Graph Theory for Molecular Dynamics simulations<br><br><b class="speakers-names">Sana Bougueroua (FR)</b></td>
            </tr>
            <tr>
                <td>14:20 - 14:50</td>
                <td>Keynote Speaker</td>
                <td><b class="speakers-names">Nuria E. Campillo (ES) - CANCELLED</b></td>
            </tr>
            <tr >
                <td colspan="3">
                <strong>Workshops</strong>
                </td>
            </tr>
            <tr >
                <td colspan="3">
                <a href="http://pfam.xfam.org/" target="_blank"><img src="assets/img/logos/pfam.jpg" alt="Pfam" id="atg"></a>
                </td>
            </tr>
        </tbody>
    </table>

    <table id="table-daythree" class="disable table_program">
        <col style="width: 15vw">
        <col style="width: 10vw">
        <col style="width: 75vw">
        <thead>
        </thead>
        <tbody>
            <tr class="prog-tracks">
            <td colspan="3"><strong>22nd September:</strong> Margaret Hamilton's Day - Data Science</td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"><strong>Time Zone: GMT-3 </strong>
            </td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"> 
            </td>
            </tr>
            <tr>
            <td>11:00 - 11:30</td>
            <td>Keynote Speaker</td>
            <td><b class="speakers-names">Margarita Sordo (MX)</b></td>
            </tr>
            <tr>
                <td rowspan="3">11:30 - 12:30</td>
                <td rowspan="3">Lightning talks</td>
                <td>Liponium: An algorithm for identification of discrete traits associated with Mycobacterium tuberculosis hetero-resistance and virulence<br><br><b class="speakers-names">Vitoria Zanon Gomes (BR)</b></td>
            </tr>
            <tr>
                <td>A stemness score for single-cell RNA sequencing data using a protein-protein network as a scaffold<br><br><b class="speakers-names">Daniela Senra (AR)</b></td>
            </tr>
            <tr>
                <td>Feature extraction based on Complex Networks for classification of genomic sequences<br><br><b class="speakers-names">Fabiana Rodrigues de Góes (BR)</b></td>
            </tr>
        <tr>
            <td>12:30 - 13:20 </td>
            <td colspan="2">LUNCH</td>
        </tr>
        <tr>
            <td rowspan="3">13:20 - 14:20</td>
            <td rowspan="3">Lightning talks</td>
            <td>Virtual screening applied to search for new antiepileptics drugs active in the PTZ kindling model<br><br><b class="speakers-names">Estefanía Peralta (AR)</b></td>
        </tr>
        <tr>
            <td>Anomaly Detection in Image Streams with Explainable AI<br><br><b class="speakers-names">Nethmi Wijesinghe (LK)</b></td>
        </tr>
        <tr>
            <td>Calibration and implementation of a predictive computational harvest model for cacao quality improvement<br><br><b class="speakers-names">Mariana S. Candamil-Cortés (CO)</b></td>
        </tr>
        <tr>
            <td>14:20 - 14:50</td>
            <td>Keynote Speaker</td>
            <td>MicroAgrobiome - a comparative metagenomics platform applied to the crop microbiome <br><br> <b class="speakers-names">Nelly Sélem Mojica (MX)</b></td>
        </tr>
        <tr>
            <td colspan="3">
            <strong>Workshops</strong>
            </td>
        </tr>
        <tr >
            <td colspan="3">
            <a href="https://www.wintergenomics.com/" target="_blank"><img src="assets/img/logos/wgyt.png" alt="wintergenomics" id="atg"></a>
            <a href="#"><img src="assets/img/logos/betterlab.png" alt="BetterLab" id="atg"></a>
            </td>
        </tr>
            </tbody>
    </table>


    <table id="table-dayfour" class="disable table_program">
        <col style="width: 15vw">
        <col style="width: 10vw">
        <col style="width: 75vw">
        <thead>
        </thead>
        <tbody>
            <tr class="prog-tracks">
                <td colspan="3"><strong>23rd September: </strong> Open Data Day</td>
            </tr>
            <tr class="prog-tracks">
            <td colspan="3"><strong>Time Zone: GMT-3 </strong>
            </td>
            </tr>
            <tr class="prog-tracks">
                <td colspan="3"> 
                </td>
            </tr>
            <tr>
            <td>11:00 - 11:30</td>
            <td>Keynote Speaker</td>
            <td> Data Feminism <br><br> <b class="speakers-names">Catherine D'Ignazio (US)</b></td>
            </tr>
            <tr>
                <td>11:30 - 12:10</td>
                <td colspan="2">Wikimedias Workshops</td>
            </tr>
            <tr>
                <td>13:00 - 15:00 </td>
                <td colspan="2">Editatona</td>
            </tr>
            <tr>
                <td>16:30 - 18:30</td>
                <td colspan="2">Gender & Science Conversatory</td>
            </tr>
            <tr class="prog-tracks" >
                <td colspan="3">
                    <a href="https://wikimedia.org.ar/" target="_blank"><img src="assets/img/logos/wiki_arg.png" alt="wikimedia AR" id="wiki-arg"></a>
                    <a href="https://wikimedia.mx/" target="_blank"><img src="assets/img/logos/wiki_mx.png" alt="wikimedia MX" id="wiki-mx"></a>
                    <a href="https://wmnobrasil.org/" target="_blank"><img src="assets/img/logos/WikiBR2.png" alt="wikimedia BR" id="wiki-br"></a>
                    <a href="https://www.datagenero.org/" target="_blank"><img src="assets/img/logos/observatorio.png" alt="data género" id="datagenero"></a>
                </td>               
            </tr>
        </tbody>
    </table>
    `);


    programSectionContent.appendTo(programTables);

    const tableOne = $('#table-dayone');
    const tableTwo = $('#table-daytwo');
    const tableThree = $('#table-daythree');
    const tableFour = $('#table-dayfour');

    dayOneButton.addEventListener('click', () => {
        $(dayOneButton).addClass('orange-element');
        $(dayTwoButton).removeClass('orange-element');
        $(dayThreeButton).removeClass('orange-element');
        $(dayFourButton).removeClass('orange-element');
        tableOne.removeClass("disable");
        tableTwo.addClass("disable");
        tableThree.addClass("disable");
        tableFour.addClass("disable");
    });


    dayTwoButton.on('click', () => {
        $(dayTwoButton).addClass('orange-element');
        $(dayOneButton).removeClass('orange-element');
        $(dayThreeButton).removeClass('orange-element');
        $(dayFourButton).removeClass('orange-element');
        tableOne.addClass("disable");
        tableTwo.removeClass("disable");
        tableThree.addClass("disable");
        tableFour.addClass("disable");
    });    

    dayThreeButton.on('click', () => {
        $(dayThreeButton).addClass('orange-element');
        $(dayOneButton).removeClass('orange-element');
        $(dayTwoButton).removeClass('orange-element');
        $(dayFourButton).removeClass('orange-element');
        tableOne.addClass("disable");
        tableThree.removeClass("disable");
        tableFour.addClass("disable");
        tableTwo.addClass("disable");
    });

    dayFourButton.on('click', () => {
        $(dayFourButton).addClass('orange-element');
        $(dayOneButton).removeClass('orange-element');
        $(dayTwoButton).removeClass('orange-element');
        $(dayThreeButton).removeClass('orange-element');
        tableFour.removeClass("disable");
        tableThree.addClass("disable");
        tableTwo.addClass("disable");
        tableOne.addClass("disable");
    });
}

renderProgramSection()