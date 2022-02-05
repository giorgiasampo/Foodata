# FOOData project

### Introduction

FOOData was created for the Open Access and Digital Ethics exam by Vanessa Bonanno, Giorgia Sampò, and Sarah Tew.FOOData explores food production, pollution, and health markers within Europe both individually and together to get a clearer picture of their interlation. FOOData uses geospatial visualizations to reconnect users with the geographic reality of food production and pollution. 

### Scenario

This project aims to show connections between food production, pollution and health conditions in European countries from 2009 to 2019, focusing in particular on different countries' production of food, their health, and pollution status.

We hypothesize that areas with more agricultural pollution will have worse health outcomes and that different types of pollution and food production affect health differently.

To do so we collected data from EUROSTAT, the European Environmental Agency and FAOSTAT.


#### **Crops and livestock production**

The production section is based on data found at FAOSTAT, the Food and Agriculture Organization Corporate Statistical Database maintained by the statistics division of the Food and Agriculture Organization of the United Nations.

FAOSTAT presents a huge dataset on food and agriculture with data from over 245 countries and territories with a time span which goes from 1961 to 2020. Data are divided into 13 diverse domains, such as trade, prices, population and employment, but also forestry, land, climate change and food production. In turn, food production is divided in three main categories: Crops and livestock products, Production indices, Value of agricultural production. 

#### **Pollution and environmental damage**

This datasets is devoted to pollution issues and environmental damages in European countries and was obtained from the mesh-up of 5 datasets coming from Eurostat and one form the European environmental Agency. 

The dataset published by Eurostat were also collected from other sources such as JRC, FADN and EEA itself.
Another important aspect of these datasets was the fact that they did not adopt all the same NUTS classification for geographical locations nor they had the same chronological organization. 

#### **Life expectancy**

FOOData uses life-expectancy to indicate overall population health. This data comes from Eurostat: Life expectancy by age, sex and NUTS 2 region. The original dataset contained life expectancies by age, sex, NUTS 2, NUTS 1, and NUTS 0 regions from 1990 to 2019. The FOOData edited dataset limits the Eurostat data to life expectancy at birth from 2010-2019 in current EU member countries.


### General analysis

We started by collecting the original datasets in an excel table. You can download it [here](https://github.com/giorgiasampo/Foodata/blob/main/datasets/Datasets.pdf).



### Quality analysis of datasets

About data quality, we decided to follow four standards presented in the [Open Data Goldbook for Data Managers and Data Holders](file:///C:/Users/vanez/AppData/Local/Temp/european_data_portal_-_open_data_goldbook.pdf), provided by the European Data Portal: completeness, timeliness, accuracy and reusability.

- Completeness: are the datasets complete?
- Accuracy: are the datasets accurate enough for their purpose?
- Timeliness: are the data up to date?
- Reusability: are the datasets made available under an **open license** so that they can be reused?


#### Eurostat

As for the datasets from Eurostat, they are well described thanks also to the explanatory texts (metadata). As for completeness, it depends on the availability of national data from statistical institutes. Instead, with regard to consistency, it is reported in the metadata that "the data are checked for completeness, internal consistency, and consistency over time and coherence with other relevant data sources". On the other hand, there is a lack of explicit information regarding accuracy. The data are explorable, editable and filterable. However, they can be downloaded in a few formats. The indicators are sufficient but sometimes unclear. The updating is explicitly reported.

#### FAOSTAT

The [FAO Statistics Quality Assurance Framework](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj4pvSe-ej1AhVag_0HHf9rDGAQFnoECAwQAw&url=https%3A%2F%2Funstats.un.org%2Funsd%2Funsystem%2FDocuments%2FQAF-FAO-1.pdf&usg=AOvVaw3L-_WIQ8YffLTqDLqBFN-L) (FAO SQAF) includes a definition of quality,
and a series of principles to adhere to, in order to ensure the quality of FAO statistical
production processes and statistical outputs. Each principle is accompanied by
corresponding good practices, which provide practical guidance on how to assure
compliance with the principle. Some reported good practices are already applied by the FAO
statistical system, while other aspects are still being developed.

#### European Environment Agency

The [Water Pollution dataset](https://www.eea.europa.eu/ims/ecological-status-of-surface-waters) found at EEA website relies on _WISE Water Framework Directive Database_

WISE is an operational web based service where users can view and download maps and related information
on water quality being collected by European and international bodies. The sharing of water-related data
will enhance efficiency of data use and improve quality of assessments. WISE is thereby the water-related com-
ponent of a wider Shared Environmental Information System (SEIS) currently under development following
the concept of interoperable distributed data bases (Web 2.0). More information [here](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiqleXP_uj1AhVqgv0HHT-jBkIQFnoECAIQAQ&url=http%3A%2F%2Fwww.earthobservations.org%2Fdocuments%2Fsbas%2Fwa%2F77_WISE%2520Water%2520Information%2520System%2520for%2520Europe.pdf&usg=AOvVaw20x-sKFem3CziP1zYaR6ki).


### Legal analysis (same)

### Ethical analysis 

Ethical analysis was not considered in typical terms, since the choosen datasets are free of sensitive data since (they tend to represent very large geographical areas). Also personal informationn is not included, with the only exception of sex in the Life expectancy dataset by Eurostat. As averages the data gives information about the region as a whole and do not pose individual privacy risk.

However, for what regards air pollution, greenhouse gas emissions and surface water pollution there are chances of people acting on that information to look for better living standards outside countries boundaries, but that does not look like an ethical issue as much as a normal inferncial process granted to common citizens and perfectly sustainable. 

Life expectancy is an oft-used measure of health partly because it is much less sensitive and private than other health data. As an average it gives information about the population as a whole rather than individual members and does not pose individual privacy risks. 


, we considered different aspects: the centrality of the human being, equality and transparency, reliability and affidability, sustainability and finally the rationality in judgment which means the freedom from cognitive bias. The principles we relied on were the ones proposed by the document “Data Ethics: Principles and Guidelines for Companies, Authorities & Organisations”. 

### Technical analysis (here: format, metadata, URI etc, we can link or copy/paste)

### Mashup and output datasets  
FAIR data management -> In general terms, your research data should be 'FAIR', that is findable, accessible, interoperable and re-usable
Explain why our data are:
- findable
- accessible
- interoperable
- re-usable


### Sostenibility of the update the datasets over the time

FOOData is based on datasets from different sources, about food production, pollution and life expectancy in European Countries. This website has been created as the final project of the Open Access and Digital Ethics course of the Master Degree in Digital Humanities and Digital Knowledge at the University of Bologna: the dataset is not actively maintained, while the datasets used for this project are currently maintained by the relative institutions or organisations. GEO/GenOp is distributed under Creative Commons Attribution 4.0 International License (CC BY-SA 4.0)


