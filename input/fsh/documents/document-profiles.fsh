// PQI document maturity types 1-4: Composition and Bundle profiles.
//
// Composition hierarchy                      Bundle hierarchy
//   CompositionDocumentPq (abstract)           BundleDocumentPq (abstract)
//   +- CompositionType1Pq                      +- BundleDocumentType1Pq
//   +- CompositionProductPq (abstract)         +- BundleDocumentType2Pq
//      +- CompositionType2Pq                   +- BundleDocumentType3Pq
//      +- CompositionLinkedPq (abstract)       +- BundleDocumentType4Pq
//         +- CompositionType3Pq              BundleDocumentCollectionPq (collection of document Bundles)
//         +- CompositionType4Pq
//
// The abstract intermediates exist because a derived profile cannot relax its parent:
// Type 2 forbids entries in CTD sections and Types 1-3 require narrative, while Type 4 needs both.

// ---------------------------------------------------------------- Compositions

Profile: CompositionDocumentPq
Parent: Composition
Id: Composition-document-pq
Title: "Composition - PQI Document (base)"
Description: "Abstract base for the Composition of every PQI document (Types 1-4): a CTD Module 2.3 or Module 3.2 document whose sections are coded with the ICH M4Q(R1) headings."
* ^status = #active
* ^abstract = true
* obeys pqi-sec-0 and pqi-sec-2 and pqi-gran-1
* status MS
* type MS
* type from VsPqiDocumentType (required)
* type ^short = "Module 2.3 QOS or Module 3.2 document"
* category 1..1 MS
* category from VsPqiMaturityType (required)
* category ^short = "PQI maturity type (type-1 ... type-4)"
* subject MS
* date MS
* author MS
* title MS
* relatesTo MS
* section 1..* MS
* section obeys pqi-sec-1 and pqi-sec-2 and pqi-foc-1 and pqi-foc-3
* section.title 1..1 MS
* section.code 1..1 MS
* section.code from VsCtdSectionPq (extensible)
* section.code ^short = "CTD heading (ctd-section-pq); regional sub-sections of 3.2.R use the regulator's own codes"
* section.focus MS
* section.focus ^short = "What a repeated container section is about (e.g. the drug substance of a 2.3.S section)"
* section.text MS
* section.entry MS

Profile: CompositionType1Pq
Parent: CompositionDocumentPq
Id: Composition-type1-pq
Title: "Composition - PQI Type 1"
Description: "PQI Type 1 (structured document): a 1:1 conversion of a CTD Module 2.3 or Module 3.2 template into coded sections with narrative. Images are separate Bundle entries (Binary + DocumentReference); no other resources are referenced."
* ^status = #active
* ^abstract = false
* obeys pqi-txt-1 and pqi-t1-1 and pqi-t1-2
* category = PqiMaturityType#type-1
* subject.reference 0..0
* subject ^short = "Display text only (e.g. drug substance or product name)"
* author.reference 0..0
* author ^short = "Display text only (e.g. applicant name)"
* contained 0..0
* section.entry only Reference(DocumentReferenceDrugPq)
* section.entry ^short = "Image DocumentReferences only"

Profile: CompositionProductPq
Parent: CompositionDocumentPq
Id: Composition-product-pq
Title: "Composition - PQI Document with Product Data (base)"
Description: "Abstract base for PQI Types 2-4: the document references its drug product or drug substance and its applicant, and lists product data resources in a Product data section."
* ^status = #active
* ^abstract = true
* obeys pqi-foc-2
* section obeys pqi-foc-2
* subject 1..* MS
* subject only Reference(MedicinalProductDefinitionDrugProductPq or SubstanceDefinitionComponentSubstanceDrugPq)
* author only Reference(OrganizationDrugPq)
* contained 0..0
* section ^slicing.discriminator.type = #pattern
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section ^slicing.description = "The Product data section is identified by its code"
* section contains productData 0..1 MS
* section[productData] ^short = "Product data (non-CTD) section"
* section[productData].code = CtdSectionPq#pqi-product-data
* section[productData].text 1..1
* section[productData].text.status = #generated
* section[productData].entry 1..*
* section[productData].section 0..0

