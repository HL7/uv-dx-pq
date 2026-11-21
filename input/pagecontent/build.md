### From documents to data: PQI Types 1–4

Most quality dossiers are still authored as Word documents under the ICH M4Q headings. This IG lets an implementer start there and move, one step at a time, to fully structured pharmaceutical quality data. Each step is a **PQI type**, and each type is a FHIR document (a `Bundle` of type `document` whose first entry is a `Composition`).

| | Type 1 | Type 2 | Type 3 | Type 4 |
|---|---|---|---|---|
| **Name** | Structured document | Document + product data | Linked document | Data-first document |
| **Bundle profile** | [BundleDocumentType1Pq](StructureDefinition-Bundle-document-type1-pq.html) | [BundleDocumentType2Pq](StructureDefinition-Bundle-document-type2-pq.html) | [BundleDocumentType3Pq](StructureDefinition-Bundle-document-type3-pq.html) | [BundleDocumentType4Pq](StructureDefinition-Bundle-document-type4-pq.html) |
| **Composition profile** | [CompositionType1Pq](StructureDefinition-Composition-type1-pq.html) | [CompositionType2Pq](StructureDefinition-Composition-type2-pq.html) | [CompositionType3Pq](StructureDefinition-Composition-type3-pq.html) | [CompositionType4Pq](StructureDefinition-Composition-type4-pq.html) |
| **Section headings** | M4Q(R1) template, coded | Same | Same | Same |
| **Section narrative** | Required, authored | Required, authored | Required, with `id` anchors | Optional on replaceable headings |
| **Images** | `Binary` + `DocumentReference` entries | Same | Same | Same |
| **Other resources** | None | Product, packaging, organizations, substances, authorization | Type 2 + any PQI domain resource | Same as Type 3 |
| **`section.entry`** | Image DocumentReferences only | Product data section, plus images | Any CTD section, linked to the narrative | Any CTD section; sole content of replaceable sections |
| **Effort** | Convert the Word template | + map master data | + link narrative to data | + generate data from source systems |

Each type builds on the one before, so tooling and examples can be layered. The Build pages explain how to produce each type:

* [Build PQI Type 1: Structured document](build_type1.html)
* [Build PQI Type 2: Document + product data](build_type2.html)
* [Build PQI Type 3: Linked document](build_type3.html)
* [Build PQI Type 4: Data-first document](build_type4.html)
* [Validate and QA a PQI document](build_validate.html)

### Which type should I build?

| You are… | Start with |
|---|---|
| A sponsor whose Module 2.3 and Module 3 live in Word | Type 1 |
| A sponsor with a RIM or IDMP system holding product master data | Type 2 |
| A vendor of CMC authoring tools | Type 3 |
| A sponsor whose quality data lives in LIMS, MES or QMS systems | Type 4 |

### Document granularity

The IG fixes how a dossier is cut into documents; implementers do not choose. That lets a document be reused unchanged across markets, and replaced on its own when one part changes. The same manufacturing process means the same 3.2.P.3 document everywhere; a market-specific formulation means a different 3.2.P.1 for that market.

* **Module 2.3:** one document, with a single top-level section coded `2.3`.
* **Module 3.2:** one document per level-3 heading: 3.2.S.1–3.2.S.7 per drug substance (and manufacturer), 3.2.P.1–3.2.P.8 per drug product, 3.2.A.1 / 3.2.A.2 / 3.2.A.3 per item, and 3.2.R per region. Lower-level headings (e.g. 3.2.P.3.1) stay as sections inside their document. One drug substance plus one drug product is 15 documents, plus any 3.2.A and 3.2.R documents.
* Each Module 3.2 document has exactly one CTD top-level section, coded from [vs-ctd-document-root-pq](ValueSet-vs-ctd-document-root-pq.html), and names its drug substance or drug product in `Composition.subject`.
* Small documents (e.g. 3.2.S.5) are never merged into larger ones, and one document never spans several level-3 headings.
* Any group of documents – a full Module 3.2, or a subset such as 3.2.S.1–3.2.S.7 for one substance – is sent as a [BundleDocumentCollectionPq](StructureDefinition-Bundle-document-collection-pq.html). Documents in one collection can be at **different types**, e.g. 3.2.P.3 at Type 4 next to 3.2.P.2 at Type 1, so maturity can grow one document at a time.
* Resources that appear in several documents keep the same identifiers, so links between documents resolve by identifier, not by Bundle-local id.

How documents and collections are exchanged is out of scope for now.

### Section headings

Sections are coded with [CtdSectionPq](CodeSystem-ctd-section-pq.html), which holds the ICH M4Q(R1) headings of Module 2.3 and Module 3.2. M4Q(R1) is final and implemented; M4Q(R2) is still a draft, so its headings will be added once ICH finalizes it. For 3.2.R only the top-level heading is coded: sub-sections carry the regulator's own headings and are exempt from the CTD hierarchy rule.

A heading that can repeat inside one document (2.3.S per drug substance, 2.3.P per drug product, listed in [vs-ctd-repeatable-pq](ValueSet-vs-ctd-repeatable-pq.html)) is repeated as a sibling section. From Type 2 on, each repeat names what it is about in `section.focus`; in Type 1 the repeats are told apart by `section.title`. Keep `focus` and `entry` apart: **focus says what a whole section is about, entry says what data is in it.** The focus target never also appears in the same section's entries.

### How the types relate to the domain Bundles

The [domain](domains.html) collection Bundles (e.g. [Organizations](organizations.html), [Stability Study](stability.html)) remain the way to exchange one kind of quality data. In Types 2–4 the same resource profiles appear inside documents, and in Type 4 they become the content model of the sections whose narrative they replace.

### Design principle

Profiles carry the structural rules, and quality checks live in external validation. Rules that FHIRPath cannot check reliably – such as narrative anchors and image references – are stated as conformance rules on these pages and enforced by implementers' validation apps. See [Validate and QA](build_validate.html).
