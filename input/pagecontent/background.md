Chemistry, Manufacturing and Controls (CMC) data exchange accounts for over 70% of all internal and external interactions, internationally, within companies and between a company and stakeholders. Despite much of the content being sourced from internal systems that support structured data (e.g., pharmaceutical development systems, manufacturing site systems), and much of it being available for reuse across many medicinal products, all CMC content has been authored, managed, and transmitted by industry in unstructured Word files or PDFs. This is not sustainable, given the increasing volume and frequency of work. In addition, authoring, managing, and transmitting unstructured information as Word files or PDFs are highly manual and error-prone processes that have the potential to impact global drug supply negatively as impediments to rapid response to global needs.

CMC content can be reused throughout the medicinal product lifecycle. For example, accurate identification when tracking product complaints; tracing adverse events (AEs) back to the site of manufacture; reusing the medicinal products composition in labelling.
Other key areas of the medicinal product lifecycle are transitioning to FHIR and are already in HL7 working group portfolios (e.g., Adverse Event reporting***[add links to IG]***; Real World Data (RWD)***[add links to IG]***; electronic Product Information (ePI)***[add links to IG]***; and Pharmaceutical Quality)***[add links to IG]***. Therefore, there is great value in ensuring industry’s CMC data exchange is also defined in FHIR.

### Current Project
The current phase of this project is a universal realm implementation guide (IG) with profiles that define the structure and exchange of CMC data internationally within biopharmaceutical companies and between a company and stakeholders. This IG builds on and align with BR&R’s PQ project ***[add link and formal name]*** where possible. 
The scope of the current project covers the entirety of the CMC domain (as described ICH’s M4Q table of contents). ***[add link]*** It defines universal realm structured data elements to support structured authoring (e.g., master data; advanced analysis) for the creation and exchange of CMC documents internationally ( i.e., outside of the US realm). 
***STU 1 covers:***
* Stability Study
* Organization
* DP Identification
* DP Specifications
* Batch or Lot Information
* Manufacturing Process 
***Expectations for future versions include:***
* DP Composition
* DP Impurities
* Batch Analysis
* Container Closure System
* Analytical Methods
* Batch Formula
* Process Validation
* Compatibility

### Scenarios
This IG defines resources to support several scenarios.

1. Manufacturer already has an authorization to sell a drug. That authorization locks the manufacturer into manufacturing the drug with a specific process, specific equipment, and at a specific location.
1. Manufacturer wants to change the type of milling machine used in the drug manufacturing process. 
1. Manufacturer must first obtain health authority approval before making the equipment change. Approval is obtained by filing a regulatory application to the health authority. 
1. Manufacturer authors the supporting documents needed to justify the change to the health authority (Depending on the type of change, and the health authority, the application contains 10’s to 1,000’s of Word and PDF documents). 
1. Manufacturer bundles the supporting documents into an application and submits it to the health authority for review. Health authority issues an approval or rejection.