Profile: CompositionType2Pq
Parent: CompositionProductPq
Id: Composition-type2-pq
Title: "Composition - PQI Type 2"
Description: "PQI Type 2 (document + product data): the Type 1 narrative, plus product, packaging, organization, substance, administrable product and authorization resources listed in the Product data section. CTD sections still reference only image DocumentReferences."
* ^status = #active
* ^abstract = false
* obeys pqi-txt-1 and pqi-t2-1
* category = PqiMaturityType#type-2
* section[productData] 1..1

Profile: CompositionLinkedPq
Parent: CompositionProductPq
Id: Composition-linked-pq
Title: "Composition - PQI Linked Document (base)"
Description: "Abstract base for PQI Types 3-4: section entries point at the resources a section discusses, and each entry is linked to a span of the section narrative with the textLink extension."
* ^status = #active
* ^abstract = true
* section obeys pqi-t3-1
* section.entry.extension contains $textLink named textLink 0..* MS
* section.entry.extension[textLink] ^short = "Links this entry to the narrative span(s) that discuss it: htmlid = span id(s), data = the entry's reference"
// Note: the core textLink extension (Extensions Pack 5.3.0) currently has context Narrative and max 1; 0..* here anticipates its update.
// FMG has confirmed an update to allow it here (0..*); until that release, validators may flag the context.

Profile: CompositionType3Pq
Parent: CompositionLinkedPq
Id: Composition-type3-pq
Title: "Composition - PQI Type 3"
Description: "PQI Type 3 (linked document): every section keeps its authored narrative, and section entries link the narrative to PQI resources."
* ^status = #active
* ^abstract = false
* obeys pqi-txt-1
* category = PqiMaturityType#type-3

Profile: CompositionType4Pq
Parent: CompositionLinkedPq
Id: Composition-type4-pq
Title: "Composition - PQI Type 4"
Description: "PQI Type 4 (data-first document): replaceable sections (vs-ctd-replaceable-pq) may drop their authored narrative and be carried by entries alone; other sections keep linked narrative as in Type 3. Receivers treat the resources, not any generated narrative, as authoritative."
* ^status = #active
* ^abstract = false
* obeys pqi-t4-org and pqi-t4-gen and pqi-t4-comp and pqi-t4-bf and pqi-t4-spec and pqi-t4-ba and pqi-t4-rs and pqi-t4-ccs and pqi-t4-stab
* category = PqiMaturityType#type-4
* section obeys pqi-t4-1
* section.text ^short = "Optional on replaceable headings; SHOULD then be generated from the entries"

// ---------------------------------------------------------------- Bundles

RuleSet: PqiEntrySlicing(rules)
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = {rules}
* entry ^slicing.ordered = false
* entry ^slicing.description = "Entries are sliced by resource type"

RuleSet: PqiImageSlices
* entry contains image 0..* MS and figure 0..* MS
* entry[image].resource only Binary
* entry[image] ^short = "Image bytes, referenced from the narrative as <img src=\"Binary/[id]\"/>"
* entry[figure].resource only DocumentReferenceDrugPq
* entry[figure] ^short = "Figure metadata (type, caption) with content.attachment pointing at the image Binary"

RuleSet: PqiProductSlices
* entry contains
    product 0..* MS and
    item 0..* MS and
    administrable 0..* MS and
    package 0..* MS and
    ingredient 0..* MS and
    substanceDefinition 0..* MS and
    organization 0..* MS and
    authorization 0..* MS
* entry[product].resource only MedicinalProductDefinitionDrugProductPq
* entry[item].resource only ManufacturedItemDefinitionDrugPq
* entry[administrable].resource only AdministrableProductDefinitionPq
* entry[package].resource only PackagedProductDefinitionDrugPq
* entry[ingredient].resource only IngredientDrugPq
* entry[substanceDefinition].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[organization].resource only OrganizationDrugPq
* entry[authorization].resource only RegulatedAuthorizationPq

RuleSet: PqiDomainSlices
* entry contains
    plan 0..* MS and
    testDefinition 0..* MS and
    testResult 0..* MS and
    report 0..* MS and
    batch 0..* MS and
    substance 0..* MS and
    specimen 0..* MS and
    specimenDefinition 0..* MS and
    device 0..* MS and
    activity 0..* MS
