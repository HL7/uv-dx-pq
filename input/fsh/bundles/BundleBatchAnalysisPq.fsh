Profile: BundleBatchAnalysisPq
Parent: Bundle
Id: Bundle-batch-analysis-pq
Title: "Bundle – Batch Analysis PQ"
Description: "Batch Analysis domain: This Bundle profile represents the structured data used in CTD section 3.2.P.5 Control of Drug Product, subsection 3.2.P.5.4 Batch Analyses and CTD section 3.2.S.4 Control of Drug Substance, subsection 3.2.S.4.4 Batch Analyses."
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
    Product-Identification 0..1 and
    Product-Ingredient 0..* and
    Component-Substance 1..* and
    Batch-Lot-Information 0..* and
    Actual-Batch-Substance 0..* and
    Protocol 1..* and
    Test-Method 1..* and
    Report 1..* and
    Result-Observations 1..* and
    Organizations 1..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Product-Ingredient].resource only IngredientDrugPq
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Batch-Lot-Information].resource only MedicationBatchInformationDrugPq
* entry[Actual-Batch-Substance].resource only SubstanceDrugPq
* entry[Protocol].resource only PlanDefinitionDrugPq
* entry[Test-Method].resource only ObservationDefinitionTestMethodPq
* entry[Report].resource only DiagnosticReportAnalysisDrugPQ
* entry[Result-Observations].resource only ObservationTestResultDrugPq
* entry[Organizations].resource only OrganizationDrugPq