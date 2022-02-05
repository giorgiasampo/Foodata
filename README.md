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


### Legal analysis

The first thing we wanted to achieve was to have a complete overlook on the licenses our sources applied to their original datasets and at the emerging differencies. Doing so we structured our [legal checklist](https://giorgiasampo.github.io/Foodata/#metadata). We took into account the standards defined by the Open Data Goldbook for Data Managers and Data Holders and we took into account the four main directives of the Open Data release:

- Privacy: GDPR Regulation (EU) 2016/679, Regulation (EU) 2018/1807, Directive 2002/58/EC;

- PSI: Directive (EU) 2019/1024;

- CDSM: DIRECTIVE (EU) 2019/790;

- INSPIRE: Directive 2007/2/EC that define particular limitation on public access for the spatial and geo data.

We then checked for specific licenses applied by our sources:

#### EUROSTAT
It is under the Creative Commons Attribution 4.0 International (CC BY 4.0) license. Reuse is authorised as long as the source is acknowledged. The reuse policy of European Commission documents is regulated by Decision 2011/833/EU (OJ L 330, 14.12.2011, p. 39). In the Privacy policy section there is information about Personal Data Protection policy, which is based on Regulation (EU) No 1725/2018 of the European Parliament and of the Council of 23 October 2018 on the protection of natural persons with regard to the processing of personal data by the Union institutions, bodies, offices and agencies and on the free movement of such data (repealing Regulation (EC) No 45/2001 of 18 December 2000 and Decision No 1247/2002/EC).

#### EUROPEAN ENVIRONMENTAL AGENCY
EEA standard re-use policy: unless otherwise indicated, re-use of content on the EEA website for commercial or non-commercial purposes is permitted free of charge, provided that the source is acknowledged (https://www.eea.europa.eu/legal/copyright). Copyright holder: European Environment Agency (EEA). 
Information, documents and material available on this website and for which the EEA holds the rights of use are public and may be re-used without prior permission, free of charge, for commercial or non-commercial purposes, provided that the EEA is always acknowledged as the original source of the material and that the original meaning or message of the content is not distorted. Such acknowledgment must be included in each copy of the material. The re-use of the content on the EEA website covers the reproduction, adaptation and/or distribution, irrespective of the means and/or the format used. The re-use of certain data may be subject to different conditions, and if so the item concerned is accompanied by a copyright mark or other mention of the specific conditions relating to it. The above mentioned permissions do not apply to content supplied by third parties. Therefore, for documents where the copyright lies with a third party, permission for reproduction must be obtained from the copyright holder.

#### FAO 
It is under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 IGO (CC BY-NC-SA 3.0 IGO) license. You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material
The licensor cannot revoke these freedoms as long as you follow the license terms.
You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use. You may not use the material for commercial purposes. If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

### Ethical analysis 

Ethical analysis was not considered in typical terms, since the choosen datasets are free of sensitive data (they tend to represent very large geographical areas). Also, personal information is not included, with the only exception of sex in the Life expectancy dataset by Eurostat. As averages the data gives information about the region as a whole and do not pose individual privacy risk.

However, for what regards air pollution, greenhouse gas emissions and surface water pollution there are chances of people acting on that information to look for better living standards outside countries boundaries, but that does not look like an ethical issue as much as a normal inferncial process granted to common citizens and perfectly sustainable. 

Furthermore, Life expectancy is an oft-used measure of health partly because it is much less sensitive and private than other health data. As an average it gives information about the population as a whole rather than individual members and does not pose individual privacy risks. This dataset is largely free of gender bias, however recently binary gender classification into male and female has come under re-evaluation. That being said, the EU member states are bound by the same statistics reporting standards so the dataset is at least consistent in its use of two and only two genders.  

### Technical analysis

Our technical analysis is fully available at this [link](https://giorgiasampo.github.io/Foodata/index.html#metadata).

### EUROSTAT (STATISTICAL OFFICE OF THE EUROPEAN UNION)
Format: XLS, CSV, HTML, PC-AXIS, SPSS, TSV, PDF.

Metadata: A huge amount of metadata is also  provided, expressed in SDMX format, an ISO standard since 2013 for the exchange of statistical data and metadata in XML format. These metadata contain information on metadata updating, contacts, data presentation, units of measurements, reference period, institutional mandate, confidentiality, distribution policy, frequency of dissemination, accessibility, quality, relevance, accuracy, consistency, cost, review and any comments.

### EUROPEAN ENVIRONMENTAL AGENCY
Format: CSV, XLS

Metadata: Information and metadata are provided about last updates, contacts, unit used and the type of data, creation date, copyright, source, definitions and countries considered.

### FAO 
Format: CSV, XLS

Metadata: Information and metadata are provided about last updates, contacts, unit used and the type of data, creation date, copyright, source, definitions and countries considered.


### Mashup and output datasets  
FAIR data management -> In general terms, your research data should be 'FAIR', that is findable, accessible, interoperable and re-usable
Explain why our data are:
- findable
- accessible
- interoperable
- re-usable

### Sustainability

FOOData is based on datasets from different sources, about food production, pollution and life expectancy in European Countries. This website has been created as the final project of the [Open Access and Digital Ethics] course of the Master Degree in [Digital Humanities and Digital Knowledge] (academic year 2021/22) at the [University of Bologna]: the dataset is not actively maintained, while the original datasets used for this project are currently maintained by the relative institutions or organisations. 

### License

This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 IGO License. More about our license [here](https://giorgiasampo.github.io/Foodata/index.html#metadata).

### Visualizations 

### RDF assertions of the metadata

### Conclusion