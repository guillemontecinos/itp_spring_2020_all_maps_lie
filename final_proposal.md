# Final Project Proposal: Atlas of the Forgotten Chile

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2020_all_maps_lie/blob/master/assignment_1/screenshots/screenshot-017.png" align="middle" width="80%">
</p>

## Description
<!-- a topic description, thematic overview, problem statement, or research question; -->
<!-- My project consists in mapping isolated hamlets of Chile, forgotten by the common imaginary of what Chile is.  -->
According to the 2017 census, 12.2% of the chilean population live in rural areas (2,144,028 inhabitants aproximately), a considerable population that is usually postponed by the public services and development. Many of these hamlets correspond to peasant and indigenous communities that have lived for years in the same land. 

As an attempt to address and reveal this reality, the project aims be an atlas of forgotten small communities settled in isolated areas on the chilean countryside. The goal of this is to reveal a hidden imagery of Chile, that of the forgotten people that live in the most amazing landscapes, those idealized by urban inhabitants, but lack of basic services as electricity, drinking water or sewage, and health and educational infrastructure.

The atlas will be displayed as a website where aerial imagery of isolated settlements scraped from Google Maps are presented, toghether with a map of the represented geographic zone, where each settlement is located.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2020_all_maps_lie/blob/master/assets/web-mockup.png" align="middle" width="80%">
</p>

This project is inspired on my Master's degree [thesis](https://github.com/guillemontecinos/mcs_thesis/blob/master/Montecinos_MCs_thesis_2015.pdf) I developed in 2015 on off-grid electricity supply for isolated peasant and indigenous communites of Chile.


## Discussion
<!-- a discussion of your topic’s personal relevance, larger critical or political significance, timeliness, etc.; -->
Chile has experienced its biggest [social revolt](https://www.theguardian.com/world/2019/oct/21/chile-braces-after-worst-unrest-in-three-decades-claims-11-lives) in the last 30 years, after the dictatorship transitioned into an agreed democracy. Slogans as "Chile woke up", "It was so hard for us to meet, that we won't let us go again" or "Never again without us" have been helded since October 2019 as the motto to change one of the most liberal and [concentrated](https://www.latercera.com/pulso/noticia/chile-uno-los-paises-la-region-donde-mas-cayo-la-pobreza-2012-2017/485579/) economies of the region, where 1% of the population owns 26% of the GDP. 

Chile is also concentrated, in terms of demography and decision making: 1/3 of the population live in Santiago, the capital, city which also hosts all governamental headquarters. Now Chile changed and chileans decided to recover it for themselves. But what Chile and what chileans?

This project attempts to reveal and highlight all those small communities located on isolated rural areas, those hamlets inhabited by no more than 10 people, that have no power at all, whose decision aren't affected by government decisions because they are not considered by them, and most of them don't even exist in maps. Those smalls communities are the aesthetics of a Chile who nobody cares about, even the forces of change that fight for a better future.

Even though the aforementioned, important and interesting questions pop up with this project: who are those people? what they do? what they want? do they want to be mapped? and who am I to decide who are mapped or not? Despite this, the gesture of high lightning a portion of human population abandoned by the progress seems powerful enough politically speaking.

## Methodology
<!-- a preliminary discussion of how your topic might lend itself to spatial/cartographic investigation (i.e., what can you learn by mapping it?); -->
The atlas will be based on the Chilean Settlements dataset, a [database](#references) that contains all Chilean localities will be used to map as much places as possible. This is an unofficial database I got during my 2015 research from a Government's geographer, that contains around 15,000 georeferenced settlements, both isolated and not.

Despite of being an official dataset, many of the 15,000 entries are incorrectly mapped and point uninhabited areas. Acknowledging that most of the times Government agencies work with unrevised data, I will use this information to scrape screenshots of Google Maps imagery for each of the entries, at a height of 1,000 m. Later, the dataset will be reviewed and all unihabited points will be cleaned. This resulting dataset will be used to compose the atlas dataset.

A second stage of this project, that I'd love to cover in this class but see unlikely, is to create an open platform where people can map unmapped settlements and add them to the dataset. This dialogs with the project [Missing Maps](https://www.missingmaps.org/), that attempts to complete incomplete geographic datasets to be used for public policy and humanitarian organizations.

<!-- a description of the geographic area(s) and scale(s) you plan to focus on in your maps; and -->
## Geographic area
The potential area to be covered involves the whole Chilean land territory between 69.47º and 70.65º latitude south, that reaches 756,102.4 km^2 approximately. In the following picture it can be seen the Chilean Settlement database displayed using Kepler.gl.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2020_all_maps_lie/blob/master/assets/pobladoschile-display.png" align="middle" width="80%">
</p>

## References
<!-- a tentative bibliography of at least seven sources (some scholarly publications, some popular publications, some precedent maps, etc.) that will likely prove useful in your research and practice. -->
* [Census 2017 - Results Summary](http://www.censo2017.cl/descargas/home/sintesis-de-resultados-censo2017.pdf)
* [Chilean hamlets – Database (outdated)](https://drive.google.com/file/d/1NBS1wsVqO_awYHRKNHnDbRZNrnGvEswZ/view?usp=sharing)
* [Infrastructure of Georeferenced Data](http://www.ide.cl/)
* [Study of Isolated Sttlements 2012, SUBDERE, Chile](http://www.subdere.gov.cl/sites/default/files/documentos/zonas_aisladas2.pdf)
* [A Pocket Atlas of Remote Islands – Judith Schalansky](https://www.theparisreview.org/blog/2016/01/08/fifty-islands-i-have-not-visited/)
* [OpenAerialMap](https://map.openaerialmap.org/) 
* [Missing Maps](https://www.missingmaps.org/)