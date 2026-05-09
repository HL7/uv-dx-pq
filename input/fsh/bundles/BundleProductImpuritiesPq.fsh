Profile: BundleProductImpuritiesPq
Parent: Bundle
Id: Bundle-product-impurities-pq
Title: "Bundle - Product Impurities PQ"
Description: "Impurities domain: This Bundle profile represents the structured data used in CTD section 3.2.P.5 Control of Drug Product, subsection 3.2.P.5.5 Characterisation of Impurities and CTD section 3.2.S.3 Characterisation, subsection 3.2.S.3.2 Impurities."
* identifier MS
* type = #collection
* type MS
* type ^short = "collection"
* timestamp MS
* entry 6.. MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains
    Product-Identification 0..1 and
    Component-Substance 1..* and
    Batch-Lot-Information 0..* and
    Report 0..* and
    Result-Observations 0..* and
    Process-Diagram 0..* and
    Organization 1..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Batch-Lot-Information].resource only MedicationBatchInformationDrugPq
* entry[Report].resource only DiagnosticReportAnalysisDrugPQ
* entry[Result-Observations].resource only ObservationTestResultDrugPq
* entry[Process-Diagram].resource only $DocumentReference-drug-pq
* entry[Organization].resource only OrganizationDrugPq