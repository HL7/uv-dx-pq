**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

In addition there are format specific definitions files.

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTL](examples.ttl.zip)

**PQI Type 1 templates:** blank PQI Type 1 documents with every ICH M4Q(R1) heading coded and each lowest-level heading marked "Not started", ready to load into a structured authoring tool:

* [pqi-type1-templates.zip](pqi-type1-templates.zip): all templates in XML and JSON, with a README. One document for 2.3 Quality Overall Summary, and one per level-3 Module 3.2 heading: 3.2.S.1 to 3.2.S.7, 3.2.P.1 to 3.2.P.8, 3.2.A.1 to 3.2.A.3 and 3.2.R, plus all Module 3.2 templates in one document collection
* Individual templates: [2.3](Bundle-bundle-pqi-type1-template-m23.html) · [Module 3.2 collection](Bundle-bundle-pqi-type1-template-m32-collection.html) · each Module 3.2 heading, e.g. [3.2.S.2](Bundle-bundle-pqi-type1-template-3-2-s-2.html) and [3.2.P.3](Bundle-bundle-pqi-type1-template-3-2-p-3.html) (see the [Artifacts](artifacts.html) page for all)

Before use, replace the bracketed metadata ([Product name], [Applicant], subject and document date), give each Bundle a new identifier, and for each heading you complete set the narrative status to "additional" and remove its emptyReason.

**Sakura Bloom examples:** 3.2.P.3, 3.2.P.7 and 3.2.R (US) from the ICH Sakura Bloom mock-up, at each type:

* [Type 1](Bundle-bundle-document-collection-pq-sakura-bloom-type1.html) · [Type 2](Bundle-bundle-document-collection-pq-sakura-bloom-type2.html) · [Type 3](Bundle-bundle-document-collection-pq-sakura-bloom-type3.html) · [Type 4](Bundle-bundle-document-collection-pq-sakura-bloom-type4.html)

All of this example data is synthetic. It comes from the ICH M4Q(R2) Sakura Bloom mock-up, the FDA example Quality Overall Summaries and the HL7 FHIR PQI team's example data. Content none of these provide is marked as synthetic where it appears, the US marketing authorization is made up, and every document is labelled as test data (HTEST).
