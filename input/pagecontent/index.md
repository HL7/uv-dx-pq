This FHIR implementation guide addresses needs of the biopharmaceutical industry for internal and external Chemistry, Manufacturing and Controls (CMC) data exchange. It defines a universal realm FHIR specification for the creation and exchange of CMC data internationally within biopharmaceutical companies and between a company and its stakeholders so that CMC content can be reused throughout the medicinal product lifecycle.

CMC data describe how a medicinal product is developed and manufactured; what suppliers and sites are involved; and the controls established to maintain the quality of the product over its shelf life. CMC data include the quality of drugs in clinical studies and the quality of the commercial drug available to consumers. Use of CMC data is essential to tracing adverse events back to the manufacturer and manufacturing site responsible for the medicinal product. CMC data are also important for management of drug supplies to avoid shortages.

This IG is developed for the Hl7 Data Exchange Industry – Pharmaceutical Quality (dx-PQ) project 
* [Project Proposal: PSS-2137](https://jira.hl7.org/browse/PSS-2137)
* [Project Scope Statement: PSS-2145](https://jira.hl7.org/browse/PSS-2145)

### Relation to Other Standards
This IG builds on and aligns with the [PQ/CMC FHIR Implementation Guide](https://build.fhir.org/ig/HL7/FHIR-us-pq-cmc/) where possible.

### Technical Overview
This implementation guide is based upon FHIR version 5.0.0 and is a Universal Realm Specification.

### Audience
This guide is primarily meant for developers of structured content authoring solutions, medicinal product manufacturers who produce CMC data, and those involved in pharmacovigilance analysis. Business analysts and policy managers can also benefit from the descriptions of the CMC data model provided in this guide.

### Background
Chemistry, Manufacturing and Controls (CMC) data exchange accounts for over 70% of all internal and external data interactions, internationally, within companies and between a company and stakeholders. Despite much of the content being sourced from internal systems that support structured data (e.g., pharmaceutical development systems, manufacturing site systems), and much of it being available for reuse across many medicinal products, CMC content has typically been authored, managed, and transmitted by industry in unstructured Word files or PDFs. This is not sustainable, given the increasing volume and frequency of work. In addition, authoring, managing, and transmitting unstructured information as Word files or PDFs are highly manual and error-prone processes that have the potential to impact global drug supply negatively as impediments to rapid response to global needs.

CMC content can be reused throughout the medicinal product lifecycle. For example, accurate identification when tracking product complaints; tracing adverse events (AEs) back to the site of manufacture; reusing the medicinal products composition in labelling. 

Other key areas of the medicinal product lifecycle are transitioning to FHIR and are already in HL7 working group portfolios (e.g., Adverse Event reporting[add links to IG]; [Retrieval of Real World Data for Clinical Research (RWD)](https://build.fhir.org/ig/HL7/vulcan-rwd/); and [Electronic Medicinal Product Information (ePI)](https://build.fhir.org/ig/HL7/emedicinal-product-info/). Therefore, there is great value in ensuring industry’s CMC data exchange is also defined in FHIR.

### Current Project

The FHIR resource profiles specified in this implementation guide represent structured data in the [ICH Quality Guidelines](https://www.ich.org/page/quality-guidelines). The structured data elements defined here support structured authoring (e.g., master data; advanced analysis) for the creation and exchange of Quality information internationally.