Profile: BundleBatchFormulaPq
Parent: Bundle
Id: Bundle-batch-formula-pq
Title: "Bundle – Batch Formula PQ"
Description: "Batch Formula domain: This Bundle profile represents the structured data used in CTD section 3.2.P.3 Manufacture, subsection 3.2.P.3.2 Batch Formula."
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
    Product-Ingredient 1..* and
    Component-Substance 1..* and
    Batch-Lot-Information 1..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Product-Ingredient].resource only IngredientDrugPq
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Batch-Lot-Information].resource only MedicationBatchInformationDrugPq