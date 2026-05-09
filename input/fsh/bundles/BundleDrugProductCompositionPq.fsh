Profile: BundleDrugProductCompositionPq
Parent: Bundle
Id: Bundle-drug-product-composition-pq
Title: "Bundle – Drug Product Composition PQ"
Description: "Composition domain: This Bundle profile represents the structured data used in CTD section 3.2.P.1 Description and Composition of the Drug Product."
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
    Drug-Ingredient 1..* and
    Component-Substance 1..* and
    Package-Definition 1..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Drug-Ingredient].resource only IngredientDrugPq
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Package-Definition].resource only PackagedProductDefinitionDrugPq