const dayOneButton = document.getElementById('dayone');
const dayTwoButton = $('#daytwo');
const dayThreeButton = $('#daythree');
const dayFourButton = $('#dayfour');
const programTables = $('#program-tables');


function renderProgramSection() {
    const programSectionContent = $(`
    <table id="table-dayone" class="">
        <thead>
        </thead>
        <tbody>
        <tr class="prog-tracks">
        <td class="prog-tracks" colspan="3"> Rosalind Franklin's Day - Nucleic Acids
        </td>
        </tr>
        <td class="prog-tracks" colspan="2"> 
            <strong>20th September</strong>
        </td>
        <td class="prog-tracks" colspan="2">
        </td>
        <tr>
        <td>11:00 - 14:30</td>
        <td> Keynotes and Lightning Talks </td>
        </tr>
        <tr>
        <td>15:00 - 19:00 </td>
        <td>Workshops</td>
        </tbody>
    </table>

    <table id="table-daytwo" class="disable">
        <thead>
        </thead>
        <tbody>
        <tr class="prog-tracks">
            <td class="prog-tracks" colspan="3">Margaret Dayhoff's Day - Proteins</td>
            </tr>
            <td class="prog-tracks" colspan="2"> 
                <strong>21st September</strong>
            </td>
            <tr>
            <td>11:00 - 14:30</td>
            <td> Keynotes and Lightning Talks </td>
            </tr>
            <tr>
            <td>15:00 - 19:00 </td>
            <td>Workshops</td>
        </tbody>
        </table>

    <div id="table-daythree" class="disable">
        <table>
        <thead>
        </thead>
        <tbody>
        <tr class="prog-tracks">
        <td class="prog-tracks" colspan="3">Margaret Hamilton's Day - Data Science</td>
        </tr>
        <td class="prog-tracks" colspan="2"> 
            <strong>22nd September</strong>
        </td>
        <tr>
        <td>11:00 - 14:30</td>
        <td> Keynotes and Lightning Talks </td>
        </tr>
        <tr>
        <td>15:00 - 19:00 </td>
        <td>Workshops</td>
        </tbody>
        </table>
    </div>

    <div id="table-dayfour" class="disable">
        <table>
        <thead>
        </thead>
        <tbody>
        <tr class="prog-tracks">
        <td class="prog-tracks" colspan="3">Open Data Day</td>
        </tr>
        <td class="prog-tracks" colspan="2"> 
            <strong>23rd September</strong>
        </td>
        <tr>
        <td>11:00 - 11:30</td>
        <td> Keynote Talk </td>
        </tr>
        <tr>
        <td>11:30 - 12:10</td>
        <td>Wikimedias Workshops</td>
        </tr>
        <tr>
        <td>13:00 - 15:00 </td>
        <td>Wikiton</td>
        </tr>
        <tr>
        <td>16:30 - 18:30</td>
        <td>Gender & Science Conversatory
        </td>
        </tr>
        </tbody>
        </table>
    </div>
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