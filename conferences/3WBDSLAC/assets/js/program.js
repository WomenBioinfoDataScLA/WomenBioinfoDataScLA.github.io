
function renderProgramSection() {
    const programSectionContent = $(`
    <table id="table-dayone" class="">
        <thead>
        </thead>
        <tbody>
            <tr  class="prog-tracks">
                <td class="prog-tracks" colspan="3">TRACK: Genomics and Evolution</td>
            </tr>
            <tr>
                <td rowspan="3">11:00 - 12:30</td>
                <td rowspan="3">Invited Speakers<br></br>Chair: Alejandra Medina</td>
                <td>Genomic profiling of melanoma in Mexican patients<br></br><b class="speakers-names">Daniela Robles-Espinoza (Mexico)</b></td>
            </tr>
            <tr>
                <td>Machine learning for *omics data<br></br><b class="speakers-names">Georgina Stegmayer (Argentina)</b></td>
            </tr>
            <tr>
                <td>Microbial complexity in Andean hydrothermal systems<br></br><b class="speakers-names">Sara Cuadros (Chile)<b></td>
            </tr>
            <tr class="breaks">
                <td>12:30 - 13:30</td>
                <td colspan="2">Lunch Break</td>
            </tr>
            <tr  class="breaks">
                <td rowspan="4" >13:30 - 14:50</td>
                <td rowspan="4" >Lightning talks<br></br>Chair: Cristina Marino</td>
                <td>Microbial diversity during different fermentation times of coffee from northern Peru<br></br><b class="speakers-names">Martha Calderon (Peru)<b></td>
            </tr>
            <tr>
                <td>Genetic Drivers of Medulloblastoma Metastasis<br></br><b class="speakers-names">Ana Isabel Castillo Orozco (Canada)</b></td>
            </tr>
            <tr>
                <td>Saccharomyces boulardii CNCM I-745 supplementation modifies the fecal resistome during the Helicobacter pylori eradication therapy<br></br><b class="speakers-names">Sara G. Cifuentes (Ecuador)<b></td>
            </tr>
            <tr>
                <td>“TMBpred”: Web server for the prediction of the tumor mutation burden as an immune response biomarker in 14 tumor types<br></br><b class="speakers-names">Agustina Sofia Torres (Argentina)</b></td>
            </tr>
            <tr class="breaks">
                <td>14:50 - 15:00</td>
                <td colspan="2">Coffee Break</td>
            </tr>
            <tr class="prog-tracks">
                <td colspan="3">ACM-W TRACK:<br>Machine Learning, Data Mining and Big Data Analysis</br></td>
            </tr>
            <tr>
                <td rowspan="3">15:00 - 16:30</td>
                <td rowspan="3">Invited Speakers<br></br>Chair: Gabriela Merino</td>
                <td>Data Science as a Team Sport <br></br><b class="speakers-names">Gabriela de Queiroz (Brazil)</b></td>
            </tr>
            <tr>
                <td>Wonder woman: Fostering innovation through collaboration<br></br><b class="speakers-names">Alejandra Garcia (Chile)</b></td>
            </tr>
            <tr>
                <td>State of university learning with the use of Big Data<br></br><b class="speakers-names">Patricia Acosta-Vargas (Ecuador)</b></td>
            </tr>
            <tr  class="breaks">
                <td >16:30 - 16:50</td>
                <td >Lightning talks<br></br>Chair: Gabriela Merino</td>
                <td >Redefining Bronchopulmonary Dysplasia by Machine Learning discovery of lung disease trajectories in premature infants<br></br><b class="speakers-names">Florencia Nowogrodzki (Argentina)</b></td>
            </tr>
            <tr class="breaks">
                <td>16:50 - 17:00</td>
                <td colspan="2">Coffee Break</td>
            </tr>
            <tr class="prog-tracks">
                <td>17:00 - 19:00</td>
                <td colspan="2" ><b class="speakers-names">Gender &amp; Science Conversatory</b></td>
            </tr>
        </tbody>
    </table>

    <table id="table-daytwo" class="disable">
        <thead>
        </thead>
        <tbody>
        <tr class="prog-tracks">
            <td colspan="3">TRACK: Bioinformatics and Diseases</td>
        </tr>
        <tr class="breaks">
            <td>11:00 - 11:40</td>
            <td>Keynote Speaker<br></br>Chair: Cristina Marino</td>
            <td>Computational Enzymology: The Structure, Function and Evolution of Enzymes<br></br><b class="speakers-names">Janet Thornton (England)</b></td>
        </tr>
        <tr>
            <td rowspan="2">11:40 - 12:40</td>
            <td rowspan="2">Invited Speakers<br></br>Chair: Cristina Marino</td>
            <td>Genomic epidemiology analyses during the early pandemic phase of the SARS-CoV-2 epidemic in Brazil and Uruguay<br></br><b class="speakers-names">Daiana Mir (Uruguay)</b></td>
        </tr>
        <tr>
            <td>Advances in human genomics in the Uruguayan scientific context<br></br><b class="speakers-names">Lucia Spangenberg (Uruguay)</b></td>
        </tr>
        <tr class="breaks">
            <td>12:40 - 14:20</td>
            <td colspan="2">Lunch Break</td>
        </tr>
        <tr class="prog-tracks">
            <td colspan="3">TRACK: Chemoinformatics and Drug Discovery</td>
        </tr>
        <tr>
            <td rowspan="3">14:20 - 15:50</td>
            <td rowspan="3">Invited Speakers<br></br>Chair:  Wendy Gonzales</td>
            <td>Articulation of Ligand Based , Structure Based Drug Design and Artificial Intelligence strategies applied to the design of bioactive compounds<br></br><b class="speakers-names">Margot Paulino (Uruguay)</b></td>
        </tr>
        <tr>
            <td>Computational peptide based drug design targeting tumor-associated macrophages<br></br><b class="speakers-names">Eliana Asciutto (Argentina)</b></td>
        </tr>
        <tr>
            <td>Protein-ligand kinetics in drug design: physics-based and data-based approaches for kinetic prediction in kinases<br></br><b class="speakers-names">Ariane Nunes Alves (Brazil)</b></td>
        </tr>
        <tr class="breaks">
            <td>15:50 - 16:10</td>
            <td>Lightning Talk<br></br>Chair:  Wendy Gonzales</td>
            <td>Reconciling Multiple Connectivity Scores for Drug Repurposing<br></br><b class="speakers-names">Kewalin Samart (USA)</b></td>
        </tr>
        <tr class="breaks">
            <td>16:10 - 16:30</td>
            <td colspan="2">Coffee Break</td>
        </tr>
        <tr class="prog-tracks">
            <td class="prog-tracks" colspan="3">TRACK: Biomolecular Simulations, Structural Bioinformatics &amp; Systems Biology</td>
        </tr>
        <tr>
            <td rowspan="3">16:30 - 18:00</td>
            <td rowspan="3">Invited Speakers<br></br>Chair: Ariela Vergara</td>
            <td>Polimeric drug nanocarriers: insights from simulations<br></br><b class="speakers-names">Monica Andrea Pickholz (Argentina)</b></td>
        </tr>
        <tr>
            <td>Understanding Drugs and Diseases by System Biology<br></br><b class="speakers-names">Janneth González (Colombia)</b></td>
        </tr>
        <tr>
            <td>In silico strategies, key methods for drug discovery<br></br><b class="speakers-names">Maria Luisa Serrano (Venezuela)</b></td>
        </tr>
        <tr>
            <td rowspan="3">18:00 - 19:00</td>
            <td rowspan="3">Lightning Talks<br></br>Chair: Cristina Marino</td>
            <td>Comprehensive virtual screening of 4.8k flavonoids reveals novel insights into allosteric inhibition of SARS-CoV-2 MPRO<br></br><b class="speakers-names">Ana Paula Vargas Ruiz (Peru)</b></td>
        </tr>
        <tr>
            <td>Effect of the CER[NP]:CER[AP] composition on the structural properties of a model the lipid matrix of the stratum corneum of the human epidermis<br></br><b class="speakers-names">Natalia Rivero Arenas (Colombia)</b></td>
        </tr>   
        <tr>
            <td>Shedding light on the structure-function of rice Na+/K+ transporter OsHKT2;2<br></br><b class="speakers-names">Janin Riedelsberger (Chile)</br></td>
        </tr> 
        <tr class="prog-tracks">
        <td>19:00 - 19:30</td>
        <td colspan="2" ><b class="speakers-names">Award Nominations</b></td>
        </tr>
        </tbody>
        </table>

    <div id="table-daythree" class="disable">
        <table>
        <thead>
        </thead>
        <tbody>
        <tr class="prog-tracks">
        <td class="prog-tracks" colspan="3">2WBDS Workshops</td>
        </tr>
        <tr>
        <td>9:00 - 13:00</td>
        <td>Metagenomics in the Study of Microbial Communities</td>
        </tr>
        <tr>
        <td>11:00 - 15:00</td>
        <td>Phylogenetic Orthology Inference for Comparative Genomics</td>
        </tr>
        <tr>
        <td>14:00 - 19:00</td>
        <td>Exploring Biological Data with Pandas</td>
        </tr>
        <tr>
        <td>16:00 - 19:00</td>
        <td>Converting Jupyter notebooks to reproducible python packages using Spyder</td>
        </tr>
        </tbody>
        </table>
    </div>
    `);


    programSectionContent.appendTo(programTables);

    const tableOne = $('#table-dayone');
    const tableTwo = $('#table-daytwo');
    const tableThree = $('#table-daythree');

    dayOneButton.addEventListener('click', () => {
        $(dayOneButton).addClass('orange-element');
        $(dayTwoButton).removeClass('orange-element');
        $(dayThreeButton).removeClass('orange-element');
        tableOne.removeClass("disable");
        tableTwo.addClass("disable");
        tableThree.addClass("disable");
        workshopsSection.addClass("disable");
    });

    dayTwoButton.on('click', () => {
        $(dayTwoButton).addClass('orange-element');
        $(dayOneButton).removeClass('orange-element');
        $(dayThreeButton).removeClass('orange-element');
        tableOne.addClass("disable");
        tableTwo.removeClass("disable");
        tableThree.addClass("disable");
        workshopsSection.addClass("disable");
    });

    dayThreeButton.on('click', () => {
        $(dayThreeButton).addClass('orange-element');
        $(dayOneButton).removeClass('orange-element');
        $(dayTwoButton).removeClass('orange-element');
        tableOne.addClass("disable");
        tableThree.removeClass("disable");
        tableTwo.addClass("disable");
    });
}
