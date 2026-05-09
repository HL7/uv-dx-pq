Profile: BundleDrugStabilityPq
Parent: Bundle
Id: Bundle-drug-stability-pq
Title: "Bundle – Drug Stability PQ"
Description: "Stability Study domain: This Bundle profile represents the structured data used in CTD section 3.2.P.8 Stability, subsection 3.2.P.8.3 Stability Data, and CTD section 3.2.S.7 Stability, subsection 3.2.S.7.3 Stability Data."
* identifier MS
* type = #collection
* type MS
* type ^short = "collection"
* timestamp MS
* entry 12.. MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains
    Product-Identification 0..1 and
    Drug-Ingredient 0..* and
    Component-Substance 1..* and
    Specimen-Definition 1..* and
    Batch-Lot-Information 0..* and
    Actual-Batch-Substance 1..* and
    Actual-Batch-Specimen 1..* and
    Protocol 1..1 and
    Test-Set 1..* and
    Test-Method 1..* and
    Report 1..* and
    Result-Observations 1..* and
    Organization 1..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Drug-Ingredient].resource only IngredientDrugPq
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Specimen-Definition].resource only SpecimenDefinitionDrugPq
* entry[Batch-Lot-Information].resource only MedicationBatchInformationDrugPq
* entry[Actual-Batch-Substance].resource only SubstanceDrugPq
* entry[Actual-Batch-Specimen].resource only SpecimenDrugPq
* entry[Protocol].resource only PlanDefinitionDrugPq
* entry[Test-Set].resource only ActivityDefinitionDrugTestPq
* entry[Test-Method].resource only ObservationDefinitionTestMethodPq
* entry[Report].resource only DiagnosticReportAnalysisDrugPQ
* entry[Result-Observations].resource only ObservationTestResultDrugPq
* entry[Organization].resource only OrganizationDrugPq