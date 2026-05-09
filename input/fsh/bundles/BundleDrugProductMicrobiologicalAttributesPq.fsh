Profile: BundleDrugProductMicrobiologicalAttributesPq
Parent: Bundle
Id: Bundle-drug-product-microbiological-attributes-pq
Title: "Bundle – Drug Product Microbiological Attributes PQ"
Description: "Identification domain: This Bundle profile represents the structured data used in CTD section 3.2.P.2 Pharmaceutical Development, subsection 3.2.P.2.5 Microbiological Attributes."
* identifier MS
* type = #collection
* type MS
* type ^short = "collection"
* timestamp MS
* entry MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains
    Product-Identification 1..1 and
    Batch-Lot-Information 1..* and
    Report 1..* and
    Result-Observations 1..* and
    Organization 1..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Batch-Lot-Information].resource only MedicationBatchInformationDrugPq
* entry[Report].resource only DiagnosticReportAnalysisDrugPQ
* entry[Result-Observations].resource only ObservationTestResultDrugPq
* entry[Organization].resource only OrganizationDrugPq