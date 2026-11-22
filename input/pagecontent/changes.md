This page lists the changes to this Implementation Guide, newest first.

### Version = current (unreleased)

Adds PQI document maturity Types 1–4 and a Build section that shows how to produce each type.

#### Not-Compatible
- None

#### Compatible, Substantive
- Added base document profiles BundleDocumentPq and CompositionDocumentPq, and the abstract intermediates CompositionProductPq and CompositionLinkedPq. (FHIR-nnnnn)
- Added Bundle and Composition profiles for PQI Types 1, 2, 3 and 4, and the BundleDocumentCollectionPq collection profile. (FHIR-nnnnn)
- CompositionType1Pq: section narrative status is checked by invariant pqi-t1-2 (authored "additional", or "empty" with emptyReason "notstarted" in a blank template) instead of being fixed to "additional". (FHIR-nnnnn)
- Added terminology: ctd-section-pq CodeSystem (M4Q(R1) headings), template ValueSets (vs-ctd-m23-r1, vs-ctd-m32-r1), vs-ctd-section-pq, vs-ctd-repeatable-pq, vs-ctd-document-root-pq, vs-ctd-replaceable-pq, pqi-document-type and pqi-maturity-type. (FHIR-nnnnn)
- Added RegulatedAuthorizationPq and AdministrableProductDefinitionPq profiles. (FHIR-nnnnn)
- Analytical procedure, stability, specification and manufacturing Bundle profiles now allow 1..* Protocol entries (was 1..1). (FHIR-nnnnn)
- Corrected the context of Extension-batch-storage-duration-pq to Specimen.processing.time[x]. (FHIR-nnnnn)
- Changed the workflow-triggeredBy and medication-manufacturingBatch extension slices on MedicationBatchInformationDrugPq, DiagnosticReportAnalysisDrugPQ, ObservationTestResultDrugPq and SubstanceDrugPq to 0..1, matching the extension definitions, so snapshots generate. (FHIR-nnnnn)

#### Non-Substantive
- Added the Build menu: overview, one page per type, and validation guidance. (FHIR-nnnnn)
- Added blank PQI Type 1 templates (ICH M4Q(R1)): one document for 2.3 and one per level-3 Module 3.2 heading, plus a Module 3.2 collection, downloadable as XML and JSON (pqi-type1-templates.zip). (FHIR-nnnnn)
- Added Sakura Bloom examples at Types 1–4 (3.2.P.3, 3.2.P.7 and 3.2.R US documents in a collection per type). (FHIR-nnnnn)
- The Sakura Bloom examples include synthetic content for headings the mock-up does not cover, rebuilt figures and a fictitious US marketing authorization. They are labelled as synthetic test data from the ICH Sakura Bloom mock-up, the FDA example Quality Overall Summaries and the HL7 FHIR PQI team. (FHIR-nnnnn)
- Updated Home, Getting Started, General Principles & Design and Downloads for the maturity types. (FHIR-nnnnn)
- Clarified that CompositionDrugPQ is the domain text-section building block. (FHIR-nnnnn)
- Added this Change Log. (FHIR-nnnnn)

### Version = 1.0.0
- Original release (STU1).
