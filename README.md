# FOOData project

### Introduction

FOOData was created for the [Open Access and Digital Ethics](https://www.unibo.it/it/didattica/insegnamenti/insegnamento/2020/424645) exam by Vanessa Bonanno, Giorgia Sampò, and Sarah Tew. FOOData explores food production, pollution, and health markers within Europe both individually and together to get a clearer picture of their interlation. FOOData uses geospatial visualizations to reconnect users with the geographic reality of food production and pollution. 

### Scenario

This project aims to show connections between food production, pollution and health conditions in European countries from 2009 to 2019, focusing in particular on different countries' production of food, their health, and pollution status.
We hypothesize that areas with more agricultural pollution will have worse health outcomes and that different types of pollution and food production affect health differently. To do so we collected data from EUROSTAT, the European Environmental Agency and FAOSTAT.

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

The first thing we wanted to achieve was to have a complete overlook on the licenses our sources applied to their original datasets and at the emerging differencies. Doing so we structured our [legal checklist](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4jTDM9La_zBVXOWZ2kFlT-qN_4PL3nnhY1UyXkulzJduMhlx82bKH6FJng07FVCMEo1TvN7SwZUCQ/pubhtml?gid=1678542567&single=true). We took into account the standards defined by the Open Data Goldbook for Data Managers and Data Holders and we took into account the four main directives of the Open Data release:

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

Our technical analysis is fully available at this [link](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4jTDM9La_zBVXOWZ2kFlT-qN_4PL3nnhY1UyXkulzJduMhlx82bKH6FJng07FVCMEo1TvN7SwZUCQ/pubhtml?gid=2120843932&single=true).

#### EUROSTAT (STATISTICAL OFFICE OF THE EUROPEAN UNION)
Format: XLS, CSV, HTML, PC-AXIS, SPSS, TSV, PDF.

Metadata: A huge amount of metadata is also  provided, expressed in SDMX format, an ISO standard since 2013 for the exchange of statistical data and metadata in XML format. These metadata contain information on metadata updating, contacts, data presentation, units of measurements, reference period, institutional mandate, confidentiality, distribution policy, frequency of dissemination, accessibility, quality, relevance, accuracy, consistency, cost, review and any comments.

#### EUROPEAN ENVIRONMENTAL AGENCY
Format: CSV, XLS

Metadata: Information and metadata are provided about last updates, contacts, unit used and the type of data, creation date, copyright, source, definitions and countries considered.

#### FAO 
Format: CSV, XLS

Metadata: Information and metadata are provided about last updates, contacts, unit used and the type of data, creation date, copyright, source, definitions and countries considered.


### Mashup and output datasets  

Since not all the original datasets contained data for every year or, for example, for every country, we decided to limit the time span to only ten years and to focus only on consistent mashups and final mashups and visualizations. Also, when there is absence of data, this is clear in the visualization.

We decided to investigate six different situation, that you can find in the visualization section:
- Food Production and Life Expectancy by Country
- Farm Industrialization Level and Life Expectancy
- Air Pollution and Life Expectancy by Country
- Greenhouse emissions and food production
- Greenhouse gas pollution per sector
- High, low and medium input farms per year

Doing this, we followed the FAIR principles stated by the [Guidelines on FAIR Data Management in Horizon 2020](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZ67H8ien1AhWPgf0HHSSJDR4QFnoECAcQAQ&url=https%3A%2F%2Fec.europa.eu%2Fresearch%2Fparticipants%2Fdata%2Fref%2Fh2020%2Fgrants_manual%2Fhi%2Foa_pilot%2Fh2020-hi-oa-data-mgt_en.pdf&usg=AOvVaw0RrG7kc_LE3Hp74lceZDA5). In other words, we pursued the idea of making our research data findable, accessible, interoperable and re-usable (FAIR).

Findable:

- (Meta)data are assigned a unique identifier: both the data we retrieved in the original datasets, the mashed up data and the metadata we created according to the DCAT-AP are compliant with this point, presenting URI.

- Data are described with rich metadata: we associated a rich amount of metadata compliant with the DCAT-AP specification, including not only all the mandatory classes with their respective mandatory properties but also some recommended and optional properties that were useful for our data.

- Metadata clearly and explicitly include the identifier of the data they describe: for each dataset that is part of a catalogue and for our own dataset we associated to the metadata a unique identifier of the data described by means of the DCAT-AP optional property for datasets dct:identifier.

Accessible:

- (Meta)data are retrievable by their identifier using a standardised communications protocol: All the data we collected and mashed up and the relative metadata are retrievable through the HTTP or its extension HTTPS. Moreover, we provided also an explicit and clear contact protocol in the metadata by means of the names and emails of the data and metadata providers.

- The protocol is open, free, and universally implementable: HTTP and HTTPS are compliant with these characteristics.

- Metadata are accessible, even when the data are no longer available: metadata will remain accessible from the metadata web page of this web resource.

Interoperable:

- (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation: we used JSON, CSV and XML for the representation of the mashed up data and RDF with the Turtle syntax to describe and structure the metadata.

- (Meta)data use vocabularies that follow FAIR principles. We used the ISO 3166-1 alpha-3 standard vocabulary to represent nations, the International Classification of Diseases for the health domain and the Linked Open Data vocabulary specification called DCAT-AP. These vocabularies are documented and resolvable using globally unique and persistent identifiers.

Reusable:

- Meta(data) is richly described with a plurality of accurate and relevant attributes: our data and metadata are described through a rich and vary series of labels including the date of collection and modification of the data, the licence, the publisher, the creator, their content.

- (Meta)data are released with a clear and accessible data usage license: ODOHTEU datasets are released under the Creative Common License CC BY-SA 4.0, which is specified for the dataset and respective metadata we created.

- (Meta)data are associated with detailed provenance: our project includes information about the provenance of data in a machine-readable format in the metadata codification.

- (Meta)data meet domain-relevant community standards: we used the ISO 3166-1 alpha-3 standard for geographic information and the International Classification of Diseases for the health domain.

The above-mentioned principles include 3 types of entities: data, metadata and infrastructure. Given the analysis, we can state that our research data are compliant with the FAIR principles.

### Sustainability

FOOData is based on datasets from different sources, about food production, pollution and life expectancy in European Countries. This website has been created as the final project of the [Open Access and Digital Ethics](https://www.unibo.it/it/didattica/insegnamenti/insegnamento/2020/424645) course of the Master Degree in [Digital Humanities and Digital Knowledge](https://corsi.unibo.it/2cycle/DigitalHumanitiesKnowledge) (academic year 2021/22) at the [University of Bologna](https://www.unibo.it/it): the dataset is not actively maintained, while the original datasets used for this project are currently maintained by the relative institutions or organisations. 

### License

This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 IGO License. More about our license [here](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4jTDM9La_zBVXOWZ2kFlT-qN_4PL3nnhY1UyXkulzJduMhlx82bKH6FJng07FVCMEo1TvN7SwZUCQ/pubhtml?gid=0&single=true).

### Visualizations 
To allow users to make full use of the data, twelve visualizations have been developed: of them six are general mappings of the phenomena under consideration, namely two for food production, three for pollution and one for health in European countries. 
These first visualizations are pretty complex and aim at representing in a straighforward and complete way each of the thematics treated in this project.
The other six visualizations adopt a "philosophy" aiming to follow a simple and essential line to avoid falling into the error of looking for too convoluted visualizations. Here the ultimate goal is to always provide a picture that is clear and never ambiguous, preferring substance to form.
### RDF assertions of the metadata
In order to reach the objective of giving the user better reusable and interoperable data, their metadata are provided, following the DCAT_AP version 2.0.0 documentation. Metadata are provided for the whole final dataset, but also for each of them individually.

### Analysis

We started by wondering whether areas with more agricultural pollution will have worse health outcomes and how different types of pollution and food production are correlated with life expectancy.

The outcomes of our search made it clear that there are correlations between these three dimensions, in a time span of ten years and considering the European Countries as spatial area. In particular, we noticed some interesting correlations in our mashup visualizations.

#### Pollution

From the visualizations we developed and the data we used, it is possible to notice how greenhouse gas emissions seems to be stronger in central europe and UK, except for Italy, while the same cannot be said for air pollutants, which show a major concentration also in Turkey, Spain and Italy itself. This last value seems to be diminishing coming closer to recent times, while the first countries interms of greenhouse gas production remain Germany, France and UK, wirh a relevant change in the maximum amount of greenhouse gas tonnes coming from almost 56 thouand tonnes in 2011 to less than 50 thousand the year later.

For what regards high, low and medium input farms the countries that present the higher amounts of hectares employed are still central Europe, UK, Germany and Spain, while the soil erosion levels seem to be higher in Germany and northern Italy, Eastern europe along the coast and the center of UK itself. These latter values here seem no to show considerable variations among the years, while the amount of high input farms show an increment from 2010 to 2014 and a decrease in the latter years in favour of low or medium input farms, depending on the country.

Looking at surface water pollution percentage, the highest values are shown in Poland and Belgium, followed by Germany, Luxembourg, France, Spain and UK, that, along with Hungary cover the last 10% of the scale. Following we have Latvia, Finland, Lithuania, Czech Republic, Italy and Sweden. This puts under the highlight, as alwasys, the center of Europe plus Spain and Uk, but adds the norther Countries, since now left untouched from pollution issues. The relation between irrigable and irrigated land seems stable.

#### Food Production and Life Expectancy by Country

Considering the production of meat (cattle, chicken and pig), the three major productors in Europe are Germany first, followed by Spain and France. If we take into consideration the life expectancy in these three countries, we will notice the subsequent trends (in a time span of 10 years):

- life expectancy for males in Germany is the lower of the three countries, with a value near 78 years old and France is next with value 79 y.o.;
- Germany is again the first for lowest life expectancy for females with 83 years old, while Spain and France values are 85 y.o.

It is striking how Germany is the greatest producer of meat (pig meat in particular) and also has the lowest life expectancy between the three major producers. Also, we must underline the food production is not a synonym of food consumption: the correlations found in this map are probably significant, but only demonstrative, thus further analysis should be done.


#### Farm Industrialization Level and Life Expectancy

About this mashup, the territories that pop up for high- and medium- and low-input farms are some regions in France, Spain, Poland, Lithuania and the norther portion of Finland too.  
In regards of the life expectancy in the quoted countries, we can notice how the males in Lithuania have the lower expectancy: only 69 years old. Then 72 years old in Poland, 77 in Finland and France with 79. 
The schema seems to repeat even for the females media of life expectancy values: 79 years old in Lithuania, 81 in Poland, 83 in Finland, 85 in Spain and 86 in France.
Concearning this analysis it seems the dimension of farms is not relevant if related to life expectancy.

#### Air Pollution and Life Expectancy by Country

Some peculiar correlations were found between life expectancy (total of females and males) and air pollution. The most polluted air is to be found in Italy, France and Poland (higher than 3000000); Germany and Spain have still relevant values (higher than 2000000). Interestingly, the only country that has both a quite low life expectancy (76 years old circa) and a high sum of pollutants is Poland. The other mentioned countries have a life expectancy over 80 years old. In particular, Italy has the higher life expectancy (83 years old circa) and France the higher air pollutants (3600000 circa).

#### Greenhouse gas emissions and food production by Country

For this visualization we opted for a graph that takes into account greenhouse pollutants (carbon dioxide, hydrofluorocarbones, methane, nitrogen trifluoride, nitrous oxide, perfluorocarbones, sulphur hexafluoride), agriculture products (rice paddy, potatoes and wheat) and livestock products (meat: cattle, pig, chicken; eggs; cheese; milk) in 10 years, considering the media of the emissions and food production of the mentioned categories in this period. It turned out that:
- the major productors in the agriculture sector are: 1. France, 2. Germany, 3. Poland, 4. Romania, 5. Italy
- instead, in the livestock products sector: 1. Germany, 2. France, 3. Poland 4. Netherlands, 5. Italy, 6. Denmark, 7. Ireland

It is important to notice that Ireland is only at seventh position as livestock producer and it covers an even lower position for what concearns agricultural sector. The fact that in ten years this Country produced the majority of pollutants in Europe (490 tonnes circa) is relevant in our graphs. Probably the pollution there is not strictly related to the food production, a question that goes beyond our study. Also Portugal is one of the most polluted countries in these 10 years, but the production values are not relevant.

If we consider the most productive States, Germany, France and Italy recorded quite high greenhouse pollution values. A bright spot is Cyprus with a negative value on emissions (-66 tonnes), but also one of the less productive countries in Europe.

#### Greenhouse gas emissions per sector

The data regarding greenhouse gas emissions is divided in Agriculture and Land use plus forestry: while the first value is almost always positive the second is almost aleways negative. This is due to the fact that this second sector tend to absorb CO2 from the atmosphere, while the first tends to produce it, and the missions in this sector can be reduced to CO2 calculations )that is what is possible to be done in the dataset). 
That said it was possible to observe a common trend considering the whole 27 (or 28) european countries, which consist in a slight decrease in absorbed CO2 and a stable production, around 400K of tonnes: while the peaks in such negative production can be observed around 2014 in countries such as Greece, Slovenia and Slovakia, with a relative increase or stabilization in the following years, the other countries experienced a sligh increase from 2014 on, with the exception of Czechia and Estonia that had a sharper growth and Hungary, which decreased in 2014 and Iceland and UK that maintained a stable positive value on that field. Turkey makes an exeption being the lowest point around a negative of 100k tonnes.
Regarding agriculture the production seems much more stable, with higher values comprised between 20k and 40k in Turkey, Spain, Romania, Poland, Italy, and peaking at 50k in France.

#### High, Low and Medium input farms

The countries that show an overall higher production here are France, Spain, Germany, UK, Poland, Romania and Italy, with regions of France and Spain following stictly after, overcoming even on entire other countries such as Scotland and Hungary: this situation remains unchanged until 2019 where Romania is also overcome by Centro (ES).
The overall tendency sees a small decrease on high input farms over the years, in favour of low and medium input fams, but overall the production seems evenly subdivided, except for Romania and Spain where high input farming seems privileged.