* entry[plan].resource only PlanDefinitionDrugPq
* entry[testDefinition].resource only ObservationDefinitionTestMethodPq
* entry[testResult].resource only ObservationTestResultDrugPq
* entry[report].resource only DiagnosticReportAnalysisDrugPQ
* entry[batch].resource only MedicationBatchInformationDrugPq
* entry[substance].resource only SubstanceDrugPq
* entry[specimen].resource only SpecimenDrugPq
* entry[specimenDefinition].resource only SpecimenDefinitionDrugPq
* entry[device].resource only DeviceDefinitionDrugPq
* entry[activity].resource only ActivityDefinitionDrugTestPq

Profile: BundleDocumentPq
Parent: Bundle
Id: Bundle-document-pq
Title: "Bundle - PQI Document (base)"
Description: "Abstract base for every PQI document Bundle (Types 1-4): a FHIR document whose first entry is the Composition."
* ^status = #active
* ^abstract = true
* obeys pqi-doc-1
* identifier 1..1 MS
* type = #document
* type MS
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS
* entry.resource 1..1 MS

Profile: BundleDocumentType1Pq
Parent: BundleDocumentPq
Id: Bundle-document-type1-pq
Title: "Bundle - PQI Type 1 Document"
Description: "PQI Type 1 document: the Composition plus one Binary and one DocumentReference per image, and nothing else."
* ^status = #active
* ^abstract = false
* insert PqiEntrySlicing(#closed)
* entry contains composition 1..1 MS
* entry[composition].resource only CompositionType1Pq
* insert PqiImageSlices

Profile: BundleDocumentType2Pq
Parent: BundleDocumentPq
Id: Bundle-document-type2-pq
Title: "Bundle - PQI Type 2 Document"
Description: "PQI Type 2 document: Type 1 content plus product data resources (product, manufactured item, administrable product, packaging, ingredients, substances, organizations, authorizations)."
* ^status = #active
* ^abstract = false
* insert PqiEntrySlicing(#closed)
* entry contains composition 1..1 MS
* entry[composition].resource only CompositionType2Pq
* insert PqiImageSlices
* insert PqiProductSlices

Profile: BundleDocumentType3Pq
Parent: BundleDocumentPq
Id: Bundle-document-type3-pq
Title: "Bundle - PQI Type 3 Document"
Description: "PQI Type 3 document: Type 2 content plus any PQI domain resource referenced from the CTD sections."
* ^status = #active
* ^abstract = false
* insert PqiEntrySlicing(#open)
* entry contains composition 1..1 MS
* entry[composition].resource only CompositionType3Pq
* insert PqiImageSlices
* insert PqiProductSlices
* insert PqiDomainSlices

Profile: BundleDocumentType4Pq
Parent: BundleDocumentPq
Id: Bundle-document-type4-pq
Title: "Bundle - PQI Type 4 Document"
Description: "PQI Type 4 document: the same resources as Type 3, where replaceable sections are carried by the resources alone."
* ^status = #active
* ^abstract = false
* insert PqiEntrySlicing(#open)
* entry contains composition 1..1 MS
* entry[composition].resource only CompositionType4Pq
* insert PqiImageSlices
* insert PqiProductSlices
* insert PqiDomainSlices

Profile: BundleDocumentCollectionPq
Parent: Bundle
Id: Bundle-document-collection-pq
Title: "Bundle - PQI Document Collection"
Description: "A group of PQI documents sent together, such as a full Module 3.2 (one document per level-3 heading) or a subset of it. Documents in one collection may be at different PQI types. A single document Bundle spanning several level-3 headings is not allowed."
* ^status = #active
* obeys pqi-gran-2
* identifier 1..1 MS
* type = #collection
* type MS
* timestamp 1..1 MS
* entry 1..* MS
* entry.fullUrl 1..1 MS
* entry.resource 1..1 MS
* entry.resource only BundleDocumentType1Pq or BundleDocumentType2Pq or BundleDocumentType3Pq or BundleDocumentType4Pq
