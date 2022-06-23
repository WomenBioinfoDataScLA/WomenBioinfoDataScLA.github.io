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
            <td colspan="3"><strong>20th September: </strong> Rosalind Franklin's Day - Nucleic Acids </td>
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
                <td>11:30 - 12:30</td>
                <td colspan="2">Lightning talks</td>
            </tr>
            <tr>
                <td>12:30 - 13:20</td>
                <td colspan="2">LUNCH</td>
            </tr>
            <tr>
                <td>13:20 - 14:20</td>
                <td colspan="2">Lightning talks</td>
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
            <td colspan="3"> 
            </td>
            </tr>
            <tr>
            <td>11:00 - 11:30</td>
            <td>Keynote Speaker</td>
            <td>Hybrid methods for  Atomic level modeling of macromolecular complexes based on  Cryo-Electron Microscopy, and determination of their conformational dynamics and stability<br><br><b class="speakers-names">Ana Lígia Scott (BR)</b></td>
            </tr>
            <tr>
                <td>11:30 - 12:30</td>
                <td colspan="2">Lightning talks</td>
            </tr>
            <tr>
                <td>12:30 - 13:20 </td>
                <td colspan="2">LUNCH</td>
            </tr>
            <tr>
                <td>13:20 - 14:20</td>
                <td colspan="2">Lightning talks</td>
            </tr>
            <tr>
                <td>14:20 - 14:50</td>
                <td>Keynote Speaker</td>
                <td><b class="speakers-names">Nuria E. Campillo (ES)</b></td>
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
            <td colspan="3"> 
            </td>
            </tr>
            <tr>
            <td>11:00 - 11:30</td>
            <td>Keynote Speaker</td>
            <td>MicroAgrobiome - a comparative metagenomics platform applied to the crop microbiome <br><br> <b class="speakers-names">Nelly Sélem Mojica (MX)</b></td>
            </tr>
            <tr>
            <td>11:30 - 12:30</td>
            <td colspan="2">Lightning talks</td>
        </tr>
        <tr>
            <td>12:30 - 13:20 </td>
            <td colspan="2">LUNCH</td>
        </tr>
        <tr>
            <td>13:20 - 14:20</td>
            <td colspan="2">Lightning talks</td>
        </tr>
        <tr>
            <td>14:20 - 14:50</td>
            <td>Keynote Speaker</td>
            <td><b class="speakers-names">Margarita Sordo (MX)</b></td>
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
                <td colspan="2">Wikiton</td>
            </tr>
            <tr>
                <td>16:30 - 18:30</td>
                <td colspan="2">Gender & Science Conversatory</td>
            </tr>
            <tr class="prog-tracks"><td></td></tr>
            <tr class="prog-tracks">
                <td colspan="3">
                    <a href="https://wikimedia.org.ar/" target="_blank"><img src="assets/img/logos/wiki_arg.png" alt="wikimedia" id="wiki-arg"></a>
                    <a href="https://wikimedia.mx/" target="_blank"><img src="assets/img/logos/wiki_mx.png" alt="wikimedia" id="wiki-mx"></a>
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