Profile: BundleProductProcessValidationPq
Parent: Bundle
Id: Bundle-product-process-validation-pq
Title: "Bundle - Product Process Validation PQ"
Description: "Process Validation domain: This Bundle profile represents the structured data used in CTD section 3.2.P.3 Manufacture, subsection 3.2.P.3.5 Process Validation and/or Evaluation and CTD section 3.2.S.2 Manufacture, subsection 3.2.S.2.5 Process Validation and/or Evaluation."
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
    Batch-Lot-Information 0..* and
    Actual-Batch-Substance 1..* and
    Protocol 1..* and
    Test-Set 0..* and
    Test-Method 1..* and
    Test-Device 0..* and
    Report 1..* and
    Step-Performance-Procedure 0..* and
    Result-Observations 1..* and
    Organization 1..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Drug-Ingredient].resource only IngredientDrugPq
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Batch-Lot-Information].resource only MedicationBatchInformationDrugPq
* entry[Actual-Batch-Substance].resource only SubstanceDrugPq
* entry[Protocol].resource only PlanDefinitionDrugPq
* entry[Test-Set].resource only ActivityDefinitionDrugTestPq
* entry[Test-Method].resource only ObservationDefinitionTestMethodPq
* entry[Test-Device].resource only DeviceDefinitionDrugPq
* entry[Report].resource only DiagnosticReportAnalysisDrugPQ
* entry[Step-Performance-Procedure].resource only ProcedureDrugPq
* entry[Result-Observations].resource only ObservationTestResultDrugPq
* entry[Organization].resource only OrganizationDrugPq