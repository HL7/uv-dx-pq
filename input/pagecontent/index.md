### Purpose
This implementation guide defines a universal realm FHIR specification for the creation and exchange of structured pharmaceutical quality data internationally within or between biopharmaceutical companies and their stakeholders.

### Scope
**In-scope**
- Products regulated as drugs (Small and large molecule medicinal products together with their functional and non-functional packing components; prescription, over the counter and hospital products)
- Development and authorized medicinal products
- Requirements for biopharmaceutical industry: industry transactions (See Background/Considerations for Implementation for further detail on this topic.)

**Out of scope**
- Products regulated as devices
- Veterinary drugs
- Requirements for regulator: regulator or industry: regulator transactions

Note that devices and veterinary drugs are only out of scope for version 1.0.0 of the implementation guide. New product lines will be brought in scope in future iterations.

### Technical Overview
This implementation guide is based upon FHIR version 5.0.0 and is a Universal Realm Specification.

### Audience
This guide is primarily meant for but not necessarily limited to organizations involved in the following activities:
- Medicinal product manufacturing
- Laboratory Information Management
- Contract manufacturing
- Biopharmaceutical regulatory affairs
- Developers (structured content authoring solutions, content management solutions, Laboratory Information Management Systems [LIMS])
- Business analysts and policy managers can also benefit from this guide.

### Background
#### Introduction to Pharmaceutical Quality
Pharmaceutical quality, also known as Chemistry, Manufacturing, and Controls (CMC) or just “Quality”, describes how a medicinal product is developed and manufactured; what suppliers and sites are involved; and the controls established to maintain the quality of the medicinal product over its lifecycle.

The scope, best practices, definitions, and content for pharmaceutical quality data are defined by the International Council for Harmonisation’s (ICH) M4Q: Quality Guidance Module 2.3 and Module 3. (See [references](best_practices.html).)

The exchange and maintenance of pharmaceutical quality data account for the majority of all internal and external data interactions, internationally, within companies and between a company and stakeholders. Despite much of the content being sourced from internal systems that support structured data (e.g., pharmaceutical development systems, manufacturing site systems), and much of it being available for reuse across many medicinal products, pharmaceutical quality content has typically been authored, managed, and transmitted in unstructured Word files or PDFs. This is not sustainable, given the increasing volume, complexity, and frequency of quality work.

#### Strategic Goals
In an effort to adopt a more efficient operating model, the biopharmaceutical industry is about to transition into its third era or paradigm and, in addition to other benefits, this implementation guide will help accelerate this transition (see figure below). These eras are summarized as follows:
- The first was the pre-2003 era, it was defined by paper documents printed, published into binders and physically delivered to international health authorities via courier. Supported by manual and effort intensive processes. Limited throughput.
- The second was the 2003 to 2023 era, it was defined by electronic paper documents (E.g., (PDF) or Microsoft Word) published and delivered to international health authorities via electronic submission gateways. Supported by simple/automation and effort intensive processes. Increased throughput but still limited throughput.
- The third, which is about to begin, is the post-2023 era, it will be defined by structured data delivered via high-frequency application programming interfaces (APIs) and processed by artificial intelligence (AI) agents. Advanced automation, low effort, high volume, high frequency, and high throughput.

***Figure: Advancement of the Submission and Decision-Making Ecosystems:*** The biopharmaceutical industry s undergone previous transformation from paper-based submission to electronic paper submission. The industry is at the beginning of the next iteration of transformation, as signified by a transition to FHIR API data submission. This will be followed by further advancement as AI algorithms become increasingly prevalent. As the industry progresses in its journey towards digital maturity, faster submission and review processes will be made possible.
<table><tr><td><img src="pharm_industry_timeline.png" /></td></tr></table>

Currently, the end-to-end timescale for the pharmaceutical regulatory workflow is measured in months and years. This new paradigm, facilitated by this implementation guide, will use FHIR APIs and other supporting technologies to reduce the potential time for data exchange from months to days, hours, minutes, and eventually sub-seconds.

