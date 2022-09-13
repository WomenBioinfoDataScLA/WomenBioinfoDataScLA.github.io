const posterSection = $('#poster-section');

const genesgenomics =[
    {"number":	186	, "authors": "	Juliana Nascimento da Silva, Cecilia Veronica Nunez and Jacqueline da Silva Batista	", "tittle": "	Using bioinformatics to access the genetic variability of Duroia macrophylla (Rubiaceae) with the screening of 14 molecular markers	", "keywords": "	chloroplast, DNA, sequences	", "poster": "	Silva_0186 - Juliana Silva.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	237	, "authors": "	Carine Linda Moura de Farias, Rodrigo Jardim and Nelson Kotowski	", "tittle": "	Metagenomic analysis on a Brazilian Pantanal Lake	", "keywords": "	metagenomics, pantanal, microbiome, metaWRAP	", "poster": "	Carine_Farias_Poster0237 - Carine Linda Moura de Farias.jpg", "video": "	https://www.youtube.com/embed/9OKi_32eiEo	"},
    {"number":	258	, "authors": "	Borja Gómez, Francisco García-García and Marta R. Hidalgo	", "tittle": "	Review and proposals for methods to summarise and improve the results of functional enrichment analysis in GO	", "keywords": "	Functional enrichment, Gene Ontology, Redundancy of results, Systematic review	", "poster": "	Gomez_Borja_Poster0258 - Borja Gómez.png	", "video": "	https://www.youtube.com/embed/xz4Gt8_qkiI	"},
    {"number":	328	, "authors": "	Glever Alexander Velez Martinez, Wendy Lorena Reyes, Juan Diego Duque Zapata, Jaime Eduardo Muñoz-Florez, Paula Andrea Rugeles Silva and Diana Carolina Lopez Alvarez	", "tittle": "	Taxonomic characterization and ecological differences of soil bacteria in terrestrial ecosystems in Valle del Cauca, Colombia.	", "keywords": "	Terrestrial ecosystem, Metataxonomic, Bacterial ecology, Colombian National Parks	", "poster": "	Velez_Martinez_Poster0328 - Alexander Vélez.png	", "video": "	https://www.youtube.com/embed/gJYfCmloSH0	"},
    {"number":	539	, "authors": "	Paz E. Zuñiga, Vanessa Gonzalez, Claudia Rivera-Mora, Karla Jara-Cornejo, Eliana Bustos and Carlos R. Figueroa	", "tittle": "	Genome-wide identification and bioinformatic characterization of ascorbate peroxidase 1 (APX1) gene in ten species of Fragaria genus.	", "keywords": "	Ascorbate peroxidase 1, Antioxidant enzymes, Fragaria, Strawberry, Genomes	", "poster": "	Zuñiga_Poster0539 - Paz Estefania Zúñiga González.PNG	", "video": "	https://www.youtube.com/embed/qMHGH_lFktw	"},
    {"number":	764	, "authors": "	Juan Diego Duque-Zapata, Glever Alexander Velez, Jaime Eduardo Muñoz-Florez, Diana Lopez-Alvarez and Paula Rugeles	", "tittle": "	Metabarcoding of Soil Fungi from three different ecosystems of the Western Andean ranges in Valle Del Cauca, Colombia	", "keywords": "	Metataxonomic, Fungal Ecology, Next generation sequencing (NGS), Tropical dry forest, Tropical alpine ecosystem	", "poster": "	Duque_Zapata_poster0764 - Juan Diego Duque.png	", "video": "	https://www.youtube.com/embed/b6gQTIovvkw	"},
    {"number":	772	, "authors": "	Maria Cristina Aspromonte, Emanuela Leonardi, Alessio Del Conte, Leoanrdo Pastena Legori, Damiano Piovesan, Silvio E. Tosatto and Alessandra Murgia	", "tittle": "	ID-Challenge: Predict patients’ clinical descriptions and pathogenic variants from gene panel sequences	", "keywords": "	CAGI, NGS, Neurodevelopmental Disorders, gene-panel	", "poster": "	Aspromonte_Poster0772 - maria cristina aspromonte.png	", "video": "	https://www.youtube.com/embed/fx3FMVCjfes	"},
    {"number":	926	, "authors": "	Iliana Julieta Cortese, Andrea Liliana Onetto, Gustavo Ángel Bich, María Lorena Castrillo and Margarita Ester Laczeski	", "tittle": "	Prediction of genes associated with plant growth promotion in Bacillus spp. genomes	", "keywords": "	Plant growth-promoting rhizobacteria, Bacillus altitudinis, PGP genes, Biofertilizers, Genes mapping	", "poster": "	Cortese_Poster0926 - Julieta Cortese.png	", "video": "	https://www.youtube.com/embed/gj9u75Si8Xc	"},
    {"number":	1636	, "authors": "	Paula Klotz Brandão Rodrigues, Luis Angel Chicoma Rojas, Cinara Ramos Sales and Eliana Gertrudes de Macedo Lemos	", "tittle": "	Identification of genes with biocontrol activity and comparative genomics between isolated JAB01 and related species	", "keywords": "	Genomics, Biological control, Phytopathogens	", "poster": "	Klotz_Brandão_Rodrigues_Poster1636 - Paula Brandao.png	", "video": "	https://www.youtube.com/embed/RXltCniPJcQ	"},
    {"number":	1902	, "authors": "	Liliane Conteville, Bruno Gabriel Andrade, Adhemar Zerlotini, Gerson Mourão, Luiz Lehmann Coutinho and Luciana de Almeida Regitano	", "tittle": "	Carbohydrate active enzymes in metagenome-assembled genomes from ruminal and stool microbiomes of nelore cattle	", "keywords": "	Metagenome-Assembled Genomes, Rumen Microbiome, Stool Microbiome, Nelore, Metagenomics	", "poster": "	Conteville_poster1902 - WBDS Workshops.png	", "video": "	https://www.youtube.com/embed/95gqq9M9luA	"},
    {"number":	2450	, "authors": "	Maria Lorena Castrillo, Gustavo Ángel Bich, Laura Lidia Villalba, Mario Carlos Nazareno Saparrat and Pedro Dario Zapata	", "tittle": "	Genes coding xylanase in the Trichoderma koningiopsis POS7 isolate: detection and annotation.	", "keywords": "	enzymes, bioinformatic tools, Trichoderma	", "poster": "	Castrillo.poster - Lorena Castrillo.png	", "video": "	https://www.youtube.com/embed/lmn5cnIfB38	"},
    {"number":	3726	, "authors": "	Juliana Rodrigues, Nathalia de Setta and Nicolas Bellora	", "tittle": "	Genetic diversity of transposable elements and their impact on the plant functional genome: is there an association between insertion patterns and gene functions	", "keywords": "	Genomic evolution, Transposable element, Metabolic pathways, Adaptability	", "poster": "	Melo_Rodrigues_Poster3726 - Juliana Melo.png	", "video": "	https://www.youtube.com/embed/FAL5UX01R3Y	"},
    {"number":	4047	, "authors": "	Renata Cavalcante, Sidney dos Santos, Jorge de Souza and Tetsu Sakamoto	", "tittle": "	Sequence data mining of genome sex-specific assembly of Arapaima gigas (Pirarucu) for identifying sex-linked regions.	", "keywords": "	Comparative Genomics, Sexual Differentiation, Osteoglossiformes	", "poster": "	Cavalcante_Renata_Poster4047 - Renata Cavalcante.png	", "video": "	https://www.youtube.com/embed/8FAtussUELE	"},
    {"number":	4337	, "authors": "	Wendy Lorena Reyes Ardila, Jaime Eduardo Muñoz Florez, Diana Carolina López Álvarez and Glever Alexander Vélez Martínez	", "tittle": "	Metataxonomic analysis of bacteria community in soils of the western mountain range on an altitudinal gradient of Valle del Cauca, Colombia	", "keywords": "	Bacterial diversity, Ecology, Soil, Forestry	", "poster": "	Reyes_Ardila_Poster4337 - Wendy Lorena Reyes Ardila.png	", "video": "	https://www.youtube.com/embed/l_PC8hJcBuU	"},
    {"number":	4465	, "authors": "	Melanie Abril Avila Rodriguez and Christian Solis Calero	", "tittle": "	Comparative genomics and structural analysis of Limosilactobacillus reuteri gene regulation for glycerol-utilization	", "keywords": "	Limosilactobacillus reuteri, 1 3-propanediol, 3-Hydroxypropionaldehyde, pdu operon, PocR protein	", "poster": "	Avila_Rodriguez_Poster4465 - Melanie Avila Rodriguez.png	", "video": "	https://www.youtube.com/embed/O2X24Kg80vU	"},
    {"number":	5044	, "authors": "	Silvia Sanchez, Ulises Juarez, Julieta Dominguez, Nelly Altamirano, Patricia Grether, Dora Gilda Mayen, Alessandra Carnevale, Emiy Yokoyama, Angelica Martinez-Hernandez, Sara Frias and Leda Torres	", "tittle": "	Frequent copy number variants found in a group of Mexican-Mestizo individuals.	", "keywords": "	Copy number variants, Mexican population, CRMA v2, CN/SNP Array, GEO	", "poster": "	Sanchez_Silvia_poster5044 - Silvia Sanchez.png	", "video": "	https://www.youtube.com/embed/3ibfJKu0wC8	"},
    {"number":	6569	, "authors": "	Daniela Araya-Ortega, Felipe Gainza-Cortés and Gonzalo Riadi	", "tittle": "	Genomic differentiation of two Carménère clones cultivated in Chile	", "keywords": "	Structural variants, Vitis vinifera, Clonal selections, Genomics, Bioinformatics	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	6865	, "authors": "	María Fernanda Mirón Toruño, Israel Aguilar Ordoñez and Enrique Morett Sánchez	", "tittle": "	A bioinformatics tool for detecting signatures of selection in whole-genome data with Population Branch Statistic (PBS) and integrated Haplotype Score (iHS)	", "keywords": "	Bioinformatics, Population Genomics, Signatures of Selection, Nextflow pipeline	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	6984	, "authors": "	Virginia Marcelino, Hayde Saracho and Daniel German Kurth	", "tittle": "	Taxonomic analysis of white gypsum-halite precipitations from Laguna Verde	", "keywords": "	Taxonomy, Metagenomic, microbial mats	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	7927	, "authors": "	Natalia Coutuouné, Sheila Nagamatsu, Juliana Velasco, Marcelo Falsarella Carazolle and Juliana José	", "tittle": "	Evolutive Islands: the comparative genomics of yeast for ethanol production in Brazil	", "keywords": "	Ethanol production, Comparative genomics, Saccharomyces cereviseae, Stress	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	8813	, "authors": "	Florencia Ivonne Rotharmel, Gustavo Angel Bich, Laura Lidia Villalba, Pedro Dario Zapata and Maria Lorena Castrillo	", "tittle": "	In silico prospection of the swollenin gene in the genome of Trichoderma koningiopsis Pos7	", "keywords": "	Gene mining, Biological control, Biostimulant, Fungi	", "poster": "	Rotharmel 8813 - Florencia Rotharmel.png	", "video": "	https://www.youtube.com/embed/u5JF5BjHD7Y	"},
    {"number":	8901	, "authors": "	Esmeralda Escobar Muciño, José Rivera Chávez and Jesús Israel Morales Jiménez	", "tittle": "	Bioinformatic search and in silico study of the Diels alderase and transcription activators related to the synthesis of cuautepestalorin in the genome assembly of Pestalotiopsis sp. IQ-011	", "keywords": "	Cuatepestalorin, Diels alderase, Genome assembly, Molecular docking, Pestalotiopsis sp. IQ-011.	", "poster": "	Escobar_Muciño_Esmeralda_8901 - Esmeralda Escobar Muciño.png	", "video": "	https://www.youtube.com/embed/2BX9d2e6u1k	"},
    {"number":	9149	, "authors": "	Alejandra Gil-Ordóñez, Diana López-Álvarez and Andrés Castillo	", "tittle": "	Metagenomics of sedimentary prokaryotes through a salinity gradient in the Colombian Pacific	", "keywords": "	Archaea, Bacteria, Colombian marine metagenomics, Mangrove, Microbiome	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
];

const rnas =[
    {"number":	274	, "authors": "	Francisca Rodríguez-Cabello, Bárbara Arévalo Ramos and Basilio Carrasco	", "tittle": "	Analysis of differential expression in the phaseolin gene in samples of Chilean and foreign Phaseolus vulgaris L. species.	", "keywords": "	Bioinformatics, Phaseolin, Gene, Expression	", "poster": "	Rodriguez_Cabello_Poster0274 - Francisca Rodríguez Cabello.png	", "video": "	https://www.youtube.com/embed/R0zL-owiTZA	"},
    {"number":	1738	, "authors": "	Andrea Pacheco De la Cruz and Julio Solis Sarmiento	", "tittle": "	In silico characterization of delta conglutins in Lupinus mutabilis(Sweet)	", "keywords": "	Lupinus mutabilis, lupin, conglutins, delta conglutin, bioinformatics	", "poster": "	Pacheco_DelaCruz_Poster1738 - Andrea Pacheco.png	", "video": "	https://www.youtube.com/embed/11mkSd3h4TM	"},
    {"number":	2435	, "authors": "	Luz Rosalina Tincopa Marca, Matthew Ronshaugen and Sam Griffiths-Jones	", "tittle": "	Pingpong signature is present in Parasteatoda tepidariorum embryo	", "keywords": "	transposon, piRNA, transposon annotation, expression, pingpong signature	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	3947	, "authors": "	Giovana Motta de Oliveira, Maria Fernanda Campanari, Marcelo Falsarella Carazzolle and Henrique Marques Barbosa de Souza	", "tittle": "	Prospecting for essential genes in Meloidogyne incognita through a multi-omic approach for silencing by RNAi	", "keywords": "	Transcriptomic, Genomic, Parasite	", "poster": "	pôster 3WBDS - Giovana Motta.png	", "video": "	https://www.youtube.com/embed/uz18jpRw97s	"},
    {"number":	3977	, "authors": "	Heloise Cale da Rocha, Patricia Kubo Fontes, Marcella Pecora Milazzotto and Fernanda Almeida	", "tittle": "	Benchmark in bioinformatics: how to know the best analysis method for RNA sequencing analyzes	", "keywords": "	Bioinformatics, Worbench, RNA-sequencing, Multiple algorithms, Benchmark	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	4490	, "authors": "	Beatriz A. Picinato, Vinícius Franceschini-Santos, Lívia Zaramela, Ricardo Vêncio and Tie Koide	", "tittle": "	Comparative transcriptomics among archaea to search for circular RNAs	", "keywords": "	RNA-Seq, Archaea, Circular RNAs	", "poster": "	Picinato_Poster4490 - Beatriz Adas Picinato.png	", "video": "	https://www.youtube.com/embed/b3ACTVduPsI	"},
    {"number":	8413	, "authors": "	Ester Muñoz del Campo, José Francisco Català-Senent and Francisco García-García	", "tittle": "	Identifying microRNA biomarkers in Multiple Sclerosis exhibiting a sex-related differential pattern	", "keywords": "	Multiple Sclerosis, microRNA, Meta-analysis, Sex diferences	", "poster": "	Munoz_del_Campo_Poster8413 - Ester Muñoz del Campo.jpg	", "video": "	https://www.youtube.com/embed/3iiK5M2azxw	"}
];

const phylogenyevolution =[
    {"number":	609	, "authors": "	Marcela P. Barengo, Ernesto E. Alzaga, Gustavo A. Bich, Natalia S. Amerio, Pedro D. Zapata and Maria L. Castrillo	", "tittle": "	Phylogenetic analysis of ITS sequences in Escovopsis isolates from Misiones, in the framework of a polyphasic identification	", "keywords": "	Bioinformatics, E. catenulata, E. primorosea, Genbank	", "poster": "	Barengo_Poster609 - marcela barengo.png	", "video": "	https://www.youtube.com/embed/3xMlgW0TZSA	"},
    {"number":	632	, "authors": "	Romina Micaela Zambrana Montaño, Mercedes Nabaes Jodar, Stephanie Goya, Dolores Acuña, Raúl Maximiliano Acevedo, Ariel Amadio, Betina Brusés, Santiago Ceballos, Humberto Debat, María Florencia Eberhardt, Ailén Fernández, Franco Fernández, Laura Formichelli, Fernando Gallego, Iván Gramundi, Matías Irazoqui, Guido König, Melina Lorenzini Campos, Horacio Lucero, Nathalie Marquez, Melina Mazzeo, Javier Mussin, Cristina Nardi, Griselda Oria, Julia Ousset, Luis Pianciola, Carolina Pintos, Andrea Puebla, Carolina Torres and Mariana Viegas	", "tittle": "	Evolution of SARS-CoV-2 Gamma variant during the second wave of the COVID-19 pandemic in Argentina	", "keywords": "	Viral evolution, SARS-CoV-2, Genomic surveillance, Lineage P.1, Gamma variant	", "poster": "	Zambrana_Montaño_Poster632 - Romina Zambrana.png	", "video": "	https://www.youtube.com/embed/XV8PABm9ZUo	"},
    {"number":	1392	, "authors": "	Emanoelle La Santrer, Claudia Assunção, Edgar Aguiar and Rachel Basques Caligiorne	", "tittle": "	Two different approaches to the confidence intervals on phylogeny on SARS-CoV-2 Spike protein	", "keywords": "	Bioinformatics, SARS-CoV-2, Phylogeny, Confidence topology	", "poster": "	Emanoelle_La_Santrer__Poster1392 - Emanoelle S..png	", "video": "	https://www.youtube.com/embed/OTA3FtG-wAM	"},
    {"number":	2585	, "authors": "	Juliana Soares da Silva, Rodrigo Jardim and Nelson Kotowski	", "tittle": "	Comparative genomics of pathogenic and free-living protozoa	", "keywords": "	protozoa, free-living, bioinformatics, comparative genomics	", "poster": "	Soares_Poster2585 - Juliana Soares.PNG	", "video": "	https://www.youtube.com/embed/5T5Xo0yMEMY	"},
    {"number":	5494	, "authors": "	Renata Biazzi, André Fujita and Daniel Y. Takahashi	", "tittle": "	Convergent evolution in silico reveals shape and dynamic principles of directed locomotion	", "keywords": "	morphological computation, evolutionary convergence, biological principles, evolutionary algorithms, soft robots	", "poster": "	Biaggi_Biazzi_Poster5494 - Renata Biaggi Biazzi.png	", "video": "	https://www.youtube.com/embed/cfxl5Lslopw	"},
    {"number":	5621	, "authors": "	Anahi Tania Sanchez Leon, Selene Zarate and Martha Yopicucio	", "tittle": "	Effect of intra-subtype recombination on the evolution of env in HIV-1	", "keywords": "	recombination, hotspots, btreakpoints	", "poster": "	Anahi_Leon_Poster5621 - Alitery León.PNG	", "video": "	https://www.youtube.com/embed/sLi3lipuHDw	"},
    {"number":	5844	, "authors": "	Juliana Galhardo, Gonçalo A. G. Pereira and Juliana José	", "tittle": "	Exploring Saccharomycotina subphylum to enhance Saccharomyces cerevisiae performance on maltose consumption	", "keywords": "	Phylogenetic, Saccharomyces cerevisiae, Saccharomycotina, Bioethanol, Maltose consumption	", "poster": "	Galhardo_Poster5844 - Juliana Galhardo.png	", "video": "	https://www.youtube.com/embed/IAR6ncN0USU	"},
    {"number":	6097	, "authors": "	Tania Tamara Pedrozo, Gustavo Bich, Laura Villalba, Pedro Zapata and María Lorena Castrillo	", "tittle": "	Molecular and phylogenetic identification of two native biocontrol isolates from Misiones province Clonostachys HEP 30 and Paecilomyces HEP 24	", "keywords": "	DNA extraction, ITS1 5.8S ITS2 region, Fungi, Databases, Monophyletic clade	", "poster": "	Pedrozo_ Poster 6097 - Tania Tamara Pedrozo.png	", "video": "	https://www.youtube.com/embed/XH6rtgwdoDM	"},
    {"number":	9394	, "authors": "	Paula Cristina Andrade, Ighor Arantes, Amilcar Tanuri, Gonzalo Bello and Tiago Gräf	", "tittle": "	Characterization of HIV-1 Transmission clusters inferred from the Brazilian nation-wide genotyping service database	", "keywords": "	HIV-1, Transmission dynamics, Phylogenetic clusters, Brazil	", "poster": "	Andrade_9394 - Paula Andrade.png	", "video": "	https://www.youtube.com/embed/tin87gbCGpE	"}
];

const proteins =[
    {"number":	3223	, "authors": "	Beatiz Estevam, Danilo B. Rocha and Diego Mauricio Riaño-Pachón	", "tittle": "	Large scale genomic identification of CAZymes families involved in mannan and xylan degradation	", "keywords": "	Bioinformatics, Proteins and Proteomics, Phylogeny and Evolution, Biomolecular Simulations and Structural Bioinformatics	", "poster": "	Estevam_Poster3223 - Beatriz Rodrigues Estevam.png	", "video": "	https://www.youtube.com/embed/lclWn5UC9yk	"},
    {"number":	4435	, "authors": "	Ximena Aixa Castro Gonzalez, Silvana Apichela and Martín Eduardo Argañaraz	", "tittle": "	Proteomic analysis of elongated alpaca embryos	", "keywords": "	Proteome, Alpaca, Embryo, Pregnancy, Implantation	", "poster": "	Castro_Gonzalez_Poster4435 - Ximena Aixa Castro.png	", "video": "	https://www.youtube.com/embed/HzQpjGZALYE	"},
    {"number":	4455	, "authors": "	Macarena Alonso, Franco L Simonetti and Cristina Marino-Buslje	", "tittle": "	Protein-protein interaction analysis in membraneless organelles	", "keywords": "	Protein-protein interaction, Phase separation, Network analysis	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	5656	, "authors": "	Matias Carletti, Luciana Rodriguez Sawicki, Guillermo Benitez, Maria Silvina Fornasari, Nicolás Palopoli and Gustavo Parisi	", "tittle": "	Unveiling the origins of protein disorder using ancestral resurrection	", "keywords": "	resurrected proteins, Alphafold, disorder, evolution	", "poster": "	Carletti_Matias_Poster5656.png	", "video": "	https://www.youtube.com/embed/vuexTPVQ2zg	"},
    {"number":	5820	, "authors": "	Hanna Montserrat Tolosa Lerma, Eliakym Arámbula Meraz, Martín Irigoyen Arredondo, Enrique Romo Martínez, Paola Martínez Camberos, Fred Luque Ortega, Fernando Bergez Hernández, América Torres Moreno and Noemí García Magallanes	", "tittle": "	Analysis of the effect of mutations on structure in the enzyme G6PD related to deficiency in human.	", "keywords": "	Bioinformatics, G6PD, Mutations, Enzyme	", "poster": "	Tolosa_Lerma_Poster5820 - Hanna Montserrat Tolosa Lerma.png	", "video": "	https://www.youtube.com/embed/zNOI1kFI16M	"},
    {"number":	9884	, "authors": "	Ana Julia Velez Rueda, Franco Leonardo Bulgarelli, Nicolás Palopoli and Gustavo Parisi	", "tittle": "	CaviDB: a database of proteins cavities features for structure-based drug design	", "keywords": "	DATABASE, PROTEINS, CAVITIES, DRUG DESIGN	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"}
];

const simulationsstructural =[
    {"number":	489	, "authors": "	Leslie Mamani and Christian Solis-Calero	", "tittle": "	Virtual screening on natural products from Peruvian biodiversity for discovering of G-protein-coupled receptor MAS ligands.	", "keywords": "	MAS ligands, RAS system, Mitraphylline, Peruvians natural compounds, Molecular docking	", "poster": "	Mamani_Leslie_Poster0489 - Leslie Mamani Herrera.png	", "video": "	https://www.youtube.com/embed/_7fA3wtqokU	"},
    {"number":	865	, "authors": "	Karla Araceli León García, Christian Adalid Martínez Rebollar, Marisol López Hidalgo, Darinka Pamela Durán Gutierrez and César Augusto Sandino Reyes López	", "tittle": "	Virtual screening and docking analysis of Entamoeba histolytica enolase putative inhibitors	", "keywords": "	Entamoeba histolytica, inhibitors, virtual screening, molecular docking	", "poster": "	León_García_poster0865 - Karla León García.png	", "video": "	https://www.youtube.com/embed/36J7pt8ch2c	"},
    {"number":	1255	, "authors": "	Oluwatoyin Campbell and Viviana Monje-Galvan	", "tittle": "	Lipid fingerprint in chronic viral infections: learning from simulations of the viroporin protein of Hepatitis C Virus (HCV)	", "keywords": "	Membrane lipids, Protein-lipid interactions, Protein-mediated membrane remodeling, Computational Biophysics, Molecular dynamics	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	2247	, "authors": "	Alejandra Rubinstein, Laura Lucas and Oscar Perez	", "tittle": "	Structural analysis and modeling of the Cupin 1 domain present in the quinoa 11S globulin	", "keywords": "	Bioinformatics, 11 S quinoa protein, cupin 1.	", "poster": "	Rubinstein-poster 2247 - Alejandra Rubinstein.png	", "video": "	https://www.youtube.com/embed/fO_26m1NNco	"},
    {"number":	2523	, "authors": "	Isabel Garcia-Pereira and Ariela Vergara-Jaque	", "tittle": "	Identification of Integrins as Pharmacological Targets for Design of Therapies Against Colorectal Cancer.	", "keywords": "	Bioinformatics, Colorectal Cancer, Integrins, Biomolecular Simulation, Peptide docking	", "poster": "	Garcia_Isabel_Poster2523.png - Isabel García.png	", "video": "	https://www.youtube.com/embed/lhhowpvtXM0	"},
    {"number":	3558	, "authors": "	Hershna Patel	", "tittle": "	Molecular simulations and virtual screening to investigate the structure and binding sites of the Influenza A virus Nuclear Export Protein	", "keywords": "	Influenza A, Nuclear export protein, Molecular Dynamics Simulation	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	4428	, "authors": "	Michelle C. Chirinos-Arias and Claudia P. Spampinato	", "tittle": "	In silico analysis of MSH orthologous proteins of major agronomic crops	", "keywords": "	MMR system, MSH, DNA repair, Cell Cycle	", "poster": "	Chirinos_Michelle_Poster4428 - Michelle Christine Chirinos Arias.png	", "video": "	https://www.youtube.com/embed/zBq-a0xGRp0	"},
    {"number":	4648	, "authors": "	Agostina B. Marquez, Priscila A. Lanza Castronuovo, Mariano Vera, Agustina Alaimo and Cybele C. García	", "tittle": "	In silico study of the Aryl Hydrocarbon Receptor with natural compounds as an antiviral strategy against Zika virus	", "keywords": "	Aryl Hydrocarbon Receptor, Homology modeling, Molecular docking, Molecular dynamics, Zika virus	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	7676	, "authors": "	Abira Dey, Ruoya Li, Nathalie Larzat, Jean Bernard Idoipe and Ashwani Sharma	", "tittle": "	Prediction of endocrine disruption chemical properties by in – silico approach	", "keywords": "	Endocrine Disruption, Hormonal Disorder, Estrogen Receptors, Molecular Docking, Binding Energy	", "poster": "	Dey_Poster7676.png - Abira Dey.png	", "video": "	https://www.youtube.com/embed/oJNlu6oKvDc	"},
    {"number":	7824	, "authors": "	Suparna Dey, Abira Dey, Ruoya Li, Nathalie Larzat, Jean Bernard Idoipe and Ashwani Sharma	", "tittle": "	Affinity prediction and Understanding mechanism of Inhibition of FDA approved drugs on Hepatic Transporters BSEP and MRP2	", "keywords": "	BSEP, MRP2, Drug inhibitors, Binding affinity, Molecular docking	", "poster": "	Dey_Poster7824 - Suparna Dey.PNG	", "video": "	https://www.youtube.com/embed/SqvUCmj0YgU	"},
    {"number":	8611	, "authors": "	Javiera Baeza, Wendy Gonzalez and Oscar Cerda	", "tittle": "	Design of inhibitory peptides based on molecular modeling of the TRPM4-KCTD5 interaction	", "keywords": "	TRPM4, KCTD5, Peptides, Cancer, Proteomics	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	9617	, "authors": "	Darinka Pamela Durán Gutiérrez, José Luis Castrejón Flores and César Augusto Sandino Reyes López	", "tittle": "	In Silico analysis of the impact of pathogenic variants in the interaction of a natural substrate and a synthetic substrate with the human alfa-L-iduronidase.	", "keywords": "	IDUA, MPS I, Pathogenic variants, Molecular docking	", "poster": "	Duran_Gutierrez_Poster9617 - Darinka Durán.png	", "video": "	https://www.youtube.com/embed/CSIpJW5YSLk	"},
    {"number":	8762	, "authors": "	María Clara Miserendino and Yaw Sing Tan	", "tittle": "	Unveiling the molecular mechanisms of coding variants associated with type 2 diabetes for precision medicine	", "keywords": "	Bioinformatics, Diabetes, Molecular dynamics, Precision medicine	", "poster": "	Miserendino_Poster8762 - Clari Miserendino.png	", "video": "	https://www.youtube.com/embed/Uetry22wgCw	"}
];

const bioinfoDiseases =[
    {"number":	254	, "authors": "	Helena Gómez-Martínez, Adolfo López Cerdán, Eva Hernando and Francisco García-García	", "tittle": "	Novel computational strategies for the identification of a microRNA signature for diagnosis and prognosis in melanoma	", "keywords": "	Melanoma, Microrna expression, Sex differences, Meta-analysis, Precision medicine	", "poster": "	Gomez_Martinez_Poster0254 - Helena Gómez.png	", "video": "	https://www.youtube.com/embed/nIcv1JxH_uY	"},
    {"number":	3465	, "authors": "	Irene Soler Sáez, Zoraida Andreu Martínez, José Francisco Català-Senent, Rubén Grillo-Risco, Adolfo López-Cerdán, Almudena Neva-Alejo, Borja Gómez-Cabañes, Héctor Carceller, María de la Iglesia-Vayá, Marta R. Hidalgo and Francisco García-García	", "tittle": "	Molecular and functional atlas of sex-differences in secondary-progressive multiple sclerosis: neurons characterization	", "keywords": "	Bioinformatics, snRNA-seq, Multiple sclerosis, Sex bias, Precision medicine	", "poster": "	Soler_Sáez_Poster3465 - Irene Soler.png	", "video": "	https://www.youtube.com/embed/AglMw8WoQ9o	"},
    {"number":	3552	, "authors": "	Alison Díaz-Cuevas, M. Fernanda Maldonado-Lira, Pamela D. Meza-Cruz and Claudia Gonzaga-Jauregui	", "tittle": "	Bioinformatic analyses and comparison of multiple long-read whole genome assembly approaches of PacBio HiFi human sequence data.	", "keywords": "	PacBio HiFi, Long-read sequencing, Genome Assembly, Variant Calling, WGS	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	3834	, "authors": "	Jasbir Kaur Simak, Ashwani Sharma and Anshul Nigam	", "tittle": "	Molecular Docking And Toxicity Analysis of FDA Approved Drugs And Plant Metabolites Against Potential Biomarkers To Target Human Hepatocellular Carcinoma	", "keywords": "	Hepatocellular Carcinoma, Bromodomain and PHD finger containing 1, Transglutaminase 2	", "poster": "	Simak_Poster3834 - Jasbir Kaur Simak.png	", "video": "	https://www.youtube.com/embed/n9Ia2QfxtlY	"},
    {"number":	4343	, "authors": "	Diana Paola Pacheco Verduzco, Alicia Rivera Cameras, Le Figuera, Asbiel Felipe Garibaldi Rios, María Guadalupe Márquez Rosales, Maria Teresa Magaña Torres, Guillermo Zuñiga González, Belinda Claudia Gómez Meda, Javier Ibarra, Eric Jonathan Maciel Cruz and Martha Patricia Gallegos Arreola	", "tittle": "	Participation in molecular interaction nodes of rs140080026 in KRAS: Bioinformatics approach.	", "keywords": "	Bioinformatics and diseases, molecular interaction nodes, KRAS gene	", "poster": "	Pacheco_Verduzco_Poster4343 - Alicia Rivera.png	", "video": "	https://www.youtube.com/embed/ZNzjRaqvARc	"},
    {"number":	4400	, "authors": "	Olga Rueda Lopez, Deborah J. Burks, Daniel González Camblor, Irene Soler-Sáez, José F. Català-Senent, Pablo Malmierca-Merlo, Francisco García-García and Amparo Galán	", "tittle": "	Differential expression analysis of obesity markers and insulin resistance according to sex biological variable	", "keywords": "	bioinformatics, obesity, insulin resistance, sex differences, precision medicine	", "poster": "	Rueda_Lopez_Poster4400 - Olga Rueda López.PNG	", "video": "	https://www.youtube.com/embed/MUgCdX3ZgiA	"},
    {"number":	4665	, "authors": "	Carla Perpiñá-Clérigues, José F. Català-Senent, Susana Mellado, Consuelo Guerri, María Pascual and Francisco García-García	", "tittle": "	Alcohol consumption affects the lipidome of extracellular vesicles: a sex-based difference study	", "keywords": "	Lipidomics, Alcohol, Sex differences, Extracellular vesicles, Precision medicine	", "poster": "	Perpiñá_Clérigues_Poster4665 - Carla Perpiñá.png	", "video": "	https://www.youtube.com/embed/JTB2K6XwUSc	"},
    {"number":	4945	, "authors": "	Shankar Aissvarya, Manohar Arumugam, Ling King Hwa and Karuppiah Thilakavathy	", "tittle": "	Identification of Differentially Expressed Genes in Dupuytren’s Contracture: A Study Based on Geo Datasets.	", "keywords": "	Dupuytren’s contracture, Differentially expressed genes, Robust rank aggregation, Wnt signalling pathway	", "poster": "	Shankar_Aissvarya_Poster4945 - Aissvarya Shankar.png	", "video": "	https://www.youtube.com/embed/USoJbATfT7E	"},
    {"number":	5173	, "authors": "	Noor Haliza Mohamed Ibrahim, Zurina Zainudin, Amilia Afzan Mohd Jamil, Norshariza Nordin and Karuppiah Thilakavathy	", "tittle": "	Analysis of Differentially Expressed Genes and Molecular Pathways in Spontaneous Preterm Birth: A Bioinformatics Approach	", "keywords": "	Preterm birth, Differential gene expression, P value combination, Protein-protein interaction, Enrichment analysis	", "poster": "	Mohamed_Ibrahim_5173 - Noor Haliza Mohamed Ibrahim.png	", "video": "	https://www.youtube.com/embed/EV_ZBTCcAVA	"},
    {"number":	5264	, "authors": "	Katia Avina Padilla and Mmaribel Hernandez-Rosales	", "tittle": "	Multi-omics approaches to deep insight into the complex heterogeneity of cancer diseases: The search of Driver genes	", "keywords": "	tumor microenvironment, biomarkers, intronless genes, complex networks, transcriptional reprogramming, complex diseases	", "poster": "	Avina_Padilla_Poster5264 - Katia Avina.png	", "video": "	https://www.youtube.com/embed/j3862xpDdq4	"},
    {"number":	5360	, "authors": "	A. Paulina Pérez-González, Norma A Caballero, Enrique Morett, Israel Aguilar-Ordóñez	", "tittle": "	From genomic context to structural protein-based medicine	", "keywords": "	WGS, native american population, genomic medicine, protein, Seri	", "poster": "	Pérez_González_Poster5360 - Alejandra Paulina Pérez González.png	", "video": "https://www.youtube.com/embed/PnHxki40i_I"},
    {"number":	5425	, "authors": "	Cristina Galiana-Roselló, Rubén Grillo-Risco, José Francisco Català-Senent, Adolfo López-Cerdán, Isabel del Pino and Francisco García-García	", "tittle": "	Transcriptome-based Drug Repurposing in Alzheimer's Disease: A Sex-tailored Analysis	", "keywords": "	Drug repurposing, Alzheimer’s Disease, Transcriptome, Sex differences	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	5574	, "authors": "	Christhy Massiell Campbell-Sánchez and Christian Solis-Calero	", "tittle": "	Structure-based identification of potential Candida albicans malate synthase inhibitors from natural products of the South American biodiversity	", "keywords": "	Malate synthase, Natural products, Multiscoring virtual screening, NuBBE database	", "poster": "	Campbell_ Sanchez_poster5574 - CAMPBELL SÁNCHEZ CHRISTHY MASSIELL.png	", "video": "	https://www.youtube.com/embed/AFydN9MgGbI	"},
    {"number":	5691	, "authors": "	Sarra Akermi, Ashwani Sharma, Moufida Chaari, Khawla Elhadef and Mariam Fourati	", "tittle": "	Antifungal properties and toxicity prediction of essential oil from Cupressus sempervirens against Candida albicans infection by using in silico approach	", "keywords": "	Antifungal activity, Cupressus sempervirens EO, Toxicity assessment, Molecular docking	", "poster": "	AKERMI_Poster 5691 - Ashwani Sharma.png	", "video": "	https://www.youtube.com/embed/R5VxYEv3OjY	"},
    {"number":	6439	, "authors": "	Esmeralda Escobar Muciño and Esmeralda Escobar Muciño	", "tittle": "	Molecular dynamic study for 1,3,7-trihydroxy-2,4-di-isoprenyl xanthone (TDX) and 6-Geranylnaringenin (6GNG) as competitive inhibitors of LasR a transcriptional regulator of Quorum Sensing in P. aeruginosa	", "keywords": "	AHL binding domain, Inhibitor of Quorum Sensing, Molecular docking, Molecular dynamics, Quorum Sensing	", "poster": "	Escobar_Muciño_Esmeralda_6439 - Esmeralda Escobar Muciño.png	", "video": "	https://www.youtube.com/embed/Q2A0MdIIRt0	"},
    {"number":	6627	, "authors": "	Andrea Ross Orozco, Noemí García Magallanes, Adrián González Castillo, Eliakym Arámbula Meraz, Armando Guarneros, Carlos Vázquez Chacon, Enrique Jhonatan Romo Martínez and Fred Luque Ortega	", "tittle": "	Detection of mutations associated with bedaquiline resistance in Mycobacterium tuberculosis in Latin American countries	", "keywords": "	bedaquiline, mutation, antibiotic resistance, MTB-ss, LATAM	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	6665	, "authors": "	Sandra Arancibia-Opazo, J. Sebastián Contreras-Riquelme, Mario Sánchez, Alberto J.M. Martin and Mauricio Sáez-Venegas	", "tittle": "	Study of the variation of the acetylation levels of H3K27 and transcriptional changes associated with CRE elements in the R 6/2 murine model of Huntington’s disease	", "keywords": "	Bioinformatics, Huntington disease, cAMP response element binding protein, Gene Regulatory Networks	", "poster": "	Arancibia-opazo_Sandra_poster6665 - sandra arancibia.png	", "video": "	https://www.youtube.com/embed/TqffEYXAG64	"},
    {"number":	7190	, "authors": "	Vitoria Zanon Gomes, Robinson Montes, Felipe Rodríguez Gaxiola, Paúl Alexis López-Durán, Matheus Carreira Andrade and Noemí García Magallanes	", "tittle": "	Liponium: An algorithm for identification of discrete traits associated with Mycobacterium tuberculosis hetero-resistance and virulence	", "keywords": "	Mycobacterium tuberculosis, Hetero-resistance, Algorithm, Detection	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	7255	, "authors": "	Yocyny Surendran, Narcisse Mary Joseph, Syafinaz Binti Amin Nordin and Sandeep Kumar Dhanda	", "tittle": "	T-cell Epitope Mapping of Outer Membrane Protein of Leptospira	", "keywords": "	Leptospirosis, Vaccine candidate, T-cell Epitope Mapping, Conserved region, LipL46	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	7986	, "authors": "	Vanessa Souza, Mariana Santesso, Sandra Linde and Patricia Reis	", "tittle": "	Integrated Meta-Analysis of transcriptome identifies potential therapeutic targets in patients with Brain Metastasis from Lung Adenocarcinoma	", "keywords": "	Brain metastasis, Lung cancer, Transcriptome, Biomarkers, Therapeutic targets	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	8555	, "authors": "	Fernando Gordillo González, Jaime Llera Oyola, Irene Soler Saez, Marta R. Hidalgo, Zoraida Andreu, María de la Iglesia-Vayá, Héctor Carceller and Francisco García García	", "tittle": "	Novel integration of single cell transcriptomics studies for the characterization of sex differences in Parkinson disease	", "keywords": "	Bioinformatics, Sex differences, Omics integration, Parkinson, sc-RNAseq	", "poster": "	Gordillo_Gonzalez_Poster8555 - Fernando Gordillo.png	", "video": "	https://www.youtube.com/embed/jeWizbiaOlg	"},
    {"number":	8881	, "authors": "	Jaime Llera Oyola, Zoraida Andreu, Irene Soler Sáez, Fernando Gordillo González, Héctor Carceller, María De la Iglesia Vayá, Marta R. Hidalgo and Francisco García García	", "tittle": "	Sex-differences in Alzheimer’s disease: a meta-analysis of microRNA studies	", "keywords": "	Alzheimer, MicroRNA, Transcriptomics, Sex-differences, Meta-analysis	", "poster": "	WBDS_JaimeLlera - Jaime Llera Oyola.png	", "video": "	https://www.youtube.com/embed/13W4JygBGow	"},
    {"number":	9089	, "authors": "	Arshita Jindal and Yashika Jindal	", "tittle": "	Quantitative Structure-Activity Relationship and Molecular Modeling Studies on Inhibitors of Parkinson’s Disease-Associated Protein	", "keywords": "	Parkinson's Disease, QSAR Molecular, Docking, ADME, Toxicity	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	9363	, "authors": "	Daniela Picardi	", "tittle": "	Monte Carlo simulation applied to human health risk analysis	", "keywords": "	Bioinformatics, Environmental Science, Risk analysis, Montecarlo, Human health	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	9841	, "authors": "	Tanmai Agasam, Anshul Nigam and Ashwani Sharma	", "tittle": "	Designing of Antimicrobial compounds and finding their mechanism of inhibition on Pseudomonas aeruginosa by in-silico approach	", "keywords": "	chronic obstructive pulmonary disease (COPD), antimicrobial compounds, VEGA QSAR	", "poster": "	Poster Agasam Tanmai - Tanmai Agasam.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"}
];

const machinelearning =[
    {"number":	868	, "authors": "	Nethmi Wijesinghe, Nethmee Sellahewa and Rashmi Perera	", "tittle": "	Anomaly Detection in Image Streams with Explainable AI	", "keywords": "	Anomaly Detection, Explainable AI, Deep Learning, Machine Learning, Extreme Value Theory	", "poster": "	Wijesinghe_0868 - Nethmi Wijesinghe.png	", "video": "	https://www.youtube.com/embed/EI6-Cxxf4jk	"},
    {"number":	4392	, "authors": "	Mariana S. Candamil-Cortés and Jorge W. Arboleda-Valencia	", "tittle": "	Calibration and implementation of a predictive computational harvest model for cacao quality improvement.	", "keywords": "	Machine Learning, Agricultural economics, Computer science, Biotechnology, Theobroma cacao	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	4941	, "authors": "	Fabiana Rodrigues de Góes	", "tittle": "	Feature extraction based on Complex Networks for classification of genomic sequences	", "keywords": "	DNA sequence classification, DNA pattern mining, machine learning, complex networks	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	9972	, "authors": "	Georgios Michoulis	", "tittle": "	Graph Embedding and Node Features for Drug Target Interaction: The GenGRAM-DTA Approach	", "keywords": "	Bioinformatics, Drug Discovery, Drug Target Interaction, Graph Neural Networks, Node Features	", "poster": "	George_Michoulis_9972 - George Michoulis.png	", "video": "	https://www.youtube.com/embed/8BlqORD24c4	"}
];

const artInt =[
    {"number":	5424,
    "authors": "Arantxa Ortega Leon, María Inmaculada Rodríguez García, Daniel Urda and Ignacio Turias",
    "tittle": "A classification approach to predict pathological MRI using clinical data of preterm infants",
    "keywords": "Bioinformatics, Machine Learning, Artificial Intelligence in Health",
    "poster": "poster.png", "video": "https://www.youtube.com/embed/mzW5AAfuFMU"},
];

const systemsBiology =[
    {"number":	1957	, "authors": "	Alexandra Russolo Cardelli, Gonçalo A. G. Pereira and Lucas Carvalho	", "tittle": "	Comparative transcriptomics for identification of key genes among xylose fermenting yeasts through interaction networks and co-expression analysis	", "keywords": "	Systems Biology, Genetics, Omics, Transcriptomics, Yeast, 2G, Ethanol	", "poster": "	Cardelli_Poster1957 - Alexandra Russolo Cardelli.png	", "video": "	https://www.youtube.com/embed/LCJWnZcso1g	"},
    {"number":	2433	, "authors": "	Paola Corbín Agustí, Arián Ferrero Fernández, María Castillo López, José Luis García López and Juli Peretó	", "tittle": "	Genome-scale metabolic model reconstruction of the xerotolerant bacteria Exiguobacterium sp. Helios	", "keywords": "	Bioinformatics, Systems Biology, Metabolic models, GEMRE	", "poster": "	Corbín_Agustí_Poster2433 - Paola Corbin Agusti.png	", "video": "	https://www.youtube.com/embed/S4fh3I8NqYE	"},
    {"number":	4476	, "authors": "	Victória Regina da Silva, Jordana Marina da Silva, Gabriela Rodrigues de Aguiar Leal, José Lucas Medeiros Mariz, Rhayanny Kethylly Pereira Santos, Rosana Pereira Nobre de Lima and Priscila Gubert	", "tittle": "	In silico analysis of immunological pathways from Multiple Sclerosis transcriptome reveals microglial damage induced by complement system	", "keywords": "	Multiple Sclerosis, Immune System, Pathways, System Biology, Bioinformatics	", "poster": "	Silva_Poster4476.png - Victória Silva.png	", "video": "	https://www.youtube.com/embed/4WfPq0OQx3Y	"},
    {"number":	7288	, "authors": "	Zainab Muhammad Sani, Halima Sani Mamman, Asiya Aminu Mukhtar, Fatima Waziri Saleh, Suwaiba Auwalu Umar, Halima Musa Rabiu and Sani Ibrahim	", "tittle": "	Microbial diversity in dye-contaminated soil of Kofar Na’isa dyeing pit, Kano, Nigeria	", "keywords": "	Dye-contaminated Soil, Fungi, Bacteria, Microbial Population	", "poster": "	Sani_Poster7288 - Zainab Muhammad Sani.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	8668	, "authors": "	Irene Roller Parodi and Christian Solis Calero	", "tittle": "	Drug perturbation of cross-talk between PI3K/Akt/mTOR and RTK/ERK signaling pathways via mathematical modeling	", "keywords": "	PI3K/Akt/mTOR signaling pathway, RTK/ERK signaling pathway, Drug responses, Mathematical modeling	", "poster": "	Roller_Parodi_Poster8668 - IRENE ROLLER PARODI.png	", "video": "	https://www.youtube.com/embed/spawdRcWr1M	"}
];

const databaseSoftware =[
    {"number":	2587	, "authors": "	Daniela Senra, Nara Guisoni and Luis Diambra	", "tittle": "	A stemness score for single-cell RNA sequencing data using a protein-protein network as a scaffold	", "keywords": "	scRNA-seq, Stem cells, Entropy, PPI networks	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	7471	, "authors": "	Michelle C. Chirinos-Arias and Marcela Dotto	", "tittle": "	EURECA (Eukaryote DNA Repair Capacity) a web-platform with a database about indirect DNA repair systems in eukaryotes and bioinformatics tools	", "keywords": "	Database, DNA repair, BER, NER, MMR	", "poster": "	Chirinos_Michelle_Poster7471 - Michelle Christine Chirinos Arias.png	", "video": "	https://www.youtube.com/embed/GCbzkVyDdTg	"},
    {"number":	8423	, "authors": "	Natalia Soriani Daleffi, Marcella Pecora Milazzotto and Fernanda Almeida	", "tittle": "	Bovine RNA-Seq Database: Modeling and Implementation	", "keywords": "	Bioinformatics, Database, RNA-Seq	", "poster": "	Natalia_Daleffi_Poster8423 - Natalia Soriani Daleffi.png	", "video": "	https://www.youtube.com/embed/9d5Xz-6_qXg	"}
];

const education =[
    {"number":	419	, "authors": "	Mia Danna Bazan Melendez	", "tittle": "	Women in Data Management: A review of clinical trials and health equity in Peruvian context	", "keywords": "	Women, Data Managemen, Clinical Trials, UNIDEC	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	9091	, "authors": "	Natalia Coutouné and Thayana Tavares	", "tittle": "	The PyLadies Bioinfo initiative: promoting bioinformatics among women	", "keywords": "	Bioinformatics, Python, Education, Inclusion	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	9531	, "authors": "	Michelle C. Chirinos-Arias and Alex Sánchez Yumbo	", "tittle": "	The “Cazadores de datos” series of “IGBM divulga” Podcasts as a tool for the communication of bioinformatics	", "keywords": "	Podcast, Bioinformatics, Science Communication, Education	", "poster": "	Sánchez_Alex_poster9531 - Alex Sanchez.png	", "video": "	https://www.youtube.com/embed/rarqKnHmdhk	"}
];

const chemoinfo =[
    {"number":	518	, "authors": "	Dayana Mesa Tejeda, Dayana Alonso, Anabel Villa Testa and Yamilet Coll	", "tittle": "	In silico and in vitro analysis of steroidal oximes esters as potential lung anticancer compounds	", "keywords": "	diosgenin analogs, oxime esters, molecular docking, lung cancer.	", "poster": "	Mesa_Tejeda_Poster518 - Dayana Mesa Tejeda.png	", "video": "https://www.youtube.com/embed/G7lqe52j4bM"},
    {"number":	844	, "authors": "	Nerlis Pajaro-Castro, Elkin Torres and Edwar Cortes	", "tittle": "	Computational screening of imidazolones-type small molecule for the treatment of alzheimer's disease	", "keywords": "	Bioinformatics, Drug-like, Neurodegenerative	", "poster": "	Pajaro_Castro_Poster0844 - Nerlis Pájaro.png	", "video": "	https://www.youtube.com/embed/GnRFSUIPN2c	"},
    {"number":	1648	, "authors": "	Cecilia L. Barbieri, Priscila A. Lanza Castronuovo, Jeronimo Laiolo, Maria Cecilia Carpinella, Constantinos Athanassopoulos and D. Mariano A Vera	", "tittle": "	Rational drug design applied to the search for candidates to reverse multidrug resistance mediated by P-Glycoprotein	", "keywords": "	Betulinic derivatives, Molecular docking, Molecular dynamics, Drug design	", "poster": "	Barbieri_poster1648 - Cecilia Barbieri.png	", "video": "	https://www.youtube.com/embed/x02mCr8lRvY	"},
    {"number":	2567	, "authors": "	Yudibeth Sixto-López, José Antonio Gómez-Vidal and José Correa-Basurto	", "tittle": "	Development of HDAC inhibitors assisted by molecular dynamics simulation	", "keywords": "	HDAC, molecular dynamics simulations, molecular docking, drug discovery, parkinson disease	", "poster": "	SIXTO_LOPEZ_2567 - Yudibeth Sixto.png	", "video": "	https://www.youtube.com/embed/isZZQ-gFSjc	"},
    {"number":	5589	, "authors": "	Daniela Flores, Dayana Alonso, Yamilet Coll and Armando Zaldo	", "tittle": "	The boc-protecting group enhances the potential agonist activity of amino acid-steroidal hybrids toward Toll-like receptor 2. A molecular docking simulation	", "keywords": "	hybrid molecules, steroidal derivatives, molecular docking.	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	7228	, "authors": "	Devyani Srivastava, Surabhi Johari, Nishu Sharma and Vanshika Tiwari	", "tittle": "	Screening of phytoconstituents of medicinal plants based on Lipinski rule	", "keywords": "	Aerva lanata, Amaranthaceae, canthin-6-one, Sesbania grandiflora l., Withania somnifera.	", "poster": "	SrivastavaVelez_Rueda_Poster5.png (2) - Devyani srivastava.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	7877	, "authors": "	Andrea Sánchez, Maria Fernanda Hashimoto and Miguel Quiliano	", "tittle": "	Pharmacophore-Based Virtual Screening Toward the Discovery of potential inhibitors of Hepatitis B virus (HBV) capsid assembly	", "keywords": "	Pharmacophore, Virtual screening, Hepatitis B, Capsid inhibitors	", "poster": "	Hashimoto_Vargas_Poster7877 - Maria Fernanda Hashimoto Vargas.png	", "video": "	https://www.youtube.com/embed/sEQYOo7At30	"},
    {"number":	8027	, "authors": "	Estefanía Peralta, Maximiliano J. Fallico and Carolina L. Bellera	", "tittle": "	Virtual screening applied to search for new antiepileptics drugs active in the PTZ kindling model	", "keywords": "	MACHINE LEARNING, VIRTUAL SCREENING, PTZ KINDLING, ANTIEPILEPTIC DRUG	", "poster": "	Peralta_Estefania_Poster8027 - Estefania Peralta.png	", "video": "	https://www.youtube.com/embed/vXOKSyK8T7U	"},
    {"number":	9590	, "authors": "	Dayana Alonso, Daylin Fernández Pacheco, Yamilet Coll and Armando Zaldo	", "tittle": "	Synthesis of steroidal carbamates with potential plant growth-promoting activity	", "keywords": "	brassinosteroid, brassinosteroid analogs, carbamates, molecular docking, plant-growth promoters.	", "poster": "	Alonso_Fernández_Poster9590 - Dayana Norma Alonso Palacio.png	", "video": "	https://www.youtube.com/embed/DJVEtf3kMaw	"},
    {"number":	9621	, "authors": "	Tábata Barbosa, Melissa Alegría-Arcos, Felipe Sepúlveda, Germán Combariza, Janet Gónzalez, Carmen Gil, Ana Martínez and David Ramírez	", "tittle": "	Network pharmacology reveals multitarget mechanism of action of drugs to be repurposed for COVID-19	", "keywords": "	Protein-protein interaction network, Protein-Drug Interaction Network, Drug repurposing, SARS-CoV-2, Network Pharmacology, Polypharmacology	", "poster": "	Alegria_Arcos-Poster9621 - Tábata Barbosa.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
    {"number":	9947	, "authors": "	Sana Bougueroua, Dominique Barth and Marie-Pierre Gaigeot	", "tittle": "	Graph Theory for Molecular Dynamics simulations	", "keywords": "	Chemoinformatic, Graph Theory, Molecular Dynamics, Vibrational modes, Algorithms	", "poster": "	poster.png	", "video": "	https://www.youtube.com/embed/ouE1u7h0CA4	"},
];

//const searchDiv = createSearchSection();

const posterSessionContent = $(`
    <div class="tracks">
        <div>
            <button class="track-header collapsible">
                <h3>Bioinformatics and Diseases </h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="BioinformaticsDiseases"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Genes and Genomics</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class="content track" id="GenesGenomics"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>RNA and Transcriptomics</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="RNATranscriptomics"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Phylogeny and Evolution</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="PhylogenyEvolution"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Proteins and Proteomics</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="ProteinsProteomics"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Biomolecular Simulations and Structural  Bioinformatics</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="SimulationsStructural"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Chemoinformatics and Drug Discovery</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
        <div class=" content track" id="Chemoinformatics"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Machine Learning</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="MachineLearning"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Systems Biology</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="SystemsBiology"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Database and Software Development</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="DatabaseSoftware"></div> 
        </div>
        <div>
            <button class="track-header collapsible">
                <h3>Education</h3>
                <img class="arrow" alt="" src="./assets/icon/plantarrow2.png">
            </button>
            <div class=" content track" id="Education"></div> 
        </div>
    </div>
`);

//Generate Search section content
//searchDiv.appendTo(posterSection);

document.getElementById('search-input').addEventListener('keyup', function(e) {
    const input = searchInput();
    const posterIds = keywordSearch(input).map(it => String(it.number));
    const $tracks = $(".track-header");

    if (input.length !== 0) {
        $tracks.addClass("active");
    } else {
        $tracks.removeClass("active");
    }

    $tracks.each((index, track) => {
        const $track = $(track);
        let hasResults = false;
        $track.parent().find(".titleposters").each((index, element) => {
            const $element = $(element);
            if (posterIds.includes(element.id)) {
                hasResults = true;
                $element.removeClass("hidden");
            } else {
                $element.addClass("hidden");
            }
        })
        if (hasResults) {
            $track.removeClass("hidden");
        } else {
            $track.addClass("hidden");
        }
    })

});


//put the tracks div in the poster section
posterSessionContent.appendTo(posterSection);

//Create the content in each track
let divPosters = document.getElementsByClassName("track");
//Create array with the tracks dictionaries
const dicts = [bioinfoDiseases,genesgenomics,rnas,
    phylogenyevolution,proteins,simulationsstructural,
    chemoinfo,machinelearning,
    systemsBiology,databaseSoftware,education]
posterButtonCreat(dicts, divPosters);

// Click in the tracks to toggle between showing and hiding the collapsible content
let tracks = document.getElementsByClassName("track-header");
makeCollapsibleElements(tracks);
let posters = document.getElementsByClassName("titleposters");
savePosterNumber(posters);

//put the posters number and name in each track
function posterButtonCreat(listPosters, divPosters) {
    for (let j = 0; j < listPosters.length; j++) {
        listPosters[j].forEach(element => {
            let title = $(`
            <div>
                <button id="${element.number}" class="titleposters collapsible"> 
                    <h4>#${element.number} ${element.tittle}</h4>
                </button>
            </div>
            `);
            title.appendTo($(divPosters[j]));
        });
    }
}

//show posters information when click on the posters title
function renderPosterInfo(element, collapsible) {
    if ($(collapsible).children().length === 1) {
        const posterDiv = $(
            `<div class="content">
                <div class="poster-video">
                    <div class="authors-video">
                        <figcaption class="authors-list">${element.authors}</figcaption>
                        <iframe class="video-frame" src="${element.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <a href="./assets/img/posters/${element.poster}" target="_blank">
                        <img alt="" src="./assets/img/posters/${element.poster}">
                    </a>
                </div>
            </div>`
        );
        posterDiv.insertAfter(collapsible);
    }
}

function savePosterNumber(elementLists) {
    for (let i = 0; i < elementLists.length; i++) {
        elementLists[i].addEventListener("click", function() {
            const collapsible = $(`#${this.id}`);
            localStorage.setItem("posterNumber", this.id);
            renderPosterInfo(searchPosterByNumber(Number(this.id)), collapsible);
        });
    }
    makeCollapsibleElements(elementLists);

}

function makeCollapsibleElements(elementLists) {
    for (let i = 0; i < elementLists.length; i++) {
        elementLists[i].addEventListener("click", function() {
            this.classList.toggle("active");
        });
    }
}

function createSearchSection() {
    const mainSearcherSectionDiv = $(`
        <section class="buscador-section active" id="buscador-section">
        <h2 class="title">3rd WBDS LA Posters</h2>
        <div class="buscador" id="buscador">
            <input type="text" placeholder=" Search a poster by keywords.." name="search" class="search-input" id="search-input">
        </div>
        </section>`);
    return mainSearcherSectionDiv
}

function keywordSearch(searchquery) {
    let posters = [];

    for (let element of dicts) {
        for (let poster of element) {
            if(poster.keywords.toLowerCase().includes(searchquery.toLowerCase().trim())){
                posters.push(poster);
            }
        }
    }

    return posters;
}


function renderSuggestions(element, parentDiv){
    const li = document.createElement('li');
    const anchor = document.createElement('a');

    anchor.href = '#';
    anchor.innerHTML =  'POSTER #' + element.number +' '+ element.tittle;

    li.appendChild(anchor);
    parentDiv.appendChild(li);
}

function searchInput() {
    const input = document.getElementById('search-input');

    return input.value
}


function searchPosterByNumber(id) {
    for (let element of dicts) {
        for (let poster of element) {
            if(poster.number === id){
                return poster;
            }
        }
    }
}