Establishing a viable, real-time method to exchange product quality information across biopharmaceutical manufacturing organizations can help to facilitate technology transfer, allow enhanced monitoring of external or disseminated facilities, and can potentially support developing advanced manufacturing methodologies, such as point-of-care manufacturing.

Importantly, spurring innovation in the biopharmaceutical sector is only one benefit of this real-time data exchange approach. Ultimately, the approaches highlighted within this implementation guide will help bring high quality medicinal products to market faster, and in a more cost-effective manner. This will also help create more robust manufacturing processes and more manageable global supply chains. This in turn will help reduce manufacturing down time, reduce the chance of shortages, and increase product quality and data compliance. Taken together, each of these benefits will enable speedier patient access to new treatments and minimize the post-approval life-cycle management burden for sponsors, while contributing favorably to overall global patient experience.

### Considerations for Implementation
The following figure depicts (1) a potential future data pipeline for implementers; and (2) the intended scope of this IG’s use relative to the regulatory submission preparation workflow. The figure, and the following description, are provided to facilitate discussion and understanding of how to use this implementation guide.

***Figure: FHIR Data Pipeline for Pharmaceutical Quality (Industry)***
<table><tr><td><img src="FHIR_Data_Pipeline_PQ_Industry_840.png" /></td></tr></table>

In summary, this potential future data pipeline could work as follows, 
- Step I: Data from source systems (e.g., LIMS) is produced and delivered in a FHIR compliant format to downstream systems designed to manage regulatory information.
- Step II: Regulatory systems collate the data into individual Resources and Profiles (See Domains Overview for further detail). This may include a mix of submittable and non-submittable content (e.g., transactional details). When preparing for submission, the submittable content is extracted and bundled to prepare for further transformation.
- Step III: The submittable content is transformed into a submission ready format compliant with the relevant standards prescribed by each regulator. The FHIR compliant XML can then be transformed into any output format stipulated by any regulator. E.g., the FHIR XML can be transformed to another form of FHIR compliant XML or JSON; transformed to PDF; or transformed to Word. The transformer(s) are designed to make the output comply with content and style requirements as needed.
- Step IV: The submission ready output undergoes validation, or any other required processing steps, to confirm compliance with a regulator’s defined technical and business rules.
- Step V: The validated submission ready output is delivered via the regulator’s accepted method of exchange (e.g., FHIR API).

The scope of this implementation guide only covers data exchange activities for Step I, Step II, and Step III. The activities depicted in Step IV and Step V are out of scope for this implementation guide since they are determined by national regulations and regulatory guidance.

### Project Team
*Biopharmaceutical industry:*
- Rita Algorri, Amgen Inc.
- Sheetal Gaiki, Johnson & Johnson
- Mike Abernathy, Amgen Inc.
- Craig Anderson, Pfizer Inc.
- Colin Wood, AstraZeneca 

*Lantana Consulting Group:*
- Rik Smithies
- Rob Hausam
- Diana Wright

### Acknowledgements
This guide is developed and produced through the efforts of Health Level Seven International (HL7) as part of the Pharmaceutical Quality (Industry) project ([Project ID 1800](https://www.hl7.org/special/Committees/projman/searcbleProjectIndex.cfm?action=edit&ProjectNumber=1800) and [Project Scope Statement: PSS-2145](https://jira.hl7.org/browse/PSS-2145)).

The project team appreciates the support and sponsorship of the HL7 Public Health Work Group, and all volunteers and staff associated with the creation of this resource. The team appreciates the comments and input from the biopharmaceutical community as well as the HL7 volunteers who participate in the Biomedical Research and Regulation Work Group.

Health Level Seven, HL7, FHIR and the [FLAME DESIGN] are registered trademarks of Health Level Seven International, registered in the US Trademark Office. For acknowledgement of terminology content, please see the [IP Statements section](downloads.html